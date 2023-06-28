import { useState } from "react";
import "./style.css";


export function Lista({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([
    "Todos os Hamburgueres",
  ]);

  function toggleOptionsList() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <div className="custom-select">
      <div className="select-header" onClick={toggleOptionsList}>
        <span className="selected-option">{selectedOption}</span>
        <span className="select-icon">
          <img src="src/assets/img/frame.svg" />
        </span>
        {isOpen && (
          <ul className="options-list">
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
