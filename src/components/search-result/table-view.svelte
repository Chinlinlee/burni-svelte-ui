<script>
    import * as _ from "lodash";
    import { Card, Table, TableBody, TableBodyCell, TableBodyRow } from "flowbite-svelte";
    import ArrayComponent from "./array-component.svelte";
    import ObjectComponent from "./object-component.svelte";
    import ObjectTable from "./object-table.svelte";
    import Operations from "./resource-instance-header/operations.svelte";
    import ArrayTable from "./array-table.svelte";

    /** @type {any} */
    export let entry;
    /** @type {boolean[]}*/
    let openResourceEditorBooleans = [];
</script>

<div class="grid grid-cols-2 gap-4">
    {#each entry as entry, i}
        <div class="resource-content-body relative">
            <Card class="w-full max-w-[100%]">
                <Operations
                    bind:openResourceEditorBoolean={openResourceEditorBooleans[i]}
                    resource={entry?.resource}
                />
                <h3 class="text-xl font-bold">
                    {entry?.resource?.resourceType} / {entry?.resource?.id}
                </h3>
                <Table shadow class="w-full">
                    <TableBody>
                        {#each Object.entries(entry?.resource) as [key, value]}
                            {#if Array.isArray(value)}
                                <!-- <ArrayComponent inputArray={value} {key} /> -->
                                <ArrayTable inputArray={value} {key} />
                            {:else if _.isObject(value)}
                                <ObjectTable data={value} field={key} divClass="table w-full" />
                            {:else}
                                <TableBodyRow>
                                    <TableBodyCell class="w-[25%] ">{key}</TableBodyCell>
                                    <TableBodyCell class="w-[70%] whitespace-normal">{value}</TableBodyCell>
                                </TableBodyRow>
                            {/if}
                        {/each}
                    </TableBody>
                </Table>
            </Card>
        </div>
    {/each}
</div>
