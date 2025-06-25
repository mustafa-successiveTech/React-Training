import { useEffect, useState } from "react"

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);

    }, []);

    return (
        <>
            <p>Current Time : {time}</p>
        </>
    )
}