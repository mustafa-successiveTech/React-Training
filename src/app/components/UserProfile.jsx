export default function UserProfile({ name, email, phone }) {
  return (
    <div>
      <h2 data-testid="name">Name: {name}</h2>
      <p data-testid="email">Email: {email}</p>
      <p data-testid="phone">Phone: {phone}</p>
    </div>
  );
}
