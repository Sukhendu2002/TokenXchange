import "./card.css";
import img from "../assets/ethereum-eth-icon.svg";
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
          Ethereum
        </p>
        <div className="textBox">
          <p className="text head">Ethereum</p>
          <span>Cryptocurrency</span>
          <p className="text price">$232,278,453,740</p>
        </div>
        <p
          style={{
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          {bal} ETH
        </p>
      </div>
    </>
  );
};

export default EtheriamCard;
