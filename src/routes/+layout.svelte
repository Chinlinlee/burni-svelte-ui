<script>
    import "../app.postcss";
    import {
        disabledNavSearchButton,
        searchUrl,
        clickSearchCounter,
        settings
    } from "../store/stores";
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
    import { onMount } from "svelte";
    import { changeNavSearchUrl } from "../helper/nav-search-url.svelte";
    import { isUrlValid } from "$lib";

    let hideSettingsDrawer = true;
    /** @type {HTMLButtonElement} */
    let backToTopBtn;

    function onClickSettings() {
        hideSettingsDrawer = false;
    }

    function onClickSearch() {
        goto("search-result", {
            invalidateAll: true
        });
        $clickSearchCounter++;
    }

    function onScroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.classList.remove("hidden");
        } else {
            backToTopBtn.classList.add("hidden");
        }
    }

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }
    $: {
        if (isUrlValid($settings.server)) {
            $disabledNavSearchButton = false;
        }
    }
    onMount(() => {
        changeNavSearchUrl();
    });
</script>

<svelte:window on:scroll={onScroll} />

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
                <NavUl
                    ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium justify-end"
                >
                    <div class="w-full">
                        <NavLi>
                            <ButtonGroup class="w-full">
                                <Input
                                    disabled={true}
                                    id="search-navbar"
                                    placeholder="Please set settings"
                                    bind:value={$searchUrl}
                                />
                                <Button
                                    class="search-button"
                                    disabled={$disabledNavSearchButton}
                                    color="primary"
                                    on:click={onClickSearch}>Search</Button
                                >
                            </ButtonGroup>
                        </NavLi>
                    </div>

                    <NavLi class="cursor-pointer translate-y-1/2" href="" on:click={onClickSettings}
                        >Settings</NavLi
                    >
                    <NavLi class="cursor-pointer translate-y-1/2" href="/create-resource"
                        >Create</NavLi
                    >
                </NavUl>
            </div>
        </Navbar>
    </div>
</header>

<main class="h-[calc(100vh-74px)] pt-24">
    <slot />
    <SettingsDrawer bind:hidden={hideSettingsDrawer} />

    <!-- Back to top button -->
    <button
        bind:this={backToTopBtn}
        on:click={backToTop}
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        class="!fixed bottom-5 right-5 hidden rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
        id="btn-back-to-top"
    >
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            class="h-4 w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            />
        </svg>
    </button>
</main>
