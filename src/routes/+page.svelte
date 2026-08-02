<script lang='ts'>
    import { invalidate } from "$app/navigation";
    import MainBanner from "$lib/components/MainBanner.svelte";

    let { data } = $props();

    const addNewComment = (author: String, content: String, postId: Number) => {
        const request = new Request("https://blog-data.phaeiq.com/comments", {
            method: "POST",
            body: JSON.stringify({
                'author': author,
                'content': content,
                'postId': postId
            })
        })
        commentBoxes[postId.toString()].author = "";
        commentBoxes[postId.toString()].content = "";
        return fetch(request)
    }

    const printComment = (postId: string) => {
        console.log("Author:")
        console.log(commentBoxes[postId].author)
        console.log("Content")
        console.log(commentBoxes[postId].content)
        console.log("PostId:")
        console.log(postId)
    }

    const submitNewComment = (postId: Number) => {
        const postIdString = postId.toString();
        addNewComment(commentBoxes[postIdString].author, commentBoxes[postIdString].content, postId)
            .then((res) => {
                if (res.ok) {
                    invalidate("https://blog-data.phaeiq.com/comments/" + postId.toString())
                }
            })
    }

    const commentBoxes = $state<Record<string | number, { author: string; content: string; postId: string | number }>>({});

    for (const article of data.articles) {
        const articleId = article.id
        commentBoxes[articleId] = {
            author: "",
            content: "",
            postId: articleId
        }
    }
</script>

<div class="max-w-2xl w-full bg-[#fa89df] flex-1">
    <MainBanner />
    {#each data.articles as article}
        <div class="mx-2 text-[#9f0f33]">
            <h1 class="font-bold text-2xl text-center mb-1">
                {article.title}
            </h1>
            <div class="flex">
                <div class="font-bold">By {article.author}</div>
                <div class="font-bold ml-auto">{(new Date(article.timestamp + "Z")).toLocaleString()}</div>
            </div>
            <div class="article-content mb-8 mt-2 text-justify">
                {@html article.content}
                <div class="bg-[#ffaaff] p-2 text-[#a01020] rounded-sm">
                    <h2 class="font-bold">Comments</h2>
                    <div class="bg-[#afccf0] my-1 p-2 flex flex-col">
                        <label for={article.id + "-comment-box"} class="mb-2">Say something!</label> 
                        <textarea
                            bind:value={commentBoxes[article.id].content}
                            id={article.id + "-comment-box"}
                            class="bg-amber-200 p-2"
                            placeholder="Comment here!"
                            autocomplete="off"
                            ></textarea>
                        <div class="flex mt-2">
                            <label for={article.id + "-comment-author"} class="p-2">From:</label>
                            <input
                                autocomplete="off"
                                bind:value={commentBoxes[article.id].author}
                                id={article.id + "-comment-author"}
                                class="bg-amber-200 p-2 max-w-[20dvw]"
                                placeholder="Name"/>
                            <button 
                                class="px-2 ml-auto cursor-pointer bg-[#ffccff] rounded-2xl"
                                type="button"
                                onclick={() => submitNewComment(article.id)}
                                >Submit comment</button>
                        </div>
                    </div>
                    {#each article.comments as comment}
                        <div class="bg-[#ffccff] my-1 p-2 flex flex-col">
                            <div class="font-bold flex">
                                <div>{comment.author}</div>
                                <div class="ml-auto">
                                    {(new Date(comment.timestamp + "Z")).toLocaleString()}
                                </div>
                            </div>
                            {comment.content} 
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .article-content :global(p) {
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .article-content :global(img) {
        max-width: 100%;
        height: auto;
        margin-inline: auto;
    }
    
    .article-content :global(.vertical-image) {
        max-height: 500px;
        max-width: 70dvw;
        height: auto;
        width: auto;
    }

    .article-content :global(.hover-bright):hover {
        filter: brightness(5);
    }

    .article-content :global(.hover-sepia):hover {
        filter: sepia(0.7)
    }

    .article-content :global(.hover-invert):hover {
        filter: invert(1);
    }

   .article-content :global(.hover-magenta):hover {
        filter: hue-rotate(-40deg);
    }

    .article-content :global(.hover-desaturate):hover {
        filter: saturate(0.5);
    }

    .article-content :global(.top-image) {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 1px solid white;
    }

    .article-content :global(.bottom-image) {
        border-end-end-radius: 10px;
        border-bottom-left-radius: 10px;
        border-top: 1px solid white;
    }
</style>
