<script lang="ts">
	import './layout.css';
	import cafGum from '$lib/assets/caf_gum.png';
    import bgImage from '$lib/assets/caf_gum_rotated.png';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={cafGum} /></svelte:head>
<div class="min-h-screen flex flex-col overflox-x-hidden">
    <nav class="bg-[#fa70fa] text-[#fffffa]">Work in progress navbar</nav>

    <main class="flex flex-1 flex-col items-center" style="--bg-url: url('{bgImage}')">
        {@render children()}
    </main>
</div>

<style>
    main::before{
        content: ""; 
        position: fixed;
        z-index: -1;
        width: 100dvw;
        height: 100dvh;  
        background-image: var(--bg-url), var(--bg-url); 
        background-position: 0 0, 100px 100px;
        background-size: 200px, 200px; 
        background-color: pink;
        filter: brightness(2);
    }
</style>
