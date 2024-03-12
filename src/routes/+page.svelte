<script lang="ts">
    import BlogCard from "$lib/components/BlogCard.svelte";

    export let data;
</script>

<div class="w-3/5 mx-auto text-token grid grid-cols-1 md:grid-cols-1 gap-4">
    {#each data.posts as post}
        <BlogCard {...post} />
    {/each}
</div>