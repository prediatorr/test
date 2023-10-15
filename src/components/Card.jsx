/* eslint-disable react/prop-types */
import './css/card.css';
const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <div className="product-img">
                <img src={ props.item.img } alt="img"></img>
            </div>
            <span className="product-title">
                { props.item.name }
            </span>
            <span className="size">
                {
                    props.item.size ? <div>SIZE: { props.item.size } SEATS: { props.item.seats }</div> : ""
                }
             </span>
            <span className="linkview"><a href="#">View Spa</a></span>
        </div>
    )
}

export default Card;