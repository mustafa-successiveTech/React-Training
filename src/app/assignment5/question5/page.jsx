import AxiosFetching from "@/app/components/axiosFetching";

export default function Question5() {
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            }}>
            <h3>
                5. Create a Next.js component that fetches data from a public API (like JSONPlaceholder) using Axios and displays the results on the page. Use the App Router conventions and perform the data fetching on the server side.
            </h3>
            <AxiosFetching />
        </div>
    )
}