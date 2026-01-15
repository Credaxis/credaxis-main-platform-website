// src/utils/loadContract.js

import Web3 from "web3"; // optional if you already pass web3 in
import Certificate from "../abis/Certificate.json";
import withMetaMask from "../hoc/withMetaMask";

const contractAddress = "0xC5443Cb91112196B178fCD010aA73a67880b1E5e"; // NOTE: Ganache address won't work on Vercel unless you're connecting to a public RPC

const loadContract = async (web3, account) => {
  try {
    const contract = new web3.eth.Contract(
      Certificate.abi,
      contractAddress,
      { from: account }
    );
    return contract;
  } catch (err) {
    console.error("Failed to load contract:", err);
    throw err;
  }
};

export default loadContract;
