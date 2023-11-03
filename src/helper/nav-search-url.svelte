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
        let urlParam = new URLSearchParams();

        if (aSettings.id) {
            searchUrl.update((v) => (v = urlJoin(aSearchUrl.trim(), aSettings.id.trim())));
            // Disabled parameters section
            doDisabledAllSearchParameterElements();
        } else if (aSettings.parameters.length > 0) {
            doEnabledAllSearchParameterElements();
            appendSearchParameters(urlParam);
            appendResultUrlSearchParameter(urlParam);
            searchUrl.set(aSearchUrl + `?${urlParam.toString()}`);
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

    /**
     *
     * @param {URLSearchParams} urlSearchParams
     */
    function appendSearchParameters(urlSearchParams) {
        // When parameters is not empty and there is no id
        aSettings.parameters.forEach((param) => {
            if (param.modifier) {
                if (["string", "token", "uri"].includes(param.type)) {
                    urlSearchParams.append(`${param.code}:${param.modifier}`, param.value);
                } else {
                    urlSearchParams.append(param.code, `${param.modifier}${param.value}`);
                }
            } else {
                urlSearchParams.append(param.code, param.value);
            }
        });
    }

    /**
     *
     * @param {URLSearchParams} urlSearchParams
     */
    function appendResultUrlSearchParameter(urlSearchParams) {
        aSettings.result.forEach((param) => {
            urlSearchParams.append(param.code, param.value);
        });

        return urlSearchParams;
    }
</script>
