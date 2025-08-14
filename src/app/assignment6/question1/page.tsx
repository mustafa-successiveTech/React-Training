'use client'
import Link from "next/link"

export default function Question1() {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h3>
                1. Create a Next.js app using the App Router with multiple pages. Use next/dynamic to lazily load page components and improve initial load time. Components should load only when their routes are visited.
            </h3>
            <h1>Home</h1>
            <Link href="/assignment6/question1/about">Go to About</Link><br />
            <Link href="/assignment6/question1/contact">Go to Contact</Link>
        </div>
    )
}