import { useEffect, useState } from "react"

export default function Notification() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessage(`${new Date().toLocaleString()}`);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div>
               <p>Message at {message} seconds</p>
            </div>
        </>
    )
}