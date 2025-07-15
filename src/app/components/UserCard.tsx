import "../assignment1/assignment1.css";

type UserCardProps = {
    name : string,
    email : string,
    avatarUrl : string,
}

export default function UserCard({ name, email, avatarUrl }: UserCardProps) {
  return (
    <div className="Card">
      <div>
        <img src={avatarUrl} alt="Image" />
      </div>

      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
    </div>
  );
}
