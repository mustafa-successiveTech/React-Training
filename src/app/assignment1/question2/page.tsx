import UserCard from "@/app/components/UserCard";

export default function Question2() {
    return (
        <div>
            <h3>2. Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
                Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
                Create multiple instances of the UserCard component with different user data.</h3>
            <UserCard name = "Mustafa" email = "mustafa@gmail.com" avatarUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_White_House_-_54409525537_%28cropped%29.jpg/250px-The_White_House_-_54409525537_%28cropped%29.jpg"/>
            <UserCard name = "Yash" email = "yash@gmail.com" avatarUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_White_House_-_54409525537_%28cropped%29.jpg/250px-The_White_House_-_54409525537_%28cropped%29.jpg" />
        </div>
    )
}