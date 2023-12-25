<script>
    // @ts-nocheck

    import {
        AccordionItem,
        Accordion,
        TableBodyRow,
        TableBodyCell,
        Table,
        Button
    } from "flowbite-svelte";
    import * as _ from "lodash";

    import ObjectTable from "./object-table.svelte";

    export let inputArray;
    export let divClass = "";
    export let key;
</script>

<TableBodyRow>
    <TableBodyCell>
        {key}
    </TableBodyCell>
    <TableBodyCell>
        {#each inputArray as item, index}
            {#if _.isString(item)}
                <p class="p-2">{index + 1}. {item}</p>
            {:else if Array.isArray(item)}
                <svelte:self inputArray={item} key={index} />
            {:else}
                <Accordion rounded={false} class="border-none">
                    <AccordionItem class="border-none">
                        <span slot="header">item {index + 1}.</span>
                        <Table>
                            <ObjectTable data={item} field="" />
                        </Table>
                    </AccordionItem>
                </Accordion>
            {/if}
        {/each}
    </TableBodyCell>
</TableBodyRow>
