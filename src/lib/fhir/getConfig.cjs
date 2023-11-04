const { JSONPath } = require("jsonpath-plus");
const profileResources = require("./data/profiles-resources.json");
const fhirSearchParameters = require("./data/search-parameters.json");
const fsP = require("fs/promises");
const path = require("path");
const _ = require("lodash");

let config = {};

(async () => {
    setResourceTypes();
    setSearchParameters();
    setParamterModifiers();
    await fsP.writeFile(path.join(__dirname, "config.js"), `export default ${JSON.stringify({ config }, null, 4)}`);
})();

function setResourceTypes() {
    let resourceTypes = JSONPath({
        path: "$.*.resource.*.type",
        json: profileResources.entry[0].resource.rest
    });

    config = {
        ...config,
        resourceTypes
    };
}

function setSearchParameters() {
    let searchParameterList = {
        "_common": {
            '_id': { "type": "token", "description": "Resource id (not a full URL)" },
            '_lastUpdated': { "type": "date", "description": "Date last updated. Server has discretion on the boundary precision" },
            '_tag': { "type": "token", "description": "Search by a resource tag" },
            '_profile': { "type": "uri", "description": "Search for all resources tagged with a profile" },
            '_security': { "type": "token", "description": "Search by a security label" },
            '_source': { "type": "uri", "description": "Identifies where the resource comes from" },
            '_list': { "type": "string", "description": "All resources in nominated list (by id, Type/id, url or one of the magic List types)" },
            '_text': { "type": "string", "description": "Text search against the narrative" },
            '_content': { "type": "string", "description": "Text search against the entire resource" },
            '_has': { "type": "string", "description": "" },
            '_type': { "type": "string", "description": "" },
            '_query': { "type": "string", "description": "Custom named query" }
        },
        "_result": {
            '_sort': { "type": "string", "description": "Order to sort results in (can repeat for inner sort orders)" },
            '_summary': { "type": "string", "description": "Just return the summary elements (for resources where this is defined)", "code": ['true', 'false'] },
            '_total': { "type": "string", "description": "", "code": ['none', 'estimate', 'accurate'] },
            '_include': { "type": "string", "description": "Other resources to include in the search results that search matches point to" },
            '_revinclude': { "type": "string", "description": "Other resources to include in the search results when they refer to search matches" },
            '_elements': { "type": "string", "description": "Specific set of elements be returned as part of a resource in the search results" },
            '_contained': { "type": "string", "description": "Whether to return resources contained in other resources in the search matches", "code": ['true', 'false', 'both'] },
            '_containedType': { "type": "string", "description": "If returning contained resources, whether to return the contained or container resource", "code": ['container', 'contained'] }
        }
    };

    for (let i = 0; i < config?.resourceTypes?.length; i++) {
        let resourceType = config.resourceTypes[i];
        let restDef = profileResources.entry[0].resource.rest[0].resource.find(v => v.type === resourceType);
        let searchParamsDefs = JSONPath({
            path: "$.searchParam.*.definition",
            json: restDef
        });


        if (searchParamsDefs.length > 0) {
            getParameterFromDefinitions(resourceType, searchParamsDefs);
        }
    }

    config.searchParameters = {
        ...config.searchParameters,
        ...searchParameterList
    };
}

/**
 * @param {string} resourceType
 * @param {string[]} Defs
 */
function getParameterFromDefinitions(resourceType, Defs) {
    for (let i = 0; i < Defs.length; i++) {
        let def = Defs[i];
        let paramDef = fhirSearchParameters.entry.find(v => v.fullUrl === def);
        let paramType = paramDef.resource.type;
        let paramCode = paramDef.resource.code;
        let paramXPath = _.compact(paramDef.resource.xpath?.split("|")).find(v => v.trim().startsWith("f:" + resourceType));
        let paramXPathPrefixReplaced = paramXPath?.replace(/(f:)|(\/f:)/gm, ".");
        let paramExpression = paramXPathPrefixReplaced?.substring(paramXPathPrefixReplaced.indexOf(".") + 1);
        // The search parameter definition that do not have xpath,
        // Use expression instead
        if (!paramXPath) {
            paramExpression = _.compact(paramDef.resource.expression?.split("|")).find(v => v.trim().startsWith(resourceType))?.trim();
        }

        // Remove condition in the expression
        if (paramExpression.match(/(?=.*\[)(?=.*\])/)) {
            paramExpression = paramExpression.substring(0, paramExpression.indexOf("[")) + paramExpression.substring(paramExpression.indexOf("]") + 1);
        }

        paramExpression = paramExpression.replace(`${resourceType}.`, "").trim();

        _.set(config, `searchParameters.${resourceType}.${paramCode}`, {
            type: paramType,
            expression: paramExpression
        });
    }
}


