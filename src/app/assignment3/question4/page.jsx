"use client";
import Link from "next/link";

export default function Question4() {
  return (
    <div className="parent"> 
      <h3>
            4. Enhance the previous application by adding protected pages that require authentication.
            Create a login page with a form that accepts a username and password.
            Implement authentication logic (e.g., hardcode a username and password for now).
            Secure the About page so that it can only be accessed by authenticated users.
            Redirect unauthenticated users to the login page.
            Display a message on the Home page welcoming the authenticated user.
      </h3>
      <h3>Assignment 3 - Question 4</h3>
      <Link href="/assignment3/question4/loginPage">Go to Login</Link>
      <br />
      <Link href="/assignment3/question4/home">Go to Home</Link>
    </div>
  );
}
