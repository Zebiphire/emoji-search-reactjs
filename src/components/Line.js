import React, { useState } from "react";

const Line = (data) => {
  const [line, setLine] = useState(false);
  return (
    <div
      className="line"
      onMouseEnter={() => setLine(true)}
      onMouseLeave={() => setLine(false)}
      onClick={() => {
        navigator.clipboard.writeText(data.data.symbol);
      }}
    >
      <span>
        {data.data.symbol} {data.data.title}
      </span>
      {line && <span className="clickToCopy">Click to copy !</span>}
    </div>
  );
};
export default Line;