function setParamterModifiers() {
    const searchParameterModifiers = {
        number: {
            'eq': { value: 'eq', display: '<i class="fa-regular fa-equals"></i>', description: 'the value for the parameter in the resource is equal to the provided value' },
            'ne': { value: 'ne', display: '<i class="fa-regular fa-not-equal"></i>', description: 'the value for the parameter in the resource is not equal to the provided value' },
            'gt': { value: 'gt', display: '<i class="fa-regular fa-greater"></i>', description: 'the value for the parameter in the resource is greater than the provided value' },
            'lt': { value: 'lt', display: '<i class="fa-regular fa-less-than"></i>', description: 'the value for the parameter in the resource is less than the provided value' },
            'ge': { value: 'ge', display: '<i class="fa-regular fa-greater-than-equal"></i>', description: 'the value for the parameter in the resource is greater or equal to the provided value' },
            'le': { value: 'le', display: '<i class="fa-regular fa-less-than-equal"></i>', description: 'the value for the parameter in the resource is less or equal to the provided value' },
            'sa': { value: 'sa', display: 'Start after', description: 'the value for the parameter in the resource starts after the provided value' },
            'eb': { value: 'eb', display: 'End before', description: 'the value for the parameter in the resource ends before the provided value' },
            'ap': { value: 'ap', display: 'Approximately', description: 'the value for the parameter in the resource is approximately the same to the provided value.' }
        },
        date: {
            'eq': { value: 'eq', display: '<i class="fa-regular fa-equals"></i>', description: 'the value for the parameter in the resource is equal to the provided value' },
            'ne': { value: 'ne', display: '<i class="fa-regular fa-not-equal"></i>', description: 'the value for the parameter in the resource is not equal to the provided value' },
            'gt': { value: 'gt', display: '<i class="fa-regular fa-greater-than"></i>', description: 'the value for the parameter in the resource is greater than the provided value' },
            'lt': { value: 'lt', display: '<i class="fa-regular fa-less-than"></i>', description: 'the value for the parameter in the resource is less than the provided value' },
            'ge': { value: 'ge', display: '<i class="fa-regular fa-greater-than-equal"></i>', description: 'the value for the parameter in the resource is greater or equal to the provided value' },
            'le': { value: 'le', display: '<i class="fa-regular fa-less-than-equal"></i>', description: 'the value for the parameter in the resource is less or equal to the provided value' },
            'sa': { value: 'sa', display: 'Start after', description: 'the value for the parameter in the resource starts after the provided value' },
            'eb': { value: 'eb', display: 'End before', description: 'the value for the parameter in the resource ends before the provided value' },
            'ap': { value: 'ap', display: 'Approximately', description: 'the value for the parameter in the resource is approximately the same to the provided value.' }
        },
        string: {
            'contains': { value: 'contains', display: 'contains', description: "It's returns results that include the supplied parameter value anywhere within the field being searched." },
            'exact': { value: 'exact', display: 'exact', description: "It's returns results that match the entire supplied parameter, including casing and accents." }
        },
        token: {
            'text': { value: 'text', display: 'text', description: 'The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text. In this case, the search functions as a normal string search' },
            'not': { value: 'not', display: 'not', description: 'Reverse the code matching described in the paragraph above: return all resources that do not have a matching item. Note that this includes resources that have no value for the parameter - e.g. ?gender:not=male includes all patients that do not have gender = male, including patients that do not have a gender at all' },
            'above': { value: 'above', display: 'above', description: 'The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code. For example, the search concept has an is-a relationship with the coding in the resource, and this includes the coding itself.' },
            'below': { value: 'below', display: 'below', description: 'the search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code. For example, the coding in the resource has an is-a relationship with the search concept, and this includes the coding itself.' },
            'in': { value: 'in', display: 'in', description: 'The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set. The reference may be literal (to an address where the value set can be found) or logical (a reference to ValueSet.url). If the server can treat the reference as a literal URL, it does, else it tries to match known logical ValueSet.url values.' },
            'not-in': { value: 'not-in', display: 'not-in', description: 'The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.' },
            'of-type': { value: 'of-type', display: 'of-type', description: 'The search parameter has the format system|code|value, where the system and code refer to a Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present' }
        },
        reference: {},
        composite: {},
        quantity: {
            'eq': { value: 'eq', display: '<i class="fa-regular fa-equals"></i>', description: 'the value for the parameter in the resource is equal to the provided value' },
            'ne': { value: 'ne', display: '<i class="fa-regular fa-not-equal"></i>', description: 'the value for the parameter in the resource is not equal to the provided value' },
            'gt': { value: 'gt', display: '<i class="fa-regular fa-greater"></i>', description: 'the value for the parameter in the resource is greater than the provided value' },
            'lt': { value: 'lt', display: '<i class="fa-regular fa-less-than"></i>', description: 'the value for the parameter in the resource is less than the provided value' },
            'ge': { value: 'ge', display: '<i class="fa-regular fa-greater-than-equal"></i>', description: 'the value for the parameter in the resource is greater or equal to the provided value' },
            'le': { value: 'le', display: '<i class="fa-regular fa-less-than-equal"></i>', description: 'the value for the parameter in the resource is less or equal to the provided value' },
            'sa': { value: 'sa', display: 'Start after', description: 'the value for the parameter in the resource starts after the provided value' },
            'eb': { value: 'eb', display: 'End before', description: 'the value for the parameter in the resource ends before the provided value' },
            'ap': { value: 'ap', display: 'Approximately', description: 'the value for the parameter in the resource is approximately the same to the provided value.' }
        },
        uri: {
            'below': { value: 'below', display: 'below', description: 'A search that will return any value sets that have a URL that starts with url' },
            'above': { value: 'above', display: 'above', description: 'A search for any value set above a given specific URL' }
        },
        special: {}
    };
    config = {
        ...config,
        searchParameterModifiers
    };
}