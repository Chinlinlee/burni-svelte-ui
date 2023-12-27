<script>
    import { settings } from "../../store/stores";
    import axios from "axios";

    import { Input, Label, Button, Alert, Toast } from "flowbite-svelte";
    import { JSONEditor, Mode } from "svelte-jsoneditor";
    import { Highlight, LineNumbers } from "svelte-highlight";
    import { json } from "svelte-highlight/languages/json";
    import edgeLight from "svelte-highlight/styles/edge-light";
    import LoadingModal from "../../components/loading-modal.svelte";
    import { fly } from "svelte/transition";
    import { CheckCircleSolid } from "flowbite-svelte-icons";

    /** @type { Promise<any> }*/
    let createResourcePromise;
    let resourceId = "";
    /** @type { JSONEditor } */
    let jsonEditorForCreate;
    let errorMessage = "";

    let openLoadingModal = false;
    let openCreatedSuccessfulToast = false;
    let openRequestCreatingResourceSection = true;
    let openResponseCreatedResourceSection = true;

    async function createResource() {
        try {
            /** @ts-ignore */
            let editorText = jsonEditorForCreate.get().text;
            let editorResource = JSON.parse(editorText);
            let postUrl = resourceId
                ? `${$settings.server}/${editorResource.resourceType}/${resourceId}`
                : `${$settings.server}/${editorResource.resourceType}`;

            let res;
            if (resourceId) {
                editorResource.id = resourceId;
                res = await axios.put(postUrl, editorResource);
            } else {
                res = await axios.post(postUrl, editorResource);
            }
            openLoadingModal = false;
            setTimeout(() => {
                openCreatedSuccessfulToast = true;
            }, 250);
            autoHideCreatedSuccessfulToast();
            errorMessage = "";
            return res.data;
        } catch (e) {
            if (e instanceof axios.AxiosError) {
                let errorData = e.response?.data;
                if ((errorData.resourceType = "OperationOutcome")) 1;
                errorMessage = errorData.issue[0].diagnostics;
            }

            setTimeout(() => {
                let errorAlertElement = document.getElementById("error-message-section");
                errorAlertElement?.scrollIntoView({
                    behavior: "auto",
                    block: "end",
                    inline: "nearest"
                });
            }, 100);

            throw e;
        }
    }

    function reset() {
        jsonEditorForCreate.$set({
            content: {
                text: ""
            }
        });
    }

    function autoHideCreatedSuccessfulToast() {
        setTimeout(() => {
            openCreatedSuccessfulToast = false;
        }, 3000);
    }

    function toggleRequestCreatingResourceSection() {
        openRequestCreatingResourceSection = !openRequestCreatingResourceSection;
        doAnimationForSection(
            openRequestCreatingResourceSection,
            "section-request-creating-resource"
        );
    }

    function toggleResponseCreatedResourceSection() {
        openResponseCreatedResourceSection = !openResponseCreatedResourceSection;
        doAnimationForSection(
            openResponseCreatedResourceSection,
            "section-response-created-resource"
        );
    }

    /**
     *
     * @param {boolean} isOpen
     * @param {string} elementId
     */
    function doAnimationForSection(isOpen, elementId) {
        let element = document.getElementById(elementId);
        if (isOpen) {
            element?.classList.remove("hidden");
            setTimeout(() => {
                element?.classList.remove("section-invisible");
                element?.classList.add("section-visible");
            });
        } else {
            element?.classList.add("section-invisible");
            element?.classList.remove("section-visible");
            setTimeout(() => {
                element?.classList.add("hidden");
            }, 500);
        }
    }
</script>

<svelte:head>
    {@html edgeLight}
</svelte:head>

<section class="container create-resource-section mx-auto flex flex-row flex-wrap">
    <button
        class="float-left relative cursor-pointer flex w-full"
        on:click={toggleRequestCreatingResourceSection}
    >
        {#if openRequestCreatingResourceSection}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5"
                ><title>collapse</title><path
                    d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                /></svg
            >
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5"
                ><title>expand</title><path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                /></svg
            >
        {/if}
        <h3 class="text-xl font-bold mb-4">Request Creating Resource</h3>
    </button>
    <section
        class="flex flex-wrap flex-row w-full section-visible"
        id="section-request-creating-resource"
    >
        <section class="flex mb-4 w-full">
            <Label for="create-resource-id" class="block mb-2" />
            <Input
                id="create-resoruce-id"
                bind:value={resourceId}
                placeholder="resource id (optional)"
            />
        </section>

        <section class="flex mb-4 w-full" id="request-creating-resource-section">
            <JSONEditor
                content={{ text: "" }}
                mode={Mode.text}
                escapeControlCharacters={true}
                bind:this={jsonEditorForCreate}
            />
        </section>

        <section class="flex mb-4 justify-end w-full gap-2" id="operations-section">
            <Button
                on:click={() => (
                    (openLoadingModal = true), (createResourcePromise = createResource())
                )}>Create</Button
            >
            <Button color="light" on:click={reset}>Reset</Button>
        </section>

        <section class="flex mb-4 w-full {errorMessage ? '' : 'hidden'}" id="error-message-section">
            <Alert class="font-medium w-full text-center">{errorMessage}</Alert>
        </section>
    </section>

    {#if createResourcePromise}
        {#await createResourcePromise}
            <LoadingModal bind:openLoadingModal />
        {:then data}
            <button
                class="float-left relative cursor-pointer flex w-full"
                on:click={toggleResponseCreatedResourceSection}
            >
                {#if openResponseCreatedResourceSection}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5"
                        ><title>collapse</title><path
                            d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                        /></svg
                    >
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5"
                        ><title>expand</title><path
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                        /></svg
                    >
                {/if}
                <h3 class="text-xl font-bold mb-4">Response Created Resource</h3>
            </button>
            <section
                class="flex flex-wrap flex-row w-full section-visible"
                id="section-response-created-resource"
            >
                <Highlight language={json} code={JSON.stringify(data, null, 2)} let:highlighted>
                    <LineNumbers {highlighted} wrapLines />
                </Highlight>
            </section>
        {/await}
    {/if}
</section>

<Toast
    color="green"
    id="toast-created-successful"
    transition={fly}
    bind:open={openCreatedSuccessfulToast}
    position="top-right"
    class="fixed top-28 right-5"
>
    <svelte:fragment slot="icon">
        <CheckCircleSolid class="w-5 h-5" />
        <span class="sr-only">Successful Icon</span>
    </svelte:fragment>
    Create resource successful.
</Toast>

<style>
    .section-visible {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s, all 0.5s linear;
    }

    :global(.section-invisible) {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, all 0.5s linear;
    }
</style>
