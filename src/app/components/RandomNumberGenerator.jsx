"use client"
import { useState } from "react"

export default function RandomNumberGenerator() {
    const [randomNumber, setRandomNumber] = useState(50)

    const UpdateNumber = () => {
         const num = (Math.floor((Math.random()*100))+1);
         setRandomNumber(num);
    }

    return (
        <>
            <div>
                <p>Current RandomNumber : {randomNumber}  </p> 
            </div>

            <div>
                <button onClick={UpdateNumber}>Update Number</button>
            </div>
        </>
    )
}