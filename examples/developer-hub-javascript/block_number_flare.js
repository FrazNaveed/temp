import { Web3 } from "web3";

const web3 = new Web3("https://flare-api.flare.network/ext/C/rpc");
web3.eth.getBlockNumber().then(console.log);
