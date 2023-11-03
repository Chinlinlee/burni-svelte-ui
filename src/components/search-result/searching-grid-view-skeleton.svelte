<script>
    import SearchSkeletonHeader from "./search-skeleton-header.svelte";
</script>

<div role="status">
    <SearchSkeletonHeader />
    <div class="h-7 mr-2 bg-gray-300 rounded-full dark:bg-gray-700 w-[5%] inline-block" />
    <div class="grid grid-cols-2 gap-4">
        {#each Array(6) as i}
            <div
                class="p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700 w-full"
            >
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5" />
                <div class="w-48 h-2 mb-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                <div class="w-48 h-2 mb-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                <div class="w-48 h-2 mb-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                <div class="w-48 h-2 mb-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                <div class="w-48 h-2 mb-4 bg-gray-200 rounded-full dark:bg-gray-700" />
            </div>
        {/each}
    </div>
</div>
