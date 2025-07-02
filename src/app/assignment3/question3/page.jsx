import Link from "next/link";

export default function Question3() {
  return (
        <div className="parent">
          <h1>Welcome to Question 3</h1>
          <Link href="assignment3/question3/home">Go to Home</Link>    {/* goes to /assignment3/question3/home */}
          <br />
          <Link href="assignment3/question3/about">Go to About</Link>  {/* goes to /assignment3/question3/about */}
      </div>
  )
};