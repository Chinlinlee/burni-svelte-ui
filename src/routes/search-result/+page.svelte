<script>
    import * as _ from "lodash";
    import { settings, searchUrl, clickSearchCounter } from "../../store/stores";
    import axios from "axios";
    import { isUrlValid } from "$lib/index";
    import JsonView from "../../components/search-result/json-view.svelte";
    import TableView from "../../components/search-result/table-view.svelte";
    import SearchResultHeader from "../../components/search-result/search-result-header.svelte";
    import SearchingJsonViewSkeleton from "../../components/search-result/searching-json-view-skeleton.svelte";
    import SearchingGridViewSkeleton from "../../components/search-result/searching-grid-view-skeleton.svelte";
    import { Alert } from "flowbite-svelte";

    /** @type {boolean[]} */
    let openResourceEditorBooleans = [];
    
    let fetchFhirResourcesData = doFetchFhirResourcesData($searchUrl);
    /** @type {any | undefined}*/
    let fetchedFhirResource;
    

    $: $clickSearchCounter, (fetchFhirResourcesData = doFetchFhirResourcesData($searchUrl));

    /**
     * 
     * @param {string} url
     */
    async function doFetchFhirResourcesData(url) {
        if (!isUrlValid(url)) return;

        openResourceEditorBooleans = [];
        openResourceEditorBooleans.length = 0;

        /** @type { import("axios").AxiosRequestConfig<any> | undefined }*/
        let option = undefined;
        if ($settings.token) {
            option = {
                headers: {
                    Authorization: $settings.token
                }
            };
        }
        const response = await axios.get(url, option);
        fetchedFhirResource = response.data;
        changeSingleResourceToBundle();
        return response.data;
    }

    function changeSingleResourceToBundle() {
        if (fetchedFhirResource.resourceType !== "Bundle") {
            fetchedFhirResource = {
                resourceType: "Bundle",
                type: "searchset",
                entry: [
                    {
                        resource: fetchedFhirResource
                    }
                ]
            };
        }
    }
</script>

<svelte:head>
    <title>Burni UI - Search Result</title>
</svelte:head>

<section class="container mx-auto mt-2">
    {#await fetchFhirResourcesData}
        <div class:hidden={$settings.layout !== "json-viewer"}>
            <SearchingJsonViewSkeleton />
        </div>
        <div class:hidden={$settings.layout !== "grid"}>
            <SearchingGridViewSkeleton />
        </div>
    {:then fhirResources}
        <SearchResultHeader
            bind:fetchedFhirResource
            bind:fetchFhirResourcesData
            {doFetchFhirResourcesData}
        />
        <div class="layout-json-viewer">
            <section class="search-result-body">
                {#if fetchedFhirResource?.resourceType === "Bundle"}
                    {#if fetchedFhirResource?.entry?.length > 0}
                        <div
                            class="resource-content-json-view {$settings.layout === 'json-viewer'
                                ? ''
                                : 'hidden'}"
                        >
                            <JsonView entry={fetchedFhirResource?.entry} />
                        </div>
                        <div
                            class="resource-content-grid {$settings.layout === 'grid'
                                ? ''
                                : 'hidden'}"
                        >
                            <TableView entry={fetchedFhirResource?.entry} />
                        </div>
                    {/if}
                {/if}
            </section>
        </div>
    {:catch e}
        <Alert class="text-center">
            <span class="font-medium">{e.message}</span>
        </Alert>
        
    {/await}
</section>
