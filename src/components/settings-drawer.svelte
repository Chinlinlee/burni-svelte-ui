<script>
    import {
        Drawer,
        CloseButton,
        Label,
        Input,
        ButtonGroup,
        Button,
        Dropdown,
        DropdownItem
    } from "flowbite-svelte";
    import config from "$lib/fhir/config";

    import { ChevronDownSolid, SearchOutline } from "flowbite-svelte-icons";
    import { sineIn } from "svelte/easing";
    import { settings, disabledNavSearchButton, searchUrl } from "../store/stores";
    import SettingsSearchParameter from "./settings-search-parameter.svelte";
    import { isUrlValid } from "$lib";
    import { changeNavSearchUrl } from "../helper/nav-search-url.svelte";
    import SettingsPageCount from "./settings/settings-page-count.svelte";

    const inputFocusClass = "focus:border-gray-500 focus:ring-gray-500";

    export let hidden = true;
    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };
    let server = "";
    let openResourceTypesDropDown = false;
    let selectedResourceType = "Patient";
    let searchResourceType = "";

    $: {
        if (openResourceTypesDropDown) {
            let getElementInterval = setInterval(() => {
                /** @type {HTMLInputElement | null} */
                const element = document.querySelector(".search-resource-type");
                if (element) {
                    clearInterval(getElementInterval);
                    element?.focus();
                }
            }, 100);
        }
    }

    $: $settings, onSettingsChange();

    function onSettingsChange() {
        if (!hidden) {
            if (isUrlValid($settings.server)) {
                $disabledNavSearchButton = false;
            }

            changeNavSearchUrl();
        }
    }

    /**
     * @param {any} e
     */
    function onServerKeyUp(e) {
        $settings.server = server;
    }

    /**
     *
     * @param {string} resourceType
     */
    function onSelectResourceType(resourceType) {
        openResourceTypesDropDown = false;
        $settings.resourceType = resourceType;
    }

    /**
     *
     * @param {string} resourceType
     */
    function getResourceSearchParameters(resourceType) {
        // @ts-ignore
        return config.config.searchParameters[resourceType];
    }

    /**
     * 
     * @param {KeyboardEvent} e
     */
    function onSelfKeyPress(e) {
        if (e.code === "Enter") {
            hidden = true;
        }
    }
</script>

<div class="settings-drawer" on:keypress={onSelfKeyPress} role="menu" tabindex="0">
    <Drawer transitionType="fly" {transitionParams} bind:hidden>
        <div class="flex items-center mb-6">
            <h5
                id="drawer-navigation-label-3"
                class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
                Settings
            </h5>
            <CloseButton on:click={() => (hidden = true)} class="mb-4 dark:text-white" />
        </div>
        <div class="mb-4 settings-server rounded-lg border-gray-300 border-2 p-2">
            <Label for="server" class="block mb-2 text-gray-600">Server</Label>
            <Input
                id="server"
                name="server"
                required
                placeholder=""
                on:keyup={onServerKeyUp}
                bind:value={server}
                class={inputFocusClass}
            />
        </div>
        <div class="mb-4 settings-resource-instance rounded-lg border-gray-300 border-2 p-2">
            <Label for="resourceInstance" class="block mb-2 text-gray-600">Resource / ID</Label>
            <ButtonGroup class="w-full">
                <Button
                    color="none"
                    class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                    {$settings.resourceType}<ChevronDownSolid
                        class="w-3 h-3 ml-2 text-gray-500 dark:text-white"
                    />
                </Button>
    
                <Dropdown bind:open={openResourceTypesDropDown} class="overflow-y-auto max-h-64">
                    <div class="p-2">
                        <Input
                            id="search"
                            placeholder="Search Resource"
                            class="search-resource-type"
                            size="md"
                            bind:value={searchResourceType}
                        >
                            <SearchOutline
                                slot="left"
                                class="w-6 h-6 text-gray-500 dark:text-gray-400"
                            />
                        </Input>
                    </div>
    
                    {#each config.config.resourceTypes as resourceType}
                        {#if resourceType.toLowerCase().includes(searchResourceType.toLowerCase())}
                            <DropdownItem on:click={() => onSelectResourceType(resourceType)}
                                >{resourceType}</DropdownItem
                            >
                        {/if}
                    {/each}
                </Dropdown>
                <Input
                    id="resourceInstance-Id"
                    name="resourceInstance-Id"
                    required
                    placeholder="Id"
                    class={inputFocusClass}
                    bind:value={$settings.id}
                />
            </ButtonGroup>
        </div>
    
        <div class="mb-4 settings-token rounded-lg border-gray-300 border-2 p-2">
            <Label for="token" class="block mb-2 text-gray-600">Token</Label>
            <Input
                id="token"
                name="token"
                placeholder="The value in authorization header"
                class={inputFocusClass}
            />
        </div>
    
        <div class="mb-4 settings-parameters rounded-lg border-gray-300 border-2 p-2">
            <Label for="search-parameters" class="block mb-2 text-gray-600">Parameters</Label>
            <div class="add-section mb-4">
                <SettingsSearchParameter
                    {selectedResourceType}
                    curSearchParameter={{
                        code: "Choose Parameters",
                        value: "",
                        display: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><title>equal</title><path d="M19,10H5V8H19V10M19,16H5V14H19V16Z" /></svg>`,
                        modifier: "",
                        type: "string"
                    }}
                    index={undefined}
                />
            </div>
    
            {#if !$settings.id}
                {#each $settings.parameters as param, i}
                    <SettingsSearchParameter
                        {selectedResourceType}
                        index={i}
                        curSearchParameter={{ ...param }}
                        isAddedComponent={true}
                    />
                {/each}
            {/if}
        </div>
    
        <div class="mb-4 settings-layout rounded-lg border-gray-300 border-2 p-2">
            <Label class="block mb-2 text-gray-600">Layout</Label>
            <div class="flex flex-wrap justify-between">
                <Button
                    color={$settings.layout === "grid" ? "primary" : "none"}
                    on:click={() => ($settings.layout = "grid")}>Grid</Button
                >
                <Button
                    color={$settings.layout === "json-viewer" ? "primary" : "none"}
                    on:click={() => ($settings.layout = "json-viewer")}>JSON Viewer</Button
                >
            </div>
        </div>
    
        <div class="mb-4 settings-page-count rounded-lg border-gray-300 border-2 p-2">
            <SettingsPageCount bind:count={$settings.result[0].value} />
        </div>
    </Drawer>
</div>

