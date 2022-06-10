import { useState } from "react";

export const Accordion = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="accordion" onClick={onClick}>
        {buttonText}
      </button>
      <div
        className={`panel-animation ${isOpen ? "panel-open" : "panel-close"}`}
      >
        {children}
      </div>
    </>
  );
};
