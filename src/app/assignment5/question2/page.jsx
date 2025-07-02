import UsersPage from "@/app/components/usersPage";

export default function Question2() {
    return (
        <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                marginTop: "40px",    
            }}>
                <hr/>
            <h3>
                2. Extend your Next.js component that fetches data from a public API (https://jsonplaceholder.typicode.com/users) using server-side rendering (SSR) with the App Router to handle errors gracefully. If the fetch request fails during SSR, display a user-friendly error message on the page. Additionally, provide a retry button so users can attempt to fetch the data again without reloading the entire page.
            </h3>
            <hr />
            <UsersPage />
        </div>
    )
}