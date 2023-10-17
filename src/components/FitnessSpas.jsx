import Card from "./Card";
import "./css/fitness.css";
const productData = [
  {
    id: 1,
    name: "Alphina Grand Spa",
    size: false,
    img: "images/image11.png",
  },
];
const FitnessSpas = () => {
  const items = productData.map((item) => <Card key={item.id} item={item} />);
  return (
    <div className="fit-body">
      <div>{items}</div>
      <div className="sub-fit2">
        <div>Find Your Spa!</div>
        <p>
          We are dedicated to crafting and providing the finest high-quality hot
          tubs that become havens of tranquility in the midst of todays fast
          placed world.
        </p>
        <div>
          <button className="learnmore">Learn More</button>
        </div>
        <div className="img-fit">
          <img className="imgf" src="images/image11.png" />
          <img className="imgf" src="images/image11.png" />
          <img className="imgf" src="images/image11.png" />
        </div>
      </div>
    </div>
  );
};

export default FitnessSpas;
