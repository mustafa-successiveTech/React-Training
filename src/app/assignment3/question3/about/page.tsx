import Link from "next/link";

export default function About() {
  return (
    <div className="parent" style={{ alignContent: "center" }}>
      <h1>About Page</h1>
      <Link href="home">Go to home</Link>
    </div>
  );
}
