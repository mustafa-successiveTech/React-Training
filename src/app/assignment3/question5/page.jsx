"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Question5() {
  
    return (
        <div className="parent">
            <h3>
                5. Extend the application to include nested routes for a more complex user interface.
                Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
                Implement nested routing within this section using nested routes.
                Add navigation links to switch between the sub-pages within the Dashboard section.
                Customize the content displayed on each sub-page.
            </h3>
            <Link href="/assignment3/question5/dashboard">Go to Dashboard</Link>
        </div>
    )
}
