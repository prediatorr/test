import Card from "./Card";
import "./css/access.css";
const productData = [
  {
    id: 1,
    name: "Barefoot Spas Spa First Aid Kit",
    size: false,
    seats: false,
    img: "images/image14.png",
  },
  {
    id: 2,
    name: "PH Up",
    size: false,
    seats: false,
    img: "images/image15.png",
  },
  {
    id: 3,
    name: "PH Down",
    size: false,
    seats: false,
    img: "images/image16.png",
  },
];

const Assessories = () => {
  const items = productData.map((item) => <Card key={item.id} item={item} />);
  return (
    <div className="body-a">
      <div className="items">{items}</div>
      <div>
        <div className="heading">
          <div className="link main">
            <a href="#">Spa Filters</a>
          </div>
          <div className="link main">
            <a href="#">Spa Treatments</a>
          </div>
          <div className="link main">
            <a href="#">Fitness Spas Accessories</a>
          </div>
          <div className="link not-main">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessories;
