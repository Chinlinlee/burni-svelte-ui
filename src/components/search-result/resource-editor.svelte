<script>
    import { Button, Modal } from "flowbite-svelte";
    import { JSONEditor, Mode } from "svelte-jsoneditor";

    /** @type {any} */
    export let resource;
    export let open = false;
</script>

<Modal title="{resource?.resourceType} / {resource?.id}" bind:open outsideclose>
    <div>
        <JSONEditor
            content={{ text: JSON.stringify(resource, null, 2) }}
            mode={Mode.text}
            escapeControlCharacters={true}
        />
    </div>
    <svelte:fragment slot="footer">
        <Button>Update</Button>
    </svelte:fragment>
</Modal>
