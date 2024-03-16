<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { getImageLink } from '$lib/images';
	import type { ImportedImages, EnhancedImage } from '$lib/types';

	export let title: string;
	export let categories: string[];
	export let description: string;
	export let author: string;
	export let date: string;
	export let image: string;
	export let position: string;
	export let slug: string;

	const images: ImportedImages = import.meta.glob('$lib/assets/images/*.png', {
		eager: true,
		query: {
			enhanced: true
		}
	});

	let enhancedImage: EnhancedImage;

	for (const [key, value] of Object.entries(images)) {
		if (key.includes(image)) {
			enhancedImage = value.default; // Assuming 'eager: true' gives us direct access
			break; // Found the matching image, exit loop
		}
	}
</script>

<a class="bg-initial card card-hover overflow-hidden" href="/blog/{slug}">
	<header>
		<enhanced:img
			src={enhancedImage}
			alt={title}
			class="h-96 object-cover"
			style="object-position: 50% {position};"
		/>
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
