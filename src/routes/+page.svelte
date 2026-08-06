<script lang='ts'>
    import MainBanner from "$lib/components/MainBanner.svelte";
    import BlogPost from "$lib/components/BlogPost.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>phaeiq is on a rocket</title>
</svelte:head>

<div class="max-w-2xl w-full bg-[#fa89df] flex-1">
    <MainBanner />
    {#each data.articles as article}
        <BlogPost {article} />
    {/each}
</div>
