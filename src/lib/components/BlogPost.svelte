<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { getImageLink } from '$lib/images';
	import EnhancedImage from '$lib/components/EnhancedImage.svelte';

	export let metadata;
	export let content;
	console.log(content.render);
	export let image = metadata.image;
	export let title = metadata.title;
	export let position = metadata.position;
	export let categories = metadata.categories;
	export let description = metadata.description;
	export let author = metadata.author;
	export let date = metadata.date;
</script>

<div class="bg-initial card card-hover mx-auto my-10 w-3/6 overflow-hidden">
	<header>
		<EnhancedImage {image} {title} {position} />
	</header>
	<div class="space-y-4 p-4">
		<h6 class="h6" data-toc-ignore>
			{#each categories as category}
				{category + ' '}
			{/each}
		</h6>
		<h3 class="h3" data-toc-ignore>{title}</h3>
		<article>
			<p>
				<!-- cspell:disable -->

				<svelte:component this={content} />

				<!-- cspell:enable -->
			</p>
		</article>
	</div>
	<hr class="opacity-50" />
	<footer class="flex items-center justify-start space-x-4 p-4">
		<Avatar src={getImageLink({ id: 'YOErFW8AfkI', w: 32, h: 32 })} width="w-8" />
		<div class="flex flex-auto items-center justify-between">
			<h6 class="font-bold" data-toc-ignore>{author}</h6>
			<small>On {date}</small>
		</div>
	</footer>
</div>
