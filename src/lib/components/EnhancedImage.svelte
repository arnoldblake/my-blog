<script lang="ts">
	import type { ImportedImages, EnhancedImage } from '$lib/types';

	export let image: string;
	export let title: string;
	export let position: string;

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

<enhanced:img
	src={enhancedImage}
	alt={title}
	class="h-96 object-cover"
	style="object-position: 50% {position};"
/>
