'use client';
import withAuth from "../../../hoc/withAuth";

function Dashboard() {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Dashboard - Protected Page</h1>
      <p>Higher Order Components</p>
    </div>
  );
}

export default withAuth(Dashboard);
