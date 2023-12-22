import "./App.css";
import MainPage from "./MainPage";
import ModalPage from "./ModalPage";
import { useState } from "react";
import Layout from "./Layout";
import ThanksPage from "./ThanksPage";

function App() {
  const [modalPageIsOpen, setModalPageIsOpen] = useState(false);
  const [thanksPageIsOpen, setThanksPageIsOpen] = useState(false);

  const handleModalToggle = () => {
    setModalPageIsOpen(!modalPageIsOpen);
    document.body.style.overflow = modalPageIsOpen ? "auto" : "hidden";
  };

  const handleThanksPage = () => {
    setThanksPageIsOpen(!thanksPageIsOpen);
    setModalPageIsOpen(false);
    document.body.style.overflow = thanksPageIsOpen ? "auto" : "hidden";
  };

  const handleGotIt = () => {
    setThanksPageIsOpen(false);
  };

  return (
    <div className="App">
      <MainPage handleClick={handleModalToggle} />
      {modalPageIsOpen && <Layout />}
      {thanksPageIsOpen && <Layout />}
      {modalPageIsOpen && (
        <ModalPage
          handleClick={handleModalToggle}
          handleContinue={handleThanksPage}
        />
      )}
      {thanksPageIsOpen && <ThanksPage handleGotIt={handleGotIt} />}
    </div>
  );
}

export default App;
