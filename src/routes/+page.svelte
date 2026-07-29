<script>
    import MainBanner from "$lib/components/MainBanner.svelte";

    let { data } = $props();
</script>

<div class="max-w-2xl bg-[#fa89df] flex-1">
    <MainBanner />
    {#each data.articles as article}
        <div class="mx-2 text-[#ffffff]">
            <h1 class="font-bold text-2xl text-center mb-1">
                {article.title}
            </h1>
            <div class="flex">
                <div>By {article.author}</div>
                <div class="ml-auto">{(new Date(article.timestamp + "Z")).toLocaleString()}</div>
            </div>
            <div class="article-content mb-8 mt-2 text-justify">
                {@html article.content}
            </div>
        </div>
    {/each}
</div>

<style>
    .article-content :global(p) {
        margin-bottom: 20px;
    }
</style>
