/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Limiters, LimitersInterface } from "../Limiters";

const _abi = [
  {
    inputs: [],
    name: "FIXED_POINT_SCALAR",
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
    inputs: [],
    name: "MAX_COOLDOWN_BLOCKS",
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

const _bytecode =
  "0x60a0610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80631793190114604257806377f8a8dc146062575b600080fd5b6050670de0b6b3a764000081565b60405190815260200160405180910390f35b6050611c208156fea264697066735822122030f1fe58ea4c07b03ac9e86e520d3168ef0cf497a0f22cda00d36a0fadd1f1ea64736f6c634300080b0033";

export class Limiters__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Limiters> {
    return super.deploy(overrides || {}) as Promise<Limiters>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Limiters {
    return super.attach(address) as Limiters;
  }
  connect(signer: Signer): Limiters__factory {
    return super.connect(signer) as Limiters__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LimitersInterface {
    return new utils.Interface(_abi) as LimitersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Limiters {
    return new Contract(address, _abi, signerOrProvider) as Limiters;
  }
}