import "./card.css";
import img from "../assets/avalanche-avax-icon.svg";
// eslint-disable-next-line react/prop-types
const EtheriamCard = ({ bal }) => {
  return (
    <>
      <div className="card">
        <img
          className="img"
          src={img}
          alt="polygon"
          style={{
            width: "150px",
            height: "150px",
          }}
        />
        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Avalanche
        </p>
        <div className="textBox">
          <p className="text head">Avalanche</p>
          <span>Cryptocurrency</span>
          <p className="text price">$6,038,891,361</p>
        </div>
        <p
          style={{
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          {bal} AVAX
        </p>
      </div>
    </>
  );
};

export default EtheriamCard;
