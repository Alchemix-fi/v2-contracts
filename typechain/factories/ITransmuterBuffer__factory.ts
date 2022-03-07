/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ITransmuterBuffer,
  ITransmuterBufferInterface,
} from "../ITransmuterBuffer";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "RefreshStrategies",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "underlyingToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "transmuter",
        type: "address",
      },
    ],
    name: "RegisterAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "alchemist",
        type: "address",
      },
    ],
    name: "SetAlchemist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "underlyingToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "flowRate",
        type: "uint256",
      },
    ],
    name: "SetFlowRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "SetSource",
    type: "event",
  },
  {
    inputs: [],
    name: "burnCredit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address",
      },
    ],
    name: "exchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address",
      },
    ],
    name: "getAvailableFlow",
    outputs: [
      {
        internalType: "uint256",
        name: "availableFlow",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalCredit",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address",
      },
    ],
    name: "getTotalUnderlyingBuffered",
    outputs: [
      {
        internalType: "uint256",
        name: "totalBuffered",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "weightToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "onERC20Received",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refreshStrategies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "transmuter",
        type: "address",
      },
    ],
    name: "registerAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alchemist",
        type: "address",
      },
    ],
    name: "setAlchemist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "flowRate",
        type: "uint256",
      },
    ],
    name: "setFlowRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "setSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "weightToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "weights",
        type: "uint256[]",
      },
    ],
    name: "setWeights",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "yieldToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimumAmountOut",
        type: "uint256",
      },
    ],
    name: "withdrawFromAlchemist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITransmuterBuffer__factory {
  static readonly abi = _abi;
  static createInterface(): ITransmuterBufferInterface {
    return new utils.Interface(_abi) as ITransmuterBufferInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransmuterBuffer {
    return new Contract(address, _abi, signerOrProvider) as ITransmuterBuffer;
  }
}
