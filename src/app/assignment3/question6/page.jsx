import Link from "next/link";

export default function Question6() {
    return (
        <div className="parent">
            <h3>
                6. Create a list of items (e.g., products, articles) in your application.
                Implement dynamic routing to display details for each item when clicked.
                Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
                Fetch item details based on the route parameter and display them on the detail page.
                Add a "Go Back" button on the detail page to return to the list.
            </h3>
            <Link href="/assignment3/question6/products">Go to Dashboard</Link>
        </div>
    )
}