import iconCheck from "./images/icon-check.svg";

export default function ThanksPage({ handleGotIt }) {
  return (
    <div className="thanksDiv">
      <img src={iconCheck} alt="iconCheck" />
      <h1>Thanks for your support!</h1>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button onClick={handleGotIt}>Got it!</button>
    </div>
  );
}
