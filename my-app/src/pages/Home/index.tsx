import React, { useEffect, useState } from 'react'

export default function Home() {
  const [countInterval, setCountInterval] = useState(0);
  const [countTimeout, setCountTimeout] = useState(0);

  // --- setInterval ---
  useEffect(() => {
    const id = setInterval(() => {
      setCountInterval((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id); // cleanup khi unmount
  }, []);

  // --- setTimeout đệ quy ---
  useEffect(() => {
    let active = true;

    const runTimeout = () => {
      setTimeout(() => {
        if (!active) return;
        setCountTimeout((prev) => prev + 1);
        runTimeout();
      }, 1000);
    };

    runTimeout();

    return () => {
      active = false; // dừng khi component unmount
    };
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: "2em" }}>
      <h2>setInterval ⏳</h2>
      <p>Đã chạy {countInterval} giây</p>

      <h2>setTimeout 🔁</h2>
      <p>Đã chạy {countTimeout} giây</p>
    </div>
  );
}
