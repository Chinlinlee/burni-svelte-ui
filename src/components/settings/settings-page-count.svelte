<script>
    import { Label, Select } from "flowbite-svelte";

    /** @type {string}*/
    export let count;

    let pageCountOptions = [
        { value: "10", name: "10" },
        { value: "25", name: "25" },
        { value: "50", name: "50" },
        { value: "100", name: "100" }
    ];
</script>

<Select items={pageCountOptions} bind:value={count} id="select-page-count" />
