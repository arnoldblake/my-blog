<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { getImageLink } from '$lib/images';
	import EnhancedImage from '$lib/components/EnhancedImage.svelte';

	export let title: string;
	export let categories: string[];
	export let description: string;
	export let author: string;
	export let date: string;
	export let image: string;
	export let position: string;
	export let slug: string;
</script>

<a class="bg-initial card card-hover mt-10 overflow-hidden" href="/blog/{slug}">
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
				{description}
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
</a>
