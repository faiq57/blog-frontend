export const load = async ({ fetch }) => {
    const request = new Request("https://blog-data.phaeiq.com/posts", {
        method: "GET",
    });

    const response = await fetch(request);
    if (!response.ok) {
        return { articles: [] };
    };

    const articles = await response.json();

    const commentPromises = []
    for (const article of articles) {
        const request = new Request("https://blog-data.phaeiq.com/comments/" + article.id.toString(), {
            method: "GET",
        });

        commentPromises.push(fetch(request)
            .then((response) => {
                if (!response.ok) {
                    return []
                } else {
                    return response.json()
                }
            })
            .then((commentArr) => {
                article.comments = commentArr;
            })
        )
    }

    await Promise.all(commentPromises);

    return { articles: articles };
}
