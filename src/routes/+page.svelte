<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data;
</script>

<div class="text-token mx-auto grid w-3/5 grid-cols-1 gap-4 md:grid-cols-1">
	{#each data.posts as post}
		<BlogCard {...post} />
	{/each}
</div>
