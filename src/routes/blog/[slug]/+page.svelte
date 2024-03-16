<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data;
</script>

<BlogCard {...data.post} />
