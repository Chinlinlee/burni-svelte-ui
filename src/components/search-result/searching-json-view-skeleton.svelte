<script>
    import { Skeleton } from "flowbite-svelte";
    import SearchSkeletonHeader from "./search-skeleton-header.svelte";
</script>

<div role="status" class="animate-pulse">
    <SearchSkeletonHeader />

    {#each Array(5) as i}
        <div class="resource-instance-skeleton">
            <div class="h-7 mr-2 bg-gray-300 rounded-full dark:bg-gray-700 w-[5%] inline-block" />
            <Skeleton size="xxl" class="mt-8 mb-2.5" />
        </div>
    {/each}

    <span class="sr-only">Loading...</span>
</div>
