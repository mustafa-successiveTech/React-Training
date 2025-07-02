import Link from "next/link";

export default function Question3() {
  return (
        <div className="parent">
          <h3>
            3. Create pages: Home and About.
            Implement file routing.
            Create navigation links to switch between the Home and About pages.
            Display appropriate content on each page.
            Add a "404 Not Found" page for any invalid routes.
          </h3>
          <h1>Welcome to Question 3</h1>
          <Link href="assignment3/question3/home">Go to Home</Link>    
          <br />
          <Link href="assignment3/question3/about">Go to About</Link> 
      </div>
  )
};