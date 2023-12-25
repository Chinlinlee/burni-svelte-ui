<script>
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";
    import * as _ from "lodash";
    import ArrayTable from "./array-table.svelte";

    export let data;
    export let divClass = "";
    /** @type {string}*/
    export let field;
</script>

<TableBodyRow>
    <TableBodyCell colspan={2} tdClass="w-full">
        <div class={divClass}>
            <Table class="w-full">
                <TableBody class="divide-y">
                    {#if field}
                    <TableBodyCell class="w-[25%]">
                        {field}
                    </TableBodyCell>
                    {/if}
                    <TableBodyCell class="{field ? 'w-[70%]' : 'w-full'}">
                        {#each Object.entries(data) as [key, value]}
                            {#if Array.isArray(value)}
                                <ArrayTable inputArray={value} {key} />
                            {:else if _.isObject(value)}
                                <svelte:self data={value} field={key} />
                            {:else}
                                <TableBodyRow>
                                    <TableBodyCell class="text-wrap">{key}</TableBodyCell>
                                    <TableBodyCell class="text-wrap whitespace-normal"
                                        >{value}</TableBodyCell
                                    >
                                </TableBodyRow>
                            {/if}
                        {/each}
                    </TableBodyCell>
                </TableBody>
            </Table>
        </div>
    </TableBodyCell>
</TableBodyRow>
