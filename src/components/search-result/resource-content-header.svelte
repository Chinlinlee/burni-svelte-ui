<script>
    import { Button } from "flowbite-svelte";
    import ResourceEditor from "./resource-editor.svelte";
    import DeleteButton from "./resource-instance-header/delete-button.svelte";

    /** @type {boolean} */
    export let openResourceEditorBoolean = false;
    /** @type {any}*/
    export let resource;
</script>

<div class="resource-content-header">
    <Button on:click={() => (openResourceEditorBoolean = true)} color="primary" class="mb-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 h-5 mr-1"
            fill="currentColor"
            ><title>file-document-edit-outline</title><path
                d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z"
            /></svg
        >
        Edit
    </Button>
    <ResourceEditor bind:open={openResourceEditorBoolean} {resource} />

    <DeleteButton
        resourceType={resource?.resourceType}
        resourceId={resource?.id}
    ></DeleteButton>
</div>
