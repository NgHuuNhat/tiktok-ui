import React, { useEffect, useState } from 'react'

export default function Home() {
  const [countInterval, setCountInterval] = useState(0);
  const [countTimeout, setCountTimeout] = useState(0);
  const [time, setTime] = useState<any>();

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

  //dong ho
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleString('vi-VN', {
          weekday: 'long',   // Thứ
          year: 'numeric',   // Năm đầy đủ
          month: '2-digit',  // Tháng 2 chữ số
          day: '2-digit',    // Ngày 2 chữ số
          hour: '2-digit',   // Giờ
          minute: '2-digit', // Phút
          second: '2-digit', // Giây
        })
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: "2em" }}>
      <h2>setInterval ⏳</h2>
      <p>Đã chạy {countInterval} giây</p>
      <span>---</span>
      <h2>setTimeout 🔁</h2>
      <p>Đã chạy {countTimeout} giây</p>
      <span>---</span>
      <h2>Dong Ho</h2>
      <p>{time}</p>
    </div>
  );
}
