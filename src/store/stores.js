import { writable } from "svelte/store";

export const settings = writable({
    server: "",
    id: "",
    resourceType: "Patient",
    token: "",
    /** @type {import("../models/search-parameters.d").SearchParameter[] } */
    parameters: [],
    displays: [{
        code: "_count",
        value: "20",
        display: "",
        modifier: "",
        type: "number",
    }]
});

export const disabledNavSearchButton = writable(true);
export const searchUrl = writable("");
export const clickSearchCounter = writable(0);