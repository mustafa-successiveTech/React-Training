import Link from "next/link";

export default function Home() {
  return (
    <div className="parent">
      <h1>Home Page</h1>
      <Link href="about">Go To About</Link>
    </div>
  );
}
