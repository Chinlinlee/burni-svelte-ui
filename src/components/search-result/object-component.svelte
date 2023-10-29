<script>
    // @ts-nocheck

    import * as _ from "lodash";
    import ArrayComponent from "./array-component.svelte";

    export let data;
    export let divClass = "";
    export let field;
</script>

<div class={divClass}>
    <div class="object-component">
        {#if field}
            <span>{field}:</span>
        {/if}
        <div class=" border-l-2">
            <div class="ml-2">
                {#each Object.entries(data) as [key, value]}
                    {#if Array.isArray(value)}
                        <ArrayComponent inputArray={value} {key} />
                    {:else if _.isObject(value)}
                        <svelte:self data={value} field={key} />
                    {:else}
                        <div>{key}: {value}</div>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</div>
