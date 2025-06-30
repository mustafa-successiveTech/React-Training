export default function MainDashboard() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        marginTop: "40px",    
      }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}> Welcome to your Dashboard</h1>
      <p>Here you can view your stats, recent activities, and shortcuts to important sections.</p>
    </div>
  );
}
