import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalid);
    };
  }, []);
  function formatdate() {
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let a = h > 12 ? "AM" : "PM";
    h = h % 12 || 12;
    return `${padzero(h)}:${padzero(m)}:${padzero(s)} ${a}`;
  }
  function padzero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="container">
      <div className="div1">
        <span>{formatdate()}</span>
      </div>
    </div>
  );
}
export default DigitalClock;
