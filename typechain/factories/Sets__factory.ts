/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Sets, SetsInterface } from "../Sets";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xb8c18add",
        type: "bytes32",
      },
    ],
    name: "c_0xb8c18add",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60e7610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80634b24b35c146038575b600080fd5b604e6004803603810190604a91906089565b6050565b005b50565b600080fd5b6000819050919050565b6069816058565b8114607357600080fd5b50565b6000813590506083816062565b92915050565b600060208284031215609c57609b6053565b5b600060a8848285016076565b9150509291505056fea2646970667358221220a2c4f11963134b9f27391fad201b76e60e8acf2a29ad7ca86d0d01541459320564736f6c634300080b0033";

export class Sets__factory extends ContractFactory {
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
  ): Promise<Sets> {
    return super.deploy(overrides || {}) as Promise<Sets>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Sets {
    return super.attach(address) as Sets;
  }
  connect(signer: Signer): Sets__factory {
    return super.connect(signer) as Sets__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SetsInterface {
    return new utils.Interface(_abi) as SetsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Sets {
    return new Contract(address, _abi, signerOrProvider) as Sets;
  }
}