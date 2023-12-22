const Product = ({ name, pledge, text, left }) => (
  <div className={`products ${left === 0 ? "soldOut" : ""}`}>
    <h4>
      {name} <span>Pledge ${pledge} or more</span>
    </h4>
    <p>{text}</p>
    <div className="products-info">
      <h1>
        {left} <span>left</span>
      </h1>
      <button className={left === 0 ? "soldOutBtn " : "select"}>
        {left === 0 ? "Out of stock" : "Select Reward"}
      </button>
    </div>
  </div>
);

export default Product;
