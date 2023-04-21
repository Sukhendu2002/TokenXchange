import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  arbitrum,
  mainnet,
  polygon,
  avalancheFuji,
  polygonMumbai,
  goerli,
} from "wagmi/chains";

const chains = [
  arbitrum,
  mainnet,
  polygon,
  avalancheFuji,
  polygonMumbai,
  goerli,
];
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECTID;

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import "./App.css";

const App = () => {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default App;
