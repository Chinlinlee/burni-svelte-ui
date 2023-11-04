<script>
    import { ResourceSearchParameter } from "$lib/fhir/resource-search-parameter";
    import { Dropdown, DropdownItem } from "flowbite-svelte";

    export let openSearchParameterDropDown = false;
    export let resourceTypes = ["Patient"];
    /** @type {(param:string, paramInfo:import("../models/search-parameters").SearchParameterInfo) => void}  */
    export let onSelectSearchParameter;
</script>

<Dropdown
    class="dropdown-search-parameters min-w-[10rem] overflow-y-auto max-h-64"
    bind:open={openSearchParameterDropDown}
>
    {#each resourceTypes as resourceType}
        <div class="pl-4 py-2 border-b-2 font-bold">
            <span>{resourceType}</span>
        </div>
        {#each Object.entries(ResourceSearchParameter.getResourceSearchParameters(resourceType)) as [param, paramInfo]}
            <DropdownItem
                class="pl-6"
                on:click={() => {
                    onSelectSearchParameter(param, paramInfo);
                }}>{param}</DropdownItem
            >
        {/each}
    {/each}

</Dropdown>
