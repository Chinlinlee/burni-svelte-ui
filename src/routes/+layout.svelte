<script>
    import "../app.postcss";
    import { disabledNavSearchButton, searchUrl, clickSearchCounter } from "../store/stores";
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Input,
        ButtonGroup,
        Button
    } from "flowbite-svelte";

    import { goto } from "$app/navigation";
    import SettingsDrawer from "../components/settings-drawer.svelte";

    let hideSettingsDrawer = true;

    function onClickSettings() {
        hideSettingsDrawer = false;
    }

    function onClickDisplay() {
        console.log("Click Display");
    }

    function onClickCreate() {
        console.log("Click Create");
    }

    function onClickSearch() {
        goto("search-result", {
            invalidateAll: true
        });
        $clickSearchCounter++;
    }
</script>

<header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b">
    <div class="mx-auto flex flex-wrap items-center w-full">
        <Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 border-b mx-auto">
            <NavBrand href="/">
                <img src="/images/logo.png" class="mr-3 h-6 sm:h-9" alt="Burni-UI Logo" />
                <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
                    >Burni</span
                >
            </NavBrand>

            <NavHamburger />
            <div class="w-3/4">
                <NavUl ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium justify-end">
                    <div class="w-full">
                        <NavLi>
                            <ButtonGroup class="w-full">
                                <Input disabled={true} id="search-navbar" placeholder="Please set settings" bind:value={$searchUrl} />
                                <Button class="search-button" disabled={$disabledNavSearchButton} color="primary" on:click={onClickSearch}>Search</Button>
                            </ButtonGroup>
                        </NavLi>
                    </div>
                    
                    <NavLi
                        class="cursor-pointer translate-y-1/2"
                        href=""
                        on:click={onClickSettings}>Settings</NavLi
                    >
                    <NavLi class="cursor-pointer translate-y-1/2" href="" on:click={onClickDisplay}>Display</NavLi>
                    <NavLi class="cursor-pointer translate-y-1/2" href="" on:click={onClickCreate}>Create</NavLi>
                </NavUl>
            </div>
            
        </Navbar>
    </div>
</header>

<main class="h-[calc(100vh-74px)] pt-24">
    <slot />
    <SettingsDrawer bind:hidden={hideSettingsDrawer} />
</main>

