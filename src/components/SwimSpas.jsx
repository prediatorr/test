import Card from "./Card";
import './css/swimspas.css';

const productData = [
    {
        id: 1,
        name: "Spania 15ft Swim Spa",
        size: false,
        seats: false,
        img: "images/image14.png"
    },
    {
        id: 2,
        name: "Spania 17ft Swim Spa",
        size: false,
        seats: false,
        img: "images/image15.png"
    },
    {
        id: 3,
        name: "Spania 19ft Swim Spa",
        size: false,
        seats: false,
        img: "images/image16.png"
    }
];

const SwimSpas = () => {
    const items = productData.map(item => <Card key={item.id} item={item}/>)
    return (
        <div className="whole">
            <div className="items">
                { items }
            </div>
            <div className="filters">
                <div className="heading">
                    <div className="link main"><a href="#">Spania 12ft Swim Spa</a></div>
                    <div className="link main"><a href="#">Spania 13ft Swim Spa</a></div>
                    <div className="link main"><a href="#">Spania 15ft Swim Spa</a></div>
                    <div className="link main"><a href="#">Spania 17ft Swim Spa</a></div>
                    <div className="link main"><a href="#">Spania 19ft Swim Spa</a></div>
                    <div className="link not-main">
                        <a href="#">View All</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SwimSpas;