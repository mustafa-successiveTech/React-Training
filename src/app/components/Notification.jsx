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
            <div >
               <h1>Message at {message} seconds</h1>
            </div>
        </>
    )
}