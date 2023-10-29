<script>
    import { Spinner, Modal } from "flowbite-svelte";

    /** @type { boolean }*/
    export let openLoadingModal = false;
</script>

<Modal open={openLoadingModal} dismissable={false}>
    <div class="text-center">
        <Spinner size={"16"} />
        <span class="block">Loading...</span>
    </div>
</Modal>