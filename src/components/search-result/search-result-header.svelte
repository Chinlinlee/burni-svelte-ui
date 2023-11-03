<script>
    import { GradientButton, Button } from "flowbite-svelte";
    import { searchUrl, settings } from "../../store/stores";

    /** @type {any} */
    export let fetchedFhirResource;
    /** @type {Promise<any>} */
    export let fetchFhirResourcesData;
    /** @type {()=> Promise<void>}  */
    export let doFetchFhirResourcesData;

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

    function paginationPrevious() {
        let previousUrl = getPreviousUrlInBundle();
        if (previousUrl) {
            $searchUrl = previousUrl;
            fetchFhirResourcesData = doFetchFhirResourcesData();
        }
    }

    async function paginationNext() {
        let nextUrl = getNextUrlInBundle();
        if (nextUrl) {
            $searchUrl = nextUrl;
            fetchFhirResourcesData = doFetchFhirResourcesData();
        }
    }

    function getNextUrlInBundle() {
        return fetchedFhirResource?.link?.find(
            (/**@type {import("../../models/fhir/bundle-link").BundleLink}*/ link) =>
                link?.relation === "next"
        )?.url;
    }

    function getPreviousUrlInBundle() {
        return fetchedFhirResource?.link?.find(
            (/**@type {import("../../models/fhir/bundle-link").BundleLink}*/ link) =>
                link?.relation === "previous"
        )?.url;
    }
</script>

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
        <Button
            on:click={paginationPrevious}
            disabled={!getPreviousUrlInBundle()}
            color="light"
            size="xs"
        >
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
        </Button>
        <Button on:click={paginationNext} disabled={!getNextUrlInBundle()} color="light" size="xs">
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
        </Button>
    </div>
</section>
