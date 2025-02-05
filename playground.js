"use strict";
const { GreeterClient } = require("./dist");
const anchor = require("@coral-xyz/anchor");

const cluster =
  process.env.CLUSTER !== undefined ? process.env.CLUSTER : "devnet";

process.env.ANCHOR_WALLET =
  process.env.ANCHOR_WALLET !== undefined
    ? process.env.ANCHOR_WALLET
    : `${process.env.HOME}/.config/solana/id.json`;
const defaultProvider = anchor.AnchorProvider.local(
  anchor.web3.clusterApiUrl(cluster)
);

module.exports = {
  greeterClient: new GreeterClient(
    defaultProvider.connection,
    defaultProvider.wallet
  ),
};
