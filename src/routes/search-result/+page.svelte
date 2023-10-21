<script>
    import { settings, searchUrl, clickSearchCounter } from "../../store/stores";
    import axios from "axios";
    import { GradientButton, PaginationItem } from "flowbite-svelte";
    import { JSONEditor, Mode } from "svelte-jsoneditor";

    let fetchFhirResourcesData = doFetchFhirResourcesData();
    /** @type {any | undefined}*/
    let fetchedFhirResource;

    $: $clickSearchCounter, (fetchFhirResourcesData = doFetchFhirResourcesData());
    /** @type { JSONEditor[] }*/
    let jsonEditors = [];

    $: {
        if (jsonEditors.length > 0) {
            jsonEditors.forEach((jsonEditor) => {
                jsonEditor.expand((_) => false);
            });
        }
    }

    async function doFetchFhirResourcesData() {
        if (!$searchUrl) return;

        /** @type { import("axios").AxiosRequestConfig<any> | undefined }*/
        let option = undefined;
        if ($settings.token) {
            option = {
                headers: {
                    Authorization: $settings.token
                }
            };
        }
        const response = await axios.get($searchUrl, option);
        fetchedFhirResource = response.data;
        return response.data;
    }

    function paginationPrevious() {
        console.log("do previous");
    }

    function paginationNext() {
        console.log("do next");
    }

    function downloadFetchedFhirResourceJson() {
        if (fetchedFhirResource) {
            const a = document.createElement("a");
            const file = new Blob([JSON.stringify(fetchedFhirResource)], {
                type: "application/json"
            });
            a.href = URL.createObjectURL(file);
            a.download = "fhir-resource.json";
            document.body.append(a);
            a.click();
            a.remove();
        }
    }

    function viewFetchedFhirResource() {
        if (fetchedFhirResource) {
            const a = document.createElement("a");
            a.href = $searchUrl;
            a.target = "_blank";
            document.body.append(a);
            a.click();
            a.remove();
        }
    }
</script>

<section class="container mx-auto mt-2">
    {#await fetchFhirResourcesData}
        <p>waiting...</p>
    {:then fhirResources}
        <section class="search-result-header flex flex-wrap justify-between mb-4">
            <div class="flex flex-wrap">
                <h2 class="text-3xl inline">{$settings.resourceType}</h2>
                <div class="ml-6 inline text-center">
                    <GradientButton
                        color="pink"
                        shadow={true}
                        class="mr-2 view-resource-button"
                        size="sm"
                        on:click={viewFetchedFhirResource}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="w-5 h-5 mr-1"
                            fill="currentColor"
                            ><title>open-in-new</title><path
                                d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                            /></svg
                        >
                        View</GradientButton
                    >
                    <GradientButton
                        color="red"
                        shadow={true}
                        size="sm"
                        class="download-resource-button"
                        on:click={downloadFetchedFhirResourceJson}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="w-5 h-5 mr-1"
                            fill="currentColor"
                            ><title>download</title><path
                                d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
                            /></svg
                        >
                        Download
                    </GradientButton>
                </div>
            </div>
            <div class="flex space-x-3">
                <PaginationItem on:click={paginationPrevious}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="mr-1 w-5 h-5"
                        fill="currentColor"
                        ><title>arrow-left</title><path
                            d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                        /></svg
                    >
                    Previous
                </PaginationItem>
                <PaginationItem on:click={paginationNext}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="mr-1 w-5 h-5"
                        fill="currentColor"
                        ><title>arrow-right</title><path
                            d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                        /></svg
                    >
                    Next
                </PaginationItem>
            </div>
        </section>

        <section class="search-result-body">
            {#if fetchedFhirResource?.resourceType === "Bundle"}
                {#if fetchedFhirResource?.entry?.length > 0}
                    <div class="grid grid-cols-1 gap-4">
                        {#each fetchedFhirResource?.entry as resource, i}
                            <JSONEditor
                                content={{
                                    text: JSON.stringify(resource, null, 2)
                                }}
                                mode={Mode.tree}
                                escapeControlCharacters={true}
                                readOnly={true}
                                bind:this={jsonEditors[i]}
                            />
                        {/each}
                    </div>
                {/if}
            {/if}
        </section>
    {/await}
</section>
