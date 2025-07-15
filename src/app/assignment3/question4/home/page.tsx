"use client";
import { useLoginAuth } from "@/app/context/AuthLoginContext";
import Link from "next/link";

export default function home() {
  const { isLogin, logout, username } = useLoginAuth();

  return (
    <div>
      <h1>Home Page</h1>
      {isLogin ? (
        <>
          <p>Welcome, {username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in to access protected pages.</p>
          <Link href="loginPage">Login</Link>
        </>
      )}
    </div>
  );
}
