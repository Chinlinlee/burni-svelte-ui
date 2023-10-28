<script>
    // @ts-nocheck

    import * as _ from "lodash";
    import ArrayComponent from "./array-component.svelte";

    export let data;
    export let divClass = "";
</script>

<div class={divClass}>
    {#each Object.entries(data) as [key, value]}
        {#if Array.isArray(value)}
            <ArrayComponent inputArray={value} {key} />
        {:else if _.isObject(value)}
            <svelte:self data={value} />
        {:else}
            <div>{key}: {value}</div>
        {/if}
    {/each}
</div>
