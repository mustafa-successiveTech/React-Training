'use client'
import { useEffect, useState } from "react";

async function fetchData() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/use');
        if(!res.ok) throw new Error("Error occured while fetching");
        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch Data');
    }
}

export default function FetchUsers3() {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const getLoading = async () =>  {
        setLoading(true);
        setError("");
        try {
            const data = await fetchData();
            setUser(data);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        getLoading();
    },[]);

    return (
        <div>
            <h1>User Data in Question - 3</h1>   

            { loading && (
                <p>Loading...</p>
            )} 

            {error && (
                <div>
                    <p style={{ color: 'red'}}>{error}</p>
                    <button onClick={getLoading}>Retry...</button>
                </div>
            )}    

            {!error && !loading && (
                <ul>
                    {user.map((user) => (
                       <li key={user.id}>
                            <strong>{user.name}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}