const ModalProducts = ({
  name,
  pledge,
  text,
  left,
  onOptionChange,
  isSelected,
  handleContinue,
}) => {
  const radioId = `radioInput_${name.replace(/\s+/g, "_")}`;

  const handleInputChange = () => {
    onOptionChange(name);
  };

  return (
    <div
      className={`modalProducts ${left === 0 ? "soldOut" : ""} ${
        isSelected ? "selectedBorder" : ""
      }`}
    >
      <input
        className="radioInput"
        id={radioId}
        type="radio"
        value={name}
        name="pledgeOption"
        disabled={left === 0}
        checked={isSelected}
        onChange={handleInputChange}
      />
      <div>
        <label htmlFor={radioId} className="modalProduct-name-left">
          <h4 className="modalProduct-name">
            {name} <span>Pledge ${pledge} or more</span>{" "}
          </h4>
          <h4 className="modalProduct-left">
            {left} <span>left</span>
          </h4>
        </label>
        <p className="text">{text}</p>
      </div>
      {isSelected && (
        <div className="selectedDiv">
          <div className="line-break"></div>
          <div className="selectedInputDiv">
            <label>Enter your pledge</label>
            <p className="dollar">$</p>
            <input
              type="number"
              className="pledgeInput"
              placeholder={pledge}
              min={pledge}
              required
            />
            <button className="continueBtn" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalProducts;
