"use client";
import React from "react";
import { useRouter } from "next/router";
import button from "./button";

export default function Navbar() {
    const router = useRouter();
    const handleOnClick = (fileNo) => {
        router.push(`/assignment1/Question${fileNo}`);
    };

    return (
        <>
            {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                    key = {num}
                    name = {`Question.${num}`}
                    value = {num}
                    onclick = {handleOnClick}
                />

            ))}
        </>
    )
}