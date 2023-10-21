<script>
    import { settings, searchUrl, clickSearchCounter } from "../../store/stores";
    import axios from "axios";
    import { GradientButton, PaginationItem } from "flowbite-svelte";
    import { JSONEditor, Mode } from "svelte-jsoneditor";

    let fetchFhirResourcesData = doFetchFhirResourcesData();
    /** @type {any | undefined}*/
    let fetchedFhirResource;

    $: $clickSearchCounter, (fetchFhirResourcesData = doFetchFhirResourcesData());

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
                <div class="ml-6 inline">
                    <GradientButton
                        color="pink"
                        shadow={true}
                        class="mr-2 view-resource-button"
                        size="sm"
                        on:click={viewFetchedFhirResource}>View</GradientButton
                    >
                    <GradientButton
                        color="red"
                        shadow={true}
                        size="sm"
                        class="download-resource-button"
                        on:click={downloadFetchedFhirResourceJson}>Download</GradientButton
                    >
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

        <section class="search-result-body flex flex-wrap">
            {#if fetchedFhirResource?.resourceType === "Bundle"}
                {#if fetchedFhirResource?.entry?.length > 0}
                    <div class="grid grid-cols-1 gap-4">
                        {#each fetchedFhirResource?.entry as resource}
                            <JSONEditor
                                content={{
                                    text: JSON.stringify(resource, null, 2)
                                }}
                                mode={Mode.tree}
                                escapeControlCharacters={true}
                                readOnly={true}
                            />
                        {/each}
                    </div>
                {/if}
            {/if}
        </section>
    {/await}
</section>
