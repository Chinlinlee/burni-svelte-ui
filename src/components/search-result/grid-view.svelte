<script>
    import * as _ from "lodash";
    import { Card } from "flowbite-svelte";
    import ArrayComponent from "./array-component.svelte";
    import ObjectComponent from "./object-component.svelte";
    import ResourceContentHeader from "./resource-content-header.svelte";

    /** @type {any} */
    export let entry;
    /** @type {boolean[]}*/
    let openResourceEditorBooleans = [];
</script>

<div class="grid grid-cols-2 gap-4">
    {#each entry as entry, i}
        <div class="resource-content-body">
            <ResourceContentHeader bind:openResourceEditorBoolean={openResourceEditorBooleans[i]} resource={entry?.resource}></ResourceContentHeader>
            <Card class="w-full max-w-[100%]">
                <h3 class="text-xl font-bold">
                    {entry?.resource?.resourceType} / {entry?.resource
                        ?.id}
                </h3>
                {#each Object.entries(entry?.resource) as [key, value]}
                    {#if Array.isArray(value)}
                        <ArrayComponent inputArray={value} {key} />
                    {:else if _.isObject(value)}
                        <ObjectComponent data={value} field={key} />
                    {:else}
                        <div>{key}: {value}</div>
                    {/if}
                {/each}
            </Card>
        </div>
    {/each}
</div>
