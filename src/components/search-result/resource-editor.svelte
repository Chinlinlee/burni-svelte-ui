<script>
    import axios from "axios";
    import { Button, Modal } from "flowbite-svelte";
    import { JSONEditor, Mode } from "svelte-jsoneditor";
    import { searchUrl, settings } from "../../store/stores";
    import LoadingModal from "../loading-modal.svelte";

    /** @type {any} */
    export let resource;
    export let open = false;

    /** @type { Promise<any> | undefined}*/
    let updateResourcePromise;
    /** @type {JSONEditor} */
    let myJsonEditor;
    let openLoadingModal = false;

    async function updateResource() {
        try {
            // @ts-ignore
            let editorText = myJsonEditor.get().text;
            let editorResource = JSON.parse(editorText);
            let res = await axios.put(
                `${$settings.server}/${resource.resourceType}/${resource.id}`,
                editorResource
            );
            resource = res.data;
            openLoadingModal = false;
            return res.data;
        } catch (e) {
            throw e;
        }
    }

    function resetJsonEditorContent() {
        myJsonEditor.set({
            text: JSON.stringify(resource, null, 2)
        });
    }
</script>

<Modal title="{resource?.resourceType} / {resource?.id}" bind:open outsideclose>
    {#await updateResourcePromise}
        <LoadingModal bind:openLoadingModal />
    {:then data}
        {#if data}
            <Modal open={true} size="xs" autoclose>
                <div class="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="mx-auto h-12 w-12 text-green-400"
                        fill="currentColor"
                        ><title>information-slab-circle-outline</title><path
                            d="M11 7V9H13V7H11M14 17V15H13V11H10V13H11V15H10V17H14M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z"
                        /></svg
                    >
                    <h3 class="text-lg mb-2">Update Success</h3>
                    <Button>OK</Button>
                </div>
            </Modal>
        {/if}
    {:catch e}
        <Modal open={true} size="xs" autoclose>
            <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                class="mx-auto h-12 w-12 text-primary-300"
                fill="currentColor"
                    ><title>close-circle-outline</title><path
                        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
                    /></svg
                >
                <h3 class="text-lg">Update Failure</h3>
                <p class="mb-2">{e.message}</p>
                <Button>OK</Button>
            </div>
        </Modal>
        <p>Update failure</p>
    {/await}
    <div>
        <JSONEditor
            content={{ text: JSON.stringify(resource, null, 2) }}
            mode={Mode.text}
            escapeControlCharacters={true}
            bind:this={myJsonEditor}
        />
    </div>
    <svelte:fragment slot="footer">
        <Button
            on:click={() => ((openLoadingModal = true), (updateResourcePromise = updateResource()))}
            >Update</Button
        >
        <Button color="yellow" on:click={resetJsonEditorContent}>Reset</Button>
    </svelte:fragment>
</Modal>
