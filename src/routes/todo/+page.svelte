<script>
	import { enhance } from '$app/forms';
	export let data;
</script>

<div class="centered">
	<h1>todos</h1>
	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				<form use:enhance method="POST" action="?/delete">
					<input type="hidden" name="id" value="{todo.id}" />
					<span>{todo.description}</span>
					<button aria-label="Mark as complete">Delete</button>
				</form>
			</li>
		{/each}
	<form use:enhance method="POST" action="?/create">
		<label for="description">Add a TODO:</label>
			<input
				name="description"
				autocomplete="off"
				type="text"
			/>
	</form>
    </ul>
</div>

<style>	
	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
}
</style>