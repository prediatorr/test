import Card from "./Card";
import './css/spashot.css'

const productData = [
    {
        id: 1,
        name: "Soletta Premium Hot Tub",
        size: "5' x 7' x 3'",
        seats: 4,
        img: "images/image11.png"
    },
    {
        id: 2,
        name: "Pagani Premium Hot Tub",
        size: "7' x 7' x 3'",
        seats: 6,
        img: "images/image13.png"
    },
    {
        id: 3,
        name: "Alphina Premium Hot Tub",
        size: "8' x 8' x 3'",
        seats: 6,
        img: "images/image12.png"
    }
];

const SpasHotTubs = () => {
    const items = productData.map(item => <Card key={item.id} item={item}/>)
    return (
        <div className="whole">
            <div className="items">
                { items }
            </div>
            <div className="filters">
                <div className="heading">
                    <div className="link"><a href="#">Soletta 5ft Hot Tubs</a></div>
                    <div className="link"><a href="#">Pagani 7ft Hot Tubs</a></div>
                    <div className="link"><a href="#">Alphina 8ft Hot Tubs</a></div>
                    <div className="link not-main">
                        <a href="#">View All</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SpasHotTubs;