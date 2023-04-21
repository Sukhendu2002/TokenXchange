import "./card.css";
import img from "../assets/arbitrum.svg";
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
          Arbitrum
        </p>
        <div className="textBox">
          <p className="text head">Arbitrum</p>
          <span>Cryptocurrency</span>
          <p className="text price">$1,819,106,977</p>
        </div>
        <p
          style={{
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          {bal} ARB
        </p>
      </div>
    </>
  );
};

export default EtheriamCard;
