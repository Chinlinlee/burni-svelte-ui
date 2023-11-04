<script>
    import { Input, ButtonGroup, Button, Dropdown, DropdownItem } from "flowbite-svelte";
    // @ts-ignore
    import { isUndefined } from "lodash";
    import config from "$lib/fhir/config";
    import { ResourceSearchParameter } from "$lib/fhir/resource-search-parameter";

    import { settings } from "../store/stores";
    import SettingsSearchParameterDropdown from "./settings-search-parameter-dropdown.svelte";

    const inputFocusClass = "focus:border-gray-500 focus:ring-gray-500";

    export let isAddedComponent = false;
    export let selectedResourceType = "Patient";
    /** @type {number| undefined}*/
    export let index;

    let initSearchParameter = {
        code: "Choose Parameters",
        value: "",
        display: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><title>equal</title><path d="M19,10H5V8H19V10M19,16H5V14H19V16Z" /></svg>`,
        modifier: "",
        type: ""
    };
    export let curSearchParameter = { ...initSearchParameter };

    let openSearchParameterDropDown = false;
    let openModifierDropDown = false;

    let showValueForSearchParameterRequired = false;

    /**
     *
     * @param {string} param
     * @param {import("../models/search-parameters").SearchParameterInfo} paramInfo
     */
    function onSelectSearchParameter(param, paramInfo) {
        curSearchParameter.code = param;
        curSearchParameter.type = paramInfo.type;
        openSearchParameterDropDown = false;
    }

    /**
     *
     * @param {string} modifierPrefix
     * @param {any} modifierInfo
     */
    function onSelectModifierForSearchParameter(modifierPrefix, modifierInfo) {
        curSearchParameter.modifier = modifierPrefix;
        curSearchParameter.display = modifierInfo.display;
        openModifierDropDown = false;

        let indexNum = Number(index);
        if (Number.isInteger(indexNum) && indexNum >= 0) {
            $settings.parameters[indexNum] = curSearchParameter;
        }
    }

    function removeSearchParameter() {
        let indexNum = Number(index);
        if (Number.isInteger(indexNum) && indexNum >= 0) {
            $settings.parameters.splice(indexNum, 1);
        }

        $settings.parameters = $settings.parameters;
    }

    function addSearchParameter() {
        if (!curSearchParameter.value) {
            showValueForSearchParameterRequired = true;
            return;
        }

        curSearchParameter.code &&
            curSearchParameter.value &&
            $settings.parameters.push({
                ...curSearchParameter
            });

        $settings.parameters = $settings.parameters;

        curSearchParameter = { ...initSearchParameter };
    }
</script>

<div class="settings-added-parameters mb-4">
    <ButtonGroup class="w-full">
        <Button class="w-1/3">
            <span>{curSearchParameter.code}</span>
        </Button>

        <SettingsSearchParameterDropdown
            resourceTypes={[selectedResourceType, "_common", "_result"]}
            bind:openSearchParameterDropDown
            {onSelectSearchParameter}
        />

        <Button>
            {@html curSearchParameter.display}
        </Button>
        {#if curSearchParameter.code !== "Choose Parameters"}
            <Dropdown bind:open={openModifierDropDown} class="overflow-y-auto max-h-64">
                {#each Object.entries(ResourceSearchParameter.getSearchParameterModifier(selectedResourceType, curSearchParameter.code)) as [modifierPrefix, modifierInfo]}
                    <DropdownItem
                        on:click={() => {
                            onSelectModifierForSearchParameter(modifierPrefix, modifierInfo);
                        }}
                    >
                        {@html modifierInfo.display}
                    </DropdownItem>
                {/each}
            </Dropdown>
        {/if}

        <Input
            id="search-parameters"
            name="search-parameters"
            placeholder="value"
            color={showValueForSearchParameterRequired && !curSearchParameter.value
                ? "red"
                : "base"}
            class="{showValueForSearchParameterRequired ? 'border-l-1' : ''} {inputFocusClass}"
            bind:value={curSearchParameter.value}
        />

        {#if isAddedComponent}
            <Button
                color="primary"
                on:click={() => {
                    removeSearchParameter();
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"><title>minus-thick</title><path d="M20 14H4V10H20" /></svg
                >
            </Button>
        {:else}
            <Button
                color="green"
                on:click={() => {
                    addSearchParameter();
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="w-5 h-5"
                    fill="currentColor"
                    ><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg
                >
            </Button>
        {/if}
    </ButtonGroup>
</div>
