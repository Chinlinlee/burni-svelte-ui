<script context="module">
    import urlJoin from "$lib/url-join";
    import { searchUrl, settings } from "../store/stores";
    /** @type {import("../models/settings").Settings } */
    let aSettings;
    /** @type {string} */
    let aSearchUrl;

    const searchUrlUnSubscription = searchUrl.subscribe((value) => {
        aSearchUrl = value;
    });
    const settingUnSubscription = settings.subscribe((value) => {
        aSettings = value;
    });

    export const changeNavSearchUrl = function () {
        searchUrl.set(urlJoin(aSettings.server, aSettings.resourceType));

        if (aSettings.id) {
            searchUrl.update((v) => (v = urlJoin(aSearchUrl, aSettings.id)));
            // Disabled parameters section
            doDisabledAllSearchParameterElements();
        } else if (aSettings.parameters.length > 0) {
            doEnabledAllSearchParameterElements();
            appendSearchParameters();
        }
        searchUrl.update((v) => (v = decodeURIComponent(aSearchUrl)));
    };

    function doDisabledAllSearchParameterElements() {
        let parameterSection = document.querySelector(".settings-added-parameters");
        let elements = parameterSection?.querySelectorAll("input, button");

        elements?.forEach((element) => {
            element.setAttribute("disabled", "true");
            if (element.tagName === "BUTTON") {
                element.classList.add("opacity-50");
                element.classList.add("cursor-not-allowed");
            }
        });
    }

    function doEnabledAllSearchParameterElements() {
        let parameterSection = document.querySelector(".settings-added-parameters");
        let elements = parameterSection?.querySelectorAll("input, button");

        elements?.forEach((element) => {
            element.removeAttribute("disabled");
            if (element.tagName === "BUTTON") {
                element.classList.remove("opacity-50");
                element.classList.remove("cursor-not-allowed");
            }
        });
    }

    function appendSearchParameters() {
        // When parameters is not empty and there is no id
        let urlParam = new URLSearchParams();
        aSettings.parameters.forEach((param) => {
            if (param.modifier) {
                if (["string", "token", "uri"].includes(param.type)) {
                    urlParam.append(`${param.code}:${param.modifier}`, param.value);
                } else {
                    urlParam.append(param.code, `${param.modifier}${param.value}`);
                }
            } else {
                urlParam.append(param.code, param.value);
            }
        });

        searchUrl.set(aSearchUrl + `?${urlParam.toString()}`);
    }
</script>
