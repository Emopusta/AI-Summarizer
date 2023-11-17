import React, { useState } from "react";
import SummarizeLinkContent from "./SummarizeLinkContent";
import SummarizeTextContent from "./SummarizeTextContent";
const Switch = () => {
  const [isSummarizerLink, setIsSummarizerLink] = useState(true);

  const handleClick = () => {
    setIsSummarizerLink((prev) => !prev);
  };

  const buttonClasses = `
    px-6 py-3 text-white font-semibold rounded-full focus:outline-none mt-10
    ${
      isSummarizerLink
        ? "transition-transform transform -translate-x-full bg-red-500"
        : "transition-transform transform translate-x-full bg-blue-500"
    }
  `;

  return (
    <div className="flex flex-col items-center">
      <button className={buttonClasses} onClick={handleClick}>
        {isSummarizerLink ? "Yazı özetlemek için tıkla" : "Link özetlemek için tıkla"}
      </button>
      {isSummarizerLink ? <SummarizeLinkContent /> : <SummarizeTextContent/>}
    </div>
  );
};

export default Switch;
