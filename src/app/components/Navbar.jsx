"use client";
import React from "react";
import { useRouter } from "next/navigation";

const availableAssignments = [1, 2, 4];

export default function Navbar() {
  const router = useRouter();

  const handleOnClick = (fileNo) => {
    if (availableAssignments.includes(fileNo)) {
      router.push(`/assignment${fileNo}`);
    } else {
      router.push("/not-found");
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <button key={num} onClick={() => handleOnClick(num)}>
          Assignment {num}
        </button>
      ))}
    </div>
  );
}
