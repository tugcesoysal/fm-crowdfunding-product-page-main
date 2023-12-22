import ModalProducts from "./components/ModalProducts";
import data from "./data";
import iconCloseModal from "./images/icon-close-modal.svg";
import { useState } from "react";

export default function ModalPage({ handleClick, handleContinue }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const modalProducts = data.map((item) => (
    <ModalProducts
      key={item.name}
      {...item}
      isSelected={selectedOption === item.name}
      onOptionChange={handleOptionChange}
      handleContinue={handleContinue}
    />
  ));

  return (
    <div className="modalPageDiv">
      <button className="icon-close-modal" onClick={handleClick}>
        <img src={iconCloseModal} alt="icon-close-modal" />
      </button>
      <h1>Back this project</h1>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className="modalProducts">
        <input
          className="radioInput"
          id="radioInput_no_reward"
          type="radio"
          value="no-reward"
          name="pledgeOption"
          checked={selectedOption === "no-reward"}
          onChange={() => handleOptionChange("no-reward")}
        />

        <label htmlFor="radioInput_no_reward">
          <h4 className="modalProduct-name">Pledge with no reward</h4>
          <p className="text">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
        </label>
      </div>
      {modalProducts}
    </div>
  );
}
