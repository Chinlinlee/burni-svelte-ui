import { writable } from "svelte/store";
import { persisted } from "svelte-persisted-store";

export const settings = persisted("burni-ui-settings", {
    server: "https://hapi.fhir.tw/fhir",
    id: "",
    resourceType: "Patient",
    token: "",
    /** @type {import("../models/search-parameters.d").SearchParameter[] } */
    parameters: [],
    result: [{
        code: "_count",
        value: "10",
        display: "",
        modifier: "",
        type: "number",
    }],
    layout: "json-viewer"
});

export const disabledNavSearchButton = writable(true);
export const searchUrl = writable("");
export const clickSearchCounter = writable(0);