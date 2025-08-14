import Link from "next/link"

export default function Question14() {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h3>
                14. Create a higher-order component (HOC) named withAuth that restricts access to a component only to authenticated users. Implement this HOC on a sample component and demonstrate how it protects routes or pages in a Next.js application.
            </h3>
            <Link href='/assignment5/question14/login'>Click to Visit Dashboard</Link>
        </div>
    )
}