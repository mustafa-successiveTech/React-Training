import PostsPage from "@/app/components/postPage";

export default function Question1() {

    return (
        <div className="parent">
            <h3>
                1. Create a Next.js component using the App Router that fetches data on the server side (SSR) from a public API (e.g., JSONPlaceholder) and displays the results on the page.
            </h3>
            <PostsPage />
        </div>
    )
}