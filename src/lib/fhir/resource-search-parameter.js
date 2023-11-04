import config from "$lib/fhir/config";


export class ResourceSearchParameter {
    /**
     * 
     * @param {string} resourceType 
     * @returns 
     */
    static getResourceSearchParameters(resourceType) {
        // @ts-ignore
        return config.config.searchParameters[resourceType];
    }

    /**
    *
    * @param {string} resourceType
    * @param {string} param
    */
    static getSearchParameterModifier(resourceType, param) {
        let paramInfo = ResourceSearchParameter.getResourceSearchParameters(resourceType)?.[param];
        // @ts-ignore
        return config.config.searchParameterModifiers[paramInfo.type];
    }

}