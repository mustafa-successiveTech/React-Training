import PaginatedUsers from "@/app/components/paginatedUsers";

export default function Question4() {
    return (
        <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                margin:'20px'
            }}>
            <h3>
                4. Build a Next.js component that fetches a large dataset from an API and displays it with pagination. Show a limited number of items per page and provide controls to navigate between pages. Use the native fetch and handle data fetching efficiently within the App Router
            </h3>
            <PaginatedUsers />
        </div>
    )
}