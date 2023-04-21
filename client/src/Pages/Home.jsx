import { useState, useEffect } from "react";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import Navbar from "../components/Navbar";
import EtheriamCard from "../components/EthereumCard";
import PolygonCard from "../components/PolygonCard";
import AvalancheCard from "../components/AvaCard";
import AroraCard from "../components/AroraCard";
import ArbitrumCard from "../components/ArbitrumCard";
import SwapCard from "../components/SwapCrad";
import SendCard from "../components/SendCard";
const Home = () => {
  const account = useAccount();

  const [goerliBalance, setBalance] = useState(0);
  const [mumbaiBalance, setBalance2] = useState(0);
  const [fujiBalance, setBalance3] = useState(0);
  const [auroraBalance, setBalance4] = useState(0);
  const [arbitrumBalance, setBalance5] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    async function fetchBalance() {
      if (account) {
        const gorali = new ethers.providers.JsonRpcProvider(
          "https://eth-goerli.g.alchemy.com/v2/gLrwlOkKemSVE7x8CcWU39lyADkiUIUr"
        );
        const mumbai = new ethers.providers.JsonRpcProvider(
          "https://polygon-mumbai.g.alchemy.com/v2/v-dMhz396OKjeaZ5pjF_nuv3Q9saBNh3"
        );
        const fuji = new ethers.providers.JsonRpcProvider(
          "https://avalanche-fuji.infura.io/v3/d092e97080b24dd0b71ad82d5e7b3ddd"
        );

        const aurora = new ethers.providers.JsonRpcProvider(
          "https://aurora-testnet.infura.io/v3/d092e97080b24dd0b71ad82d5e7b3ddd"
        );

        const arbitrum = new ethers.providers.JsonRpcProvider(
          "https://arb-goerli.g.alchemy.com/v2/7HPwJLhPOImjEfDtLtV_T84EuS4YjukH"
        );

        const balance = await gorali.getBalance(account.address);
        const balance2 = await mumbai.getBalance(account.address);
        const balance3 = await fuji.getBalance(account.address);
        const balance4 = await aurora.getBalance(account.address);
        const balance5 = await arbitrum.getBalance(account.address);
        //conver wei to ether
        const etherBalance = ethers.utils.formatEther(balance);
        const etherBalance2 = ethers.utils.formatEther(balance2);
        const etherBalance3 = ethers.utils.formatEther(balance3);
        const etherBalance4 = ethers.utils.formatEther(balance4);
        const etherBalance5 = ethers.utils.formatEther(balance5);
        setBalance(etherBalance);
        setBalance2(etherBalance2);
        setBalance3(etherBalance3);
        setBalance4(etherBalance4);
        setBalance5(etherBalance5);
      }
    }
    fetchBalance();
  }, [account]);

  useEffect(() => {
    if (account.isConnected) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [account]);

  return (
    <>
      {isConnected ? (
        <>
          <Navbar setIsConnected={setIsConnected} />
          <h1>Balances</h1>
          {/* <h2>Goerli Balance: {goerliBalance}</h2>
          <h2>Mumbai Balance: {mumbaiBalance}</h2>
          <h2>Fuji Balance: {fujiBalance}</h2> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <EtheriamCard bal={goerliBalance} />
            <PolygonCard bal={mumbaiBalance} />
            <AvalancheCard bal={fujiBalance} />
            <AroraCard bal={auroraBalance} />
            <ArbitrumCard bal={arbitrumBalance} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              marginTop: "200px",
            }}
          >
            <SwapCard address={account.address} />
            <SendCard address={account.address} />
          </div>
        </>
      ) : (
        <>
          <h1>
            Welcome to
            <br />
            <span className="brand">TokenXchange</span>
          </h1>
          <p
            style={{
              width: "50%",
              margin: "auto",
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "50px",
            }}
          >
            TokenXchange is a decentralized platform that enables users to swap
            and send tokens across different blockchain networks. The platform
            supports cross-chain transactions, allowing users to exchange tokens
            from one blockchain network to another seamlessly. This provides
            users with greater flexibility and accessibility to a wider range of
            digital assets.
          </p>
          <Web3Button icon="show" balance="show" />
        </>
      )}
    </>
  );
};

export default Home;
