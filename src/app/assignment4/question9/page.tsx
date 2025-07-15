import Link from "next/link";

export default function Question6() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <h3>
        9. Implement a responsive sidebar navigation using Material-UI's Drawer
        component and include it as part of the layout.js so that the sidebar
        appears consistently across all pages. The sidebar should include links
        that allow users to navigate between different sections of your web app.
      </h3>
      <h1 style={{ justifyContent: "center" }}>
        <Link href="/assignment4/question9/dashboard">Go to Dashboard</Link>
      </h1>
    </div>
  );
}
