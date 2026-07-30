export const load = async () => {
    const request = new Request("https://blog-data.phaeiq.com/posts", {
        method: "GET",
    });

    const response = await fetch(request);
    if (!response.ok) {
        return {};
    };

    const articles = await response.json();

    for (const article of articles) {
        const request = new Request("https://blog-data.phaeiq.com/comments/" + article.id.toString(), {
            method: "GET",
        });

        const response = await fetch(request)
        if (!response.ok) {
            article.comments = [];
        } else {
            article.comments = await response.json()
        }
    }

    return { articles: articles };
}
