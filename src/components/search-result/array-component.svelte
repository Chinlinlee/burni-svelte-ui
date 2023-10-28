<script>
    // @ts-nocheck

    import { AccordionItem, Accordion } from "flowbite-svelte";
    import * as _ from "lodash";

    import ObjectComponent from "./object-component.svelte";

    export let inputArray;
    export let divClass = "";
    export let key;
</script>

<div class={divClass}>
    <Accordion rounded={false}>
        <AccordionItem defaultClass="flex items-center justify-between w-full font-medium text-left border-gray-200 dark:border-gray-700">
            <span slot="header">{key}:</span>
            {#each inputArray as item, index}
                {#if _.isString(item)}
                    <p>{index + 1}. {item}</p>
                {:else if Array.isArray(item)}
                    <svelte:self inputArray={item} key={index} />
                {:else}
                    <p>{index + 1}.</p>
                    <ObjectComponent data={item} />
                {/if}
            {/each}
        </AccordionItem>
    </Accordion>
</div>
