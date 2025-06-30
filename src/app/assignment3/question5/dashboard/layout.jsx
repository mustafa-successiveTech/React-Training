"use client";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="parent">
      <h2>Dashboard Section</h2>
      <nav>
        <Link href="/assignment3/question5/dashboard">Dashboard</Link> | 
        <Link href="/assignment3/question5/dashboard/profile">Profile</Link> | 
        <Link href="/assignment3/question5/dashboard/settings">Settings</Link>
      </nav>
      <hr />
      <div>{children}</div>
    </div>
  );
}
