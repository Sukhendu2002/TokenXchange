/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import { ethers, Contract } from "ethers";

const SwapCrad = ({ address }) => {
  const options = ["ETH", "ARB", "MATIC", "AVAX", "AURORA"];
  const chainId = [1, 42161, 137, 43114, 25];
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const [selectedOption2, setSelectedOption2] = React.useState(options[1]);
  const [amount, setAmount] = React.useState(0);

  const PATH_FINDER_API_URL = "https://api.pathfinder.routerprotocol.com/api";
  const STATS_API_URL = "https://api.stats.routerprotocol.com/api";

  const chainMapping = {
    137: {
      chain: "Polygon",
      rpc: "https://polygon-rpc.com",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0xfEd3c880FF02B195abee916328c5a3953976befD",
      NATIVE: {
        address: "0x0000000000000000000000000000000000001010",
        wrapped_address: "0x4c28f48448720e9000907BC2611F73022fdcE1fA",
      },
    },
    1: {
      chain: "Ethereum",
      rpc: "https://speedy-nodes-nyc.moralis.io/36a3a9840a5f2cc2ea2bbb42/eth/mainnet",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0x5e9A385a15cDE1b149Cb215d9cF3151096A37D67",
      NATIVE: {
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        wrapped_address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
    },
    250: {
      chain: "Fantom",
      rpc: "https://rpc.ftm.tools/",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0x621F0549102262148f6a7D289D8330adf7CbC09F",
      NATIVE: {
        address: "0x0100000000000000000000000000000000000001",
        wrapped_address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      },
    },
    42161: {
      chain: "Arbitrum",
      rpc: "https://arb1.arbitrum.io/rpc",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0x88b1E0ecaC05b876560eF072d51692F53932b16f",
      NATIVE: {
        address: "0x0000000000000000000000000000000000001010",
        wrapped_address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      },
    },
    56: {
      chain: "BSC",
      rpc: "https://bsc-dataseed.binance.org/",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0x45d880647Ec9BEF6Bff58ee6bB985C67d7234b0C",
      NATIVE: {
        address: "0x0100000000000000000000000000000000000001",
        wrapped_address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      },
    },
    43114: {
      chain: "Avalanche",
      rpc: "https://api.avax.network/ext/bc/C/rpc",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0x5febcA23e97c8ead354318e5A3Ed34ec3704459a",
      NATIVE: {
        address: "0x0100000000000000000000000000000000000001",
        wrapped_address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      },
    },
    10: {
      chain: "Optimism",
      rpc: "https://mainnet.optimism.io",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0x88b1E0ecaC05b876560eF072d51692F53932b16f",
      NATIVE: {
        address: "0x0000000000000000000000000000000000001010",
        wrapped_address: "0x4200000000000000000000000000000000000006",
      },
    },
    25: {
      chain: "Cronos",
      rpc: "https://evm.cronos.org",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0xf44Ff799eA2bBFeC96f9A50498209AAc3C2b3b8b",
      NATIVE: {
        address: "0x0000000000000000000000000000000000000001",
        wrapped_address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
      },
    },
    1666600000: {
      chain: "Harmony",
      rpc: "https://api.harmony.one",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0x8413041a7702603d9d991F2C4ADd29e4e8A241F8",
      NATIVE: {
        address: "0x0000000000000000000000000000000000001010",
        wrapped_address: "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
      },
    },
    1313161554: {
      chain: "Aurora",
      rpc: "https://mainnet.aurora.dev",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0x13538f1450Ca2E1882Df650F87Eb996fF4Ffec34",
      NATIVE: {
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        wrapped_address: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
      },
    },
    2222: {
      chain: "Kava",
      rpc: "https://evm.kava.io",
      reserveHandler_address: "0x6e14f48576265272B6CAA3A7cC500a26050Be64E",
      oneSplit_address: "0xB065a867a1baa919F0A9a3F5C1543D19768CeFBD",
      NATIVE: {
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        wrapped_address: "0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b",
      },
    },
  };

  const erc20_abi = [
    {
      name: "approve",
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      name: "allowance",
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  // calling the pathfinder api using axios
  const fetchPathfinderData = async (params) => {
    const endpoint = "quote";
    const pathUrl = `${PATH_FINDER_API_URL}/${endpoint}`;
    console.log(pathUrl);
    try {
      const res = await axios.get(pathUrl, { params });
      return res.data;
    } catch (e) {
      console.error(`Fetching data from pathfinder: ${e}`);
    }
  };

  // calling the status api using axios
  const fetchStatus = async (params) => {
    const endpoint = "status";
    const pathUrl = `${STATS_API_URL}/${endpoint}`;
    console.log(pathUrl);
    try {
      const res = await axios.get(pathUrl, { params });
      return res.data;
    } catch (e) {
      console.error(`Fetching data from API: ${e}`);
    }
  };

  // Fetch the current allowance and update if needed
  const checkAndSetAllowance = async (
    wallet,
    tokenAddress,
    approvalAddress,
    amount
  ) => {
    console.log("Approving token:", tokenAddress);
    // Transactions with the native token don't need approval
    if (tokenAddress === ethers.constants.AddressZero) {
      return;
    }

    const erc20 = new Contract(tokenAddress, erc20_abi, wallet);
    const allowance = await erc20.allowance(
      await wallet.getAddress(),
      approvalAddress
    );
    if (allowance.lt(amount)) {
      const approveTx = await erc20.approve(approvalAddress, amount, {
        gasPrice: await wallet.provider.getGasPrice(),
      });
      try {
        await approveTx.wait();
        console.log(
          `Approval transaction mined succesfully: ${approveTx.hash}`
        );
      } catch (error) {
        console.log(`Approval transaction failed with error: ${error}`);
      }
    }
  };
  // const handleSwap = async () => {
  //   const args = {
  //     fromTokenAddress: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c", // Fuji on Avalanche
  //     toTokenAddress: "0x6373c962DCFfc21465973150993E19F56d8640a4", //Matic on Polygon
  //     amount: "1000000000000000000", // 1 MATIC
  //     fromTokenChainId: 43113, //  Avalanche
  //     toTokenChainId: 80001, // Polygon
  //     userAddress: "0x99d587356619a0079288F5BaCD7630Ae9C76595f",
  //     feeTokenAddress: "0x5425890298aed601595a70AB815c96711a31Bc65", // USDC on Avalanche
  //     slippageTolerance: 2,
  //     widgetId: 76, // get your unique wdiget id by contacting us on Telegram
  //   };
  //   console.log(args);
  //   const pathfinder_response = await fetchPathfinderData(args);
  //   console.log(pathfinder_response);
  // };

  const handleSwap = async () => {
    const args = {
      fromTokenAddress: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", // FTM on Fantom
      toTokenAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
      amount: ethers.utils.parseEther(amount),
      fromTokenChainId: selectedOption === "Fantom" ? 250 : 137, // Fantom
      toTokenChainId: selectedOption === "Fantom" ? 137 : 250, // Polygon
      userAddress: address,
      feeTokenAddress: "0x11BbF12363dC8375b78D2719395d505f52a02F68", // ROUTE on Fantom
      slippageTolerance: 2,
      widgetId: 76, // get your unique wdiget id by contacting us on Telegram
    };
    const pathfinder_response = await fetchPathfinderData(args);
    console.log(pathfinder_response);
    // setting up wallet
    let chainId = args.fromTokenChainId;
    const provider = new ethers.providers.JsonRpcProvider(
      chainMapping[chainId].rpc,
      chainId
    );
    const wallet = new ethers.Wallet(
      import.meta.env.VITE_PRIVATE_KEY,
      provider
    );
    console.log("Wallet setup successfully");
    await checkAndSetAllowance(
      wallet,
      args.fromTokenAddress === chainMapping[chainId].NATIVE.address
        ? chainMapping[chainId].NATIVE.wrapped_address
        : args.fromTokenAddress, // fromTokenAddress
      args.fromTokenChainId === args.toTokenChainId
        ? chainMapping[chainId].oneSplit_address
        : chainMapping[chainId].reserveHandler_address, // Router's OneSplit Address for same-chain transactions and Router's Reserve Token Handler for cross-chain transactions
      ethers.constants.MaxUint256 // amount to approve
    );
    if (
      args.feeTokenAddress.toUpperCase() !==
        args.fromTokenAddress.toUpperCase() &&
      args.fromTokenChainId !== args.toTokenChainId
    ) {
      await checkAndSetAllowance(
        wallet,
        args.feeTokenAddress === chainMapping[chainId].NATIVE.address
          ? chainMapping[chainId].NATIVE.wrapped_address
          : args.feeTokenAddress, // feeTokenAddress
        chainMapping[chainId].reserveHandler_address, // Router's Reserve Token Handler
        ethers.constants.MaxUint256 // amount to approve
      );
    }
    if (!pathfinder_response.txn.execution.gasPrice) {
      pathfinder_response.txn.execution.gasPrice =
        await wallet.provider.getGasPrice();
    }
    if (pathfinder_response.txn.execution.value) {
      pathfinder_response.txn.execution.value = ethers.utils.hexlify(
        ethers.BigNumber.from(pathfinder_response.txn.execution.value)
      );
    }
    if (!pathfinder_response.txn.execution.gasLimit) {
      pathfinder_response.txn.execution.gasLimit = ethers.utils.hexlify(
        ethers.BigNumber.from(1000000)
      );
    }
    const tx = await wallet.sendTransaction(pathfinder_response.txn.execution);
    try {
      await tx.wait();
      console.log(
        `Deposit transaction mined successfully on the source chain: ${tx.hash}`
      );
    } catch (error) {
      console.log(
        `Deposit transaction failed on the source chain with error: ${error}`
      );
      return;
    }
    let params = {
      txHash: tx.hash,
      networkId: args.fromTokenChainId,
    };
    setTimeout(async function () {
      let status = await fetchStatus(params);
      console.log(status);
      if (status.tx_status_code === 1) {
        console.log("Transaction completed");
      } else if (status.tx_status_code === 0) {
        console.log("Transaction still pending");
      }
    }, 180000);
  };

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
      <h1>Swap Token</h1>
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
              onClick={() => {
                handleSwap();
              }}
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

export default SwapCrad;
