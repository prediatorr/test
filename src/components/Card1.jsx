import "./css/card1.css";
const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="product-img">⭐⭐⭐⭐ </div>
      <span className="product-title chead">{props.item.head}</span>
      <span className="product-title">{props.item.size}</span>
      <span className="size">
        {props.item.size ? (
          <div>
            <div className="blue name">{props.item.name}</div> <br /> {props.item.address}
          </div>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

export default Card;
