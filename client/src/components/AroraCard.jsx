import "./card.css";
import img from "../assets/aurora.svg";
// eslint-disable-next-line react/prop-types
const AroraCard = ({ bal }) => {
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
          Arora
        </p>
        <div className="textBox">
          <p className="text head">Arora</p>
          <span>Cryptocurrency</span>
          <p className="text price">$671,123</p>
        </div>
        <p
          style={{
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          {bal} AROR
        </p>
      </div>
    </>
  );
};

export default AroraCard;
