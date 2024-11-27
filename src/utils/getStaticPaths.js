// getStaticPaths.js
export async function getStaticPaths() {
    const allPosts = await Astro.glob('../posts/*.md');

    const paths = allPosts.map((post) => ({
        params: { slug: post.slug },
    }));

    return paths;
}