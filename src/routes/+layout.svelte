<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import bgImage from '$lib/assets/caf_gum.png';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="min-h-screen flex flex-col">
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
        top: -250dvh;  
        width: 500dvw;
        height: 500dvh;  
        background-image: var(--bg-url);
        background-color: pink;
        transform: rotate(45deg);
        filter: brightness(2);
    }  
</style>
