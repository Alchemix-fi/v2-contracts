/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAlchemistV2Immutables,
  IAlchemistV2ImmutablesInterface,
} from "../IAlchemistV2Immutables";

const _abi = [
  {
    inputs: [],
    name: "debtToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
];

export class IAlchemistV2Immutables__factory {
  static readonly abi = _abi;
  static createInterface(): IAlchemistV2ImmutablesInterface {
    return new utils.Interface(_abi) as IAlchemistV2ImmutablesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAlchemistV2Immutables {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAlchemistV2Immutables;
  }
}