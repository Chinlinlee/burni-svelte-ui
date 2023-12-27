<script>
    import {
        Card,
        Accordion,
        AccordionItem,
        Input,
        Button,
        ButtonGroup,
        Dropdown,
        DropdownItem,
        Label,
        Radio
    } from "flowbite-svelte";
    import { disabledNavSearchButton, settings } from "../../store/stores";
    import { ChevronDownSolid, SearchOutline } from "flowbite-svelte-icons";
    import config from "$lib/fhir/config";
    import { isUrlValid } from "$lib";
    import { changeNavSearchUrl } from "../../helper/nav-search-url.svelte";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import SettingsPageCount from "../../components/settings/settings-page-count.svelte";
    import SettingsSearchParameter from "../../components/settings-search-parameter.svelte";

    let settingRowClass = "flex flex-row flex-nowrap justify-between border-b";
    let settingLabelClass = "flex flex-col flex-1 px-6 my-auto font-bold text-lg";
    let settingControlClass = "px-6 py-4 flex flex-col flex-1";

    let searchResourceType = "";

    let openResourceTypesDropDown = false;

    $: $settings, onSettingsChange();

    function onSettingsChange() {
        if (isUrlValid($settings.server)) {
            $disabledNavSearchButton = false;
        }

        if (browser) changeNavSearchUrl();
    }

    /**
     *
     * @param {string} resourceType
     */
    function onSelectResourceType(resourceType) {
        openResourceTypesDropDown = false;
        $settings.resourceType = resourceType;
    }

    onMount(() => {
        console.log($settings.layout);
        let radioLayout = document.getElementById(`radio-layout-${$settings.layout}`);
        radioLayout?.setAttribute("checked", "");
    });
</script>

<svelte:head>
    <title>Burni UI - Settings</title>
</svelte:head>

<div class="container mx-auto flex flex-wrap">
    <Card class="w-full max-w-full">
        <h1 class="text-3xl font-bold pb-2 mb-6 border-b">Settings</h1>

        <div class="max-w-4xl mx-auto w-full mb-4">
            <Accordion>
                <AccordionItem open>
                    <span slot="header">System Settings</span>
                    <div class={settingRowClass}>
                        <Label class={settingLabelClass}>Server</Label>
                        <div class={settingControlClass}>
                            <Input
                                id="server"
                                name="server"
                                required
                                bind:value={$settings.server}
                                placeholder="FHIR Server base URL"
                            />
                        </div>
                    </div>

                    <div class={settingRowClass}>
                        <Label class={settingLabelClass}>Token</Label>
                        <div class={settingControlClass}>
                            <Input
                                id="token"
                                name="token"
                                placeholder="The value in authorization header"
                            />
                        </div>
                    </div>

                    <div class={settingRowClass}>
                        <Label class={settingLabelClass}>Layout</Label>
                        <div class={settingControlClass}>
                            <Radio
                                id="radio-layout-grid"
                                value="grid"
                                name="layout"
                                class="justify-end"
                                bind:group={$settings.layout}>Grid</Radio
                            >
                            <Radio
                                id="radio-layout-json"
                                value="json-viewer"
                                name="layout"
                                class="justify-end"
                                bind:group={$settings.layout}>Json</Radio
                            >
                        </div>
                    </div>

                    <div class="{settingRowClass} border-none">
                        <Label class={settingLabelClass}>Page Size</Label>
                        <div class={settingControlClass}>
                            <SettingsPageCount bind:count={$settings.result[0].value} />
                        </div>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>

        <div class="max-w-4xl mx-auto w-full">
            <Accordion>
                <AccordionItem open>
                    <span slot="header">Search Settings</span>
                    <div class={settingRowClass}>
                        <Label class={settingLabelClass}>Resource / ID</Label>
                        <div class="px-6 py-4 flex flex-col flex-1">
                            <ButtonGroup class="w-full">
                                <Button
                                    color="none"
                                    class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                >
                                    {$settings.resourceType}<ChevronDownSolid
                                        class="w-3 h-3 ml-2 text-gray-500 dark:text-white"
                                    />
                                </Button>
                                <Dropdown
                                    bind:open={openResourceTypesDropDown}
                                    class="overflow-y-auto max-h-64"
                                >
                                    <div class="p-2">
                                        <Input
                                            id="search"
                                            placeholder="Search Resource"
                                            class="search-resource-type"
                                            size="sm"
                                            bind:value={searchResourceType}
                                        >
                                            <SearchOutline
                                                slot="left"
                                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            />
                                        </Input>
                                    </div>

                                    {#each config.config.resourceTypes as resourceType}
                                        {#if resourceType
                                            .toLowerCase()
                                            .includes(searchResourceType.toLowerCase())}
                                            <DropdownItem
                                                on:click={() => onSelectResourceType(resourceType)}
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
                                    bind:value={$settings.id}
                                />
                            </ButtonGroup>
                        </div>
                    </div>

                    <div class="{settingRowClass} border-none">
                        <Label for="search-parameters" class={settingLabelClass}>Parameters</Label>

                        <div class={settingControlClass}>
                            <SettingsSearchParameter
                                selectedResourceType={$settings.resourceType}
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
                    </div>
                    {#if !$settings.id && $settings.parameters.length > 0}
                        <div class="{settingRowClass} border-none">
                            <div class={settingLabelClass} />
                            <div class={settingControlClass}>
                                {#each $settings.parameters as param, i}
                                    <SettingsSearchParameter
                                        selectedResourceType={$settings.resourceType}
                                        index={i}
                                        curSearchParameter={{ ...param }}
                                        isAddedComponent={true}
                                    />
                                {/each}
                            </div>
                        </div>
                    {/if}
                </AccordionItem>
            </Accordion>
        </div>
    </Card>
</div>
