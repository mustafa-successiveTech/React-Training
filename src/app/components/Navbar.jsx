"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link href="/assignment1" >Assignment 1</Link>
      <Link href="/assignment2" >Assignment 2</Link>
      <Link href="/assignment3" >Assignment 3</Link>
    </nav>
  );
};

export default Navbar;
