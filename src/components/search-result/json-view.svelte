<script>
    import * as _ from "lodash";
    import { Card } from "flowbite-svelte";
    import { JSONEditor, Mode } from "svelte-jsoneditor";
    import ResourceEditor from "./resource-editor.svelte";
    import { mdFileDocumentEdit } from "$lib/icon/md-file-document-edit";
    import { mdDelete } from "$lib/icon/md-delete";
    import DeleteButton from "./resource-instance-header/delete-button.svelte";
    import { onMount } from "svelte";

    /** @type {any} */
    export let entry;
    /** @type {boolean[]}*/
    let openResourceEditorBooleans = [];
    /** @type {import("svelte-jsoneditor").JSONEditor[]}*/
    let jsonEditors = [];

    $: {
        if (jsonEditors.length > 0 && entry) {
            jsonEditors.forEach((jsonEditor) => {
                jsonEditor?.expand((_) => false);
            });
        }
    }

    /**
     *
     * @param  { import("svelte-jsoneditor").MenuItem[] } items
     * @param  { {mode: 'tree'|'text' | 'table', modal: boolean} } context
     * @param {number} index
     */
    function onJsonEditorMenuRender(items, context, index) {
        console.log("context", context);
        /** @type {import("svelte-jsoneditor").MenuItem} */
        const updateButton = {
            type: "button",
            title: "Update Resource",
            onClick: () => (openResourceEditorBooleans[index] = true),
            disabled: false,
            icon: mdFileDocumentEdit
        };
        /** @type {import("svelte-jsoneditor").MenuItem} */
        const deleteButton = {
            type: "button",
            title: "Delete Resource",
            onClick: () => {
                /** @type {HTMLButtonElement | null} */
                let deleteResourceButton = document.querySelector(`.section-btn-delete-${index} .btn-delete-resource`);
                deleteResourceButton?.click();
            },
            disabled: false,
            icon: mdDelete
        };
        items.splice(items.length - 1, 0, {
            type: "separator"
        });
        items.splice(items.length - 1, 0, updateButton);
        items.splice(items.length -1, 0 , deleteButton);
        console.log("items", items);

        return items;
    }

    onMount(() => {
        let deleteButtons = document.querySelectorAll(".json-view .btn-delete-resource");
        deleteButtons?.forEach(btn => btn.classList.add("hidden"));
    });
</script>

<div class="grid grid-cols-1 gap-4">
    {#each entry as entry, i}
        <div class="resource-content-body">
            <Card class="w-full max-w-[100%]">
                <h3 class="text-xl font-bold">
                    {entry?.resource?.resourceType} / {entry?.resource?.id}
                </h3>
                <div class="json-view">
                    <JSONEditor
                        content={{
                            text: JSON.stringify(entry?.resource, null, 2)
                        }}
                        mode={Mode.tree}
                        escapeControlCharacters={true}
                        readOnly={true}
                        onRenderMenu={(items, context) => onJsonEditorMenuRender(items, context, i)}
                        bind:this={jsonEditors[i]}
                    />
                    <ResourceEditor
                        bind:open={openResourceEditorBooleans[i]}
                        resource={entry?.resource}
                    />
                    <div class="section-btn-delete-{i}">
                        <DeleteButton resourceType={entry?.resource?.resourceType} resourceId={entry?.resource?.id} isIconButton={true}></DeleteButton>
                    </div>
                </div>
            </Card>
        </div>
    {/each}
</div>