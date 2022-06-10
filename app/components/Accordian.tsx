import { useState } from "react";

export const Accordion = ({ buttonText, children, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <div style={style}>
      <button className="accordion" onClick={onClick}>
        {isOpen ? "📂" : "📁"}
        {buttonText}
      </button>
      <div
        className={`panel-animation ${isOpen ? "panel-open" : "panel-close"}`}
      >
        {children}
      </div>
    </div>
  );
};
