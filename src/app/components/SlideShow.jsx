"use client";

import { useState, useEffect } from "react";

const images = Array.from({ length: 7 }, (_, i) => `./Images/image${i + 1}.jpg`);

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [intervalTime, setIntervalTime] = useState(1000); 

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, intervalTime);
    }

    return () => clearInterval(intervalId); 
  }, [isPlaying, intervalTime]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
        <p>{currentSlide}</p>
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide}`}
        width={400}
        height={300}
        style={{ objectFit: "cover", borderRadius: "10px" }}
        />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <select
          value={intervalTime}
          onChange={(e) => setIntervalTime(Number(e.target.value))}
          style={{ marginLeft: "10px" }}
        >
          <option value={1000}>1s</option>
          <option value={2000}>2s</option>
          <option value={3000}>3s</option>
          <option value={5000}>5s</option>
        </select>
      </div>
    </div>
  );
}
