<script>
    import axios from "axios";
    import { Button, Modal, Toast } from "flowbite-svelte";
    import { clickSearchCounter, settings } from "../../../store/stores";
    import LoadingModal from "../../loading-modal.svelte";

    /** @type {Promise<boolean>} */
    let deleteResourcePromise;
    let openLoadingModal = false;
    let openDeletePopUp = false;
    let showDeleteSuccessModal = false;
    /** @type {string}*/
    export let resourceType;
    /** @type {string}*/
    export let resourceId;
    export let isIconButton = false;

    async function deleteResource() {
        openLoadingModal = true;
        try {
            await axios.delete(`${$settings.server}/${resourceType}/${resourceId}`);
            openLoadingModal = false;
            showDeleteSuccessModal = true;
            $clickSearchCounter++;
        } catch (e) {
            openLoadingModal = false;
            throw e;
        }
        return true;
    }

    function onDeleteButtonClick() {
        openDeletePopUp = true;
    }

    function onConfirmDeleteButtonClick() {
        deleteResourcePromise = deleteResource();
    }

    function onCancelButtonClick() {
        openLoadingModal = false;
        openDeletePopUp = false;
    }

    function openErrorModal() {
        openLoadingModal = false;
        openDeletePopUp = false;
        return true;
    }
</script>

{#if isIconButton}
    <Button
        color="light"
        on:click={onDeleteButtonClick}
        class="px-1 py-1 border-none btn-delete-resource"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 h-5"
            fill="currentColor"
            ><title>delete-resource</title><path
                d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
            /></svg
        >
    </Button>
{:else}
    <Button
        class="mb-2 text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-torch-red-400 hover:bg-torch-red-500 dark:bg-torch-red-600 dark:hover:bg-torch-red-700 focus:ring-torch-red-300 dark:focus:ring-torch-red-900 rounded-lg"
        on:click={onDeleteButtonClick}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 h-5 mr-1"
            fill="currentColor"
            ><title>delete-resource</title><path
                d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
            /></svg
        >
        Delete
    </Button>
{/if}

<Modal bind:open={openDeletePopUp} on:close={() => (openDeletePopUp = false)} size="sm">
    <div class="text-red-500 text-center mx-auto">
        <div class="danger-icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 mx-auto"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
            </svg>
        </div>
        <h3 class="text-red-500 mb-5">Are you sure you want to delete this resource?</h3>
        <div class="footer">
            <Button on:click={onConfirmDeleteButtonClick} color="primary">Yes</Button>
            <Button on:click={onCancelButtonClick} color="light">No</Button>
        </div>
    </div>
</Modal>

{#await deleteResourcePromise}
    <LoadingModal bind:openLoadingModal />
{:catch e}
    <Modal autoclose size="xs" open={openErrorModal()}>
        <div class="text-center">
            <h3>{e.message}</h3>
            <Button>OK</Button>
        </div>
    </Modal>
{/await}

<Modal bind:open={showDeleteSuccessModal} size="xs" autoclose>
    <div class="text-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="mx-auto h-12 w-12 text-green-400"
            fill="currentColor"
            ><title>information-slab-circle-outline</title><path
                d="M11 7V9H13V7H11M14 17V15H13V11H10V13H11V15H10V17H14M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z"
            /></svg
        >
        <h3 class="text-lg mb-2">Delete Success</h3>
        <Button>OK</Button>
    </div>
</Modal>
