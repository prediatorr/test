import "./css/discover.css";

const Discover = () => {
  return (
    <div className="dis-body">
      <div className="club">
        <div className="ownerh">Owners Club</div>
        <div className="links">
          <div className="link main">
            <a href="#">Owners Manual</a>
          </div>
          <div className="link main">
            <a href="#">Warranty</a>
          </div>
          <div className="link main">
            <a href="#">Authorized Services</a>
          </div>
          <div className="link main">
            <a href="#">Rewards Program</a>
          </div>
          <div className="link main">
            <a href="#">Stay Connected</a>
          </div>
          <div className="link not-main">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
      <div className="help">
        <div className="blue" >How We Can Help</div>
        <div className="ga">Financing Options</div>
        <div className="ga">Choosing the right financing</div>
        <div>
          <div></div>
          <div className="ga">Financing With Affirm</div>
          <div className="ga">
            <a href="#">Learn More</a>
          </div>
        </div>
        <div>
          <div className="ga"></div>
          <div>Financing With Synchrony</div>
          <div className="ga">
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
      <div className="mission">
        <div className="ga">Our Mission</div>
        <div className="ga" >Enriching Lives Through Ultimate Relaxation</div>
        <div className="ga">We Are .....</div>
        <div className="ga">
          <button className="btn">Learn More</button>
        </div>
        <div className="ga">
          <img src="images/image15.png" alt="spa" />
        </div>
      </div>
    </div>
  );
};

export default Discover;
