<script>
    import axios from "axios";
    import { Button, Modal } from "flowbite-svelte";
    import { JSONEditor, Mode } from "svelte-jsoneditor";
    import { searchUrl, settings } from "../../store/stores";

    /** @type {any} */
    export let resource;
    export let open = false;

    /** @type { Promise<any> | undefined}*/
    let updateResourcePromise;
    /** @type {JSONEditor} */
    let myJsonEditor;

    async function updateResource() {
        // @ts-ignore
        let editorText = myJsonEditor.get().text;
        let editorResource = JSON.parse(editorText);
        let res = await axios.put(
            `${$settings.server}/${resource.resourceType}/${resource.id}`,
            editorResource
        );
        resource = res.data;
        return res.data;
    }

    function resetJsonEditorContent() {
        myJsonEditor.set({
            text: JSON.stringify(resource, null, 2)
        });
    }
</script>

<Modal title="{resource?.resourceType} / {resource?.id}" bind:open outsideclose>
    {#await updateResourcePromise}
        <p>waiting...</p>
    {:then data}
        {#if data}
            <p>Update success</p>
        {/if}
    {:catch}
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
        <Button on:click={() => (updateResourcePromise = updateResource())}>Update</Button>
        <Button color="yellow" on:click={resetJsonEditorContent}>Reset</Button>
    </svelte:fragment>
</Modal>
