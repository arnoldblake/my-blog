export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	author: string;
	categories: Categories[];
	published: boolean;
	image: string;
	position: string;
}

interface ImageModule {
	default: {
		sources: {
			avif: string;
			webp: string;
			png: string;
		};
		img: {
			src: string;
			w: number;
			h: number;
		};
	};
	[Symbol.toStringTag]: 'Module';
}

export type ImportedImages = Record<string, ImageModule>;

export type EnhancedImage = {
	sources: {
		avif: string;
		webp: string;
		png: string;
	};
	img: {
		src: string;
		w: number;
		h: number;
	};
};

