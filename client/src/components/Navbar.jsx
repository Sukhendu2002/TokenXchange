import { useEffect } from "react";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import logo from "../assets/logo.png";
// eslint-disable-next-line react/prop-types
const Navbar = ({ setIsConnected }) => {
  const account = useAccount();

  useEffect(() => {
    if (account.isConnected) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [account]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        width: "1304px",
        // backgroundColor: "#1a1a1a",
        backgroundColor: "#0f0f0f",
        color: "white",
        height: "70px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
        <p style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px" }}>
          TokenXchange
        </p>
      </div>
      <Web3Button icon="show" balance="show" />
    </div>
  );
};

export default Navbar;
