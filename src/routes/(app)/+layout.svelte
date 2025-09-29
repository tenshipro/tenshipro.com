<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<div>
	<main>
		{@render children()}
	</main>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--background);
		color: var(--color-text);
	}

	main {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 2rem;
	}
</style>
