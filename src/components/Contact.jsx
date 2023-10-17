import "./css/contact.css";
import Card from "./Card1";
const productData = [
  {
    id: 1,
    star: 4,
    head: "Loving Our New Hot Tub!",
    size: "I love this hot tub for a lot reasons. The size...",
    seats: 4,
    img: "images/star.png",
    name: "Gabriel",
    address: "Gaithersburg, MD",
  },
  {
    id: 2,
    star: 4,
    head: "Loving Our New Hot Tub!",
    size: "I love this hot tub for a lot reasons. The size...",
    seats: 4,
    img: "images/star.png",
    name: "Gabriel",
    address: "Gaithersburg, MD",
  },
  {
    id: 3,
    star: 4,
    head: "Loving Our New Hot Tub!",
    size: "I love this hot tub for a lot reasons. The size...",
    seats: 4,
    img: "images/star.png",
    name: "Gabriel",
    address: "Gaithersburg, MD",
  },
];

const Contact = () => {
  const items = productData.map((item) => <Card key={item.id} item={item} />);
  return (
    <div className="dis-body">
      <div className="help">
        <div className="blue ga">Contact us</div>
        <div className="ga">
          8401 Fort Darling Rd <br /> North Chesterfield, VA 23237 <br />
          United States
        </div>
        <div className="blue ga">Call us</div>
        <div className="ga">
          Main Office: (804) 298-3950 <br /> Monday thru Friday <br /> 8:00AM -
          6:00PM (EST)
        </div>
        <div className="blue ga">Email Customer Support</div>
        <div>
          <div className="ga">customer.service@barefootspas.com</div>
        </div>

        <div className="whitespace">
          <div>
            <h4>Join Our NewsLetter</h4>
          </div>
          <div>We’ll send you a nice letter once per week. No spam.</div>
          <input
            className="input-box"
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <button className="btn">Join Newsletter</button>
        </div>
      </div>
      <div className="mission">
        <div className="ga blue">Our Reviews</div>
        <div className="ga sub-head">
          Check out what our Barefoot Spa Owners think!
        </div>
        <div className="ga sub-head-1">
          Since our founding more than 40 years ago, we've focused on bringing
          you the best in product innovation coupled with unparalleled customer
          service. We want our customers to love Barefoot Spas as much as we do.
          However, don't take our word for it! Just ask our Barefoot Spa owners.
          They're more than happy to tell you about their personal experiences
          owning a Barefoot Spa, hot tub, or a Barefoot Swim Spa. More than
          anything, we appreciate their honest ratings and reviews of not only
          our product, but of our service.
        </div>
        <div className="ga">
          <div className="ga blue">View All Reviews</div>
        </div>

        <div className="ga">{items}</div>
      </div>
    </div>
  );
};

export default Contact;
