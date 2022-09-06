import React from "react";
import { useState, useEffect } from "react";

export default function Cronometro(props) {
  const {  startingSeconds = 60 } = props;
  const [secs, setSeconds] = useState(startingSeconds);
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div>
      {!( secs) ? (
        ""
      ) : (
        <p>
          {" "}
          {secs < 10 ? `0${secs}` : secs}
        </p>
      )}
    </div>
  );
}
