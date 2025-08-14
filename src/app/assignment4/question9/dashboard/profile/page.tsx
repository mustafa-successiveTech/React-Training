export default function ProfilePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Profile</h2>
      <p>
        <strong>Name:</strong> Mustafa Ali
      </p>
      <p>
        <strong>Email:</strong> mustafa@example.com
      </p>
      <p>
        <strong>Location:</strong> New Delhi, India
      </p>
    </div>
  );
}
