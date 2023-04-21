import "./card.css";
import img from "../assets/polygon-matic-icon.svg";
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
          Polygon
        </p>
        <div className="textBox">
          <p className="text head">Polygon</p>
          <span>Cryptocurrency</span>
          <p className="text price">$9,653,299,273</p>
        </div>
        <p
          style={{
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          {bal} MATIC
        </p>
      </div>
    </>
  );
};

export default EtheriamCard;
