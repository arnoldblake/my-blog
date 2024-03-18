<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';
	export let data;
</script>

<!-- TODO: Fix the props for this component -->
<BlogPost {...data} />
