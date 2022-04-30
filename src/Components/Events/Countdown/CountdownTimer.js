import React, { useEffect, useState } from "react";

import "../../../styles/CountdownTimerStyles.css";

function CountdownTimer() {
  const [expiryTime, setExpiryTime] = useState("3 June 2022 15:30:25");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownMinutes: "",
    countdownSeconds: "",
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <div className="show-counter">
      {expiryTime !== false ? (
        <div className="counter">
          <p className="pb-1">
            {countdownTime.countdownDays}:<span>Days</span>
          </p>

          <p className="pb-2">
            {countdownTime.countdownHours}:<span>Hours</span>
          </p>

          <p className="pb-3">
            {countdownTime.countdownMinutes}:<span>Minutes</span>
          </p>

          <p className="pb-4">
            {countdownTime.countdownSeconds}:<span>Seconds</span>
          </p>
        </div>
      ) : (
        <p>Deal has been Expired</p>
      )}
    </div>
  );
}

export default CountdownTimer;
