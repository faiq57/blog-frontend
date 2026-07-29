export const load = async () => {
    const request = new Request("https://blog-data.phaeiq.com/posts", {
        method: "GET",
    });

    const response = await fetch(request);
    if (!response.ok) {
        return {};
    };

    return { articles: await response.json() };
}
