<script>
    import * as _ from "lodash";
    import { Card } from "flowbite-svelte";
    import { JSONEditor, Mode } from "svelte-jsoneditor";
    import ResourceContentHeader from "./resource-content-header.svelte";

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
</script>

<div class="grid grid-cols-1 gap-4">
    {#each entry as entry, i}
        <ResourceContentHeader bind:openResourceEditorBoolean={openResourceEditorBooleans[i]} resource={entry?.resource}></ResourceContentHeader>
        <div class="resource-content-body">
            <Card class="w-full max-w-[100%]">
                <h3 class="text-xl font-bold">
                    {entry?.resource?.resourceType} / {entry?.resource?.id}
                </h3>
                <div>
                    <JSONEditor
                        content={{
                            text: JSON.stringify(entry?.resource, null, 2)
                        }}
                        mode={Mode.tree}
                        escapeControlCharacters={true}
                        readOnly={true}
                        bind:this={jsonEditors[i]}
                    />
                </div>
            </Card>
        </div>
    {/each}
</div>
