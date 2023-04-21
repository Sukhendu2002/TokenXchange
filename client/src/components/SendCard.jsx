import React from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SendCard = ({ address }) => {
  const options = ["ETH", "ARB", "MATIC", "AVAX", "AURORA"];
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const [selectedOption2, setSelectedOption2] = React.useState(options[1]);
  const [amount, setAmount] = React.useState(0);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        borderRadius: "10px",
        height: "100%",
        backgroundColor: "#1a1a1a",
      }}
    >
      <h1>Send Token</h1>
      <div className="swap">
        <div className="swap__form">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label htmlFor="amount">Address to send to</label>
            <input
              type="text"
              name="amount"
              id="amount"
              style={{
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                border: "1px solid black",
                padding: "5px",
              }}
              placeholder="0x0000000"
            />
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              style={{
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                border: "1px solid black",
                padding: "5px",
              }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <select
                name="token"
                id="token"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                style={{
                  width: "100px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid black",
                  padding: "5px",
                }}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                name="token"
                id="token"
                value={selectedOption2}
                onChange={(e) => setSelectedOption2(e.target.value)}
                style={{
                  width: "100px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid black",
                  padding: "5px",
                }}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                border: "1px solid white",
                padding: "5px",
              }}
            >
              Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendCard;
