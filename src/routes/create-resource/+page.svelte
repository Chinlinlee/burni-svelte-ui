<script>
    import { settings } from "../../store/stores";
    import axios from "axios";

    import { Input, Label, Button, Alert } from "flowbite-svelte";
    import { JSONEditor, Mode } from "svelte-jsoneditor";
    import { Highlight, LineNumbers } from "svelte-highlight";
    import { json } from "svelte-highlight/languages/json";
    import edgeLight from "svelte-highlight/styles/edge-light";
    import LoadingModal from "../../components/loading-modal.svelte";

    /** @type { Promise<any> }*/
    let createResourcePromise;
    let resourceId = "";
    /** @type { JSONEditor } */
    let jsonEditorForCreate;
    let errorMessage = "";

    let openLoadingModal = false;
    let openSuccessInfoModal = false;

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
            openSuccessInfoModal = true;
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
</script>

<svelte:head>
    {@html edgeLight}
</svelte:head>

<section class="container create-resource-section mx-auto flex flex-row flex-wrap">
    <h3 class="text-xl font-bold mb-4">Request Creating Resource</h3>
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
        <Button on:click={() => (createResourcePromise = createResource())}>Create</Button>
        <Button color="light" on:click={reset}>Reset</Button>
    </section>

    {#if createResourcePromise}
        {#await createResourcePromise}
            <LoadingModal bind:openLoadingModal />
        {:then data}
            <section class="flex flex-wrap flex-row w-full" id="response-created-resource-section">
                <h3 class="text-xl font-bold mb-4">Response Created Resource</h3>
                <Highlight language={json} code={JSON.stringify(data, null, 2)} let:highlighted>
                    <LineNumbers {highlighted} wrapLines></LineNumbers>
                </Highlight>
            </section>
        {/await}
    {/if}

    <section class="flex mb-4 w-full {errorMessage ? '' : 'hidden'}" id="error-message-section">
        <Alert class="font-medium w-full text-center">{errorMessage}</Alert>
    </section>
</section>
