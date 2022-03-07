/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TransmuterV2, TransmuterV2Interface } from "../TransmuterV2";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ERC20CallFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "IllegalArgument",
    type: "error",
  },
  {
    inputs: [],
    name: "IllegalState",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "AdminUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Exchange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pendingAdmin",
        type: "address",
      },
    ],
    name: "PendingAdminUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SENTINEL",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_ADDRESS",
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
    name: "buffer",
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
    inputs: [
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
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "getExchangedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "exchangedBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getUnexchangedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "unexchangedBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_syntheticToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buffer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_whitelist",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCollateralSource",
        type: "address",
      },
    ],
    name: "setCollateralSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "pauseState",
        type: "bool",
      },
    ],
    name: "setPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "syntheticToken",
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
    name: "totalBuffered",
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
    name: "totalUnexchanged",
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
    name: "underlyingToken",
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
  {
    inputs: [],
    name: "whitelist",
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
    inputs: [
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50600054610100900460ff166200002f5760005460ff161562000039565b62000039620000de565b620000a15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff16158015620000c4576000805461ffff19166101011790555b8015620000d7576000805461ff00191690555b5062000102565b6000620000f630620000fc60201b62000dae1760201c565b15905090565b3b151590565b61207280620001126000396000f3fe608060405234801561001057600080fd5b50600436106101485760003560e01c8062f714ce1461014d57806301ffc9a71461016257806308a563511461018a578063248a9ca31461019d5780632495a599146101be5780632a0acc6a146101de5780632f2ff15d146101f357806336568abe1461020657806352349b17146102195780635355655914610222578063538ba4f91461023557806354fd4d501461023d5780636e553f651461026e5780636fc12e9b146102815780638230ecd61461028a57806391d148541461029d57806393e59dc1146102b0578063a217fddf146102c3578063b187bd26146102cb578063bedb86fb146102d8578063d547741f146102eb578063ddd5e1b2146102fe578063e061426d14610311578063e5c6554314610324578063edaafe2014610337578063f00cab431461034f578063f8c8765e14610364575b600080fd5b61016061015b366004611b4c565b610377565b005b610175610170366004611b78565b61044e565b60405190151581526020015b60405180910390f35b610160610198366004611ba2565b610485565b6101b06101ab366004611bbd565b6104b5565b604051908152602001610181565b60ca546101d1906001600160a01b031681565b6040516101819190611bd6565b6101b0600080516020611ffd83398151915281565b610160610201366004611b4c565b6104ca565b610160610214366004611b4c565b6104ec565b6101b060cc5481565b610160610230366004611bbd565b61056a565b6101d1600081565b610261604051806040016040528060058152602001640322e302e360dc1b81525081565b6040516101819190611c42565b61016061027c366004611b4c565b610883565b6101b060cb5481565b60c9546101d1906001600160a01b031681565b6101756102ab366004611b4c565b61092e565b60d4546101d1906001600160a01b031681565b6101b0600081565b60d3546101759060ff1681565b6101606102e6366004611c66565b610959565b6101606102f9366004611b4c565b6109fd565b61016061030c366004611b4c565b610a1a565b6101b061031f366004611ba2565b610b43565b6101b0610332366004611ba2565b610bac565b60d3546101d19061010090046001600160a01b031681565b6101b060008051602061201d83398151915281565b610160610372366004611c83565b610c1f565b600260015414156103a35760405162461bcd60e51b815260040161039a90611cd7565b60405180910390fd5b60026001556103b0610db4565b6103ee6040518060600160405280336001600160a01b031681526020016103d685610e4a565b6103df90611d24565b81526020016000815250610e74565b60c954610405906001600160a01b031682846111a0565b6040518281526001600160a01b0382169033907f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb906020015b60405180910390a3505060018055565b60006001600160e01b03198216637965db0b60e01b148061047f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b61048d611290565b60d380546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60009081526097602052604090206001015490565b6104d3826104b5565b6104dd81336112a8565b6104e7838361130c565b505050565b6001600160a01b038116331461055c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161039a565b6105668282611392565b5050565b6002600154141561058d5760405162461bcd60e51b815260040161039a90611cd7565b600260015560d35461010090046001600160a01b031633146105c1576040516282b42960e81b815260040160405180910390fd5b60d35460ff16156105e557604051634a613c4160e01b815260040160405180910390fd5b60cb5461062b578060cc60008282546105fe9190611d41565b90915550506040518181523390600080516020611fdd8339815191529060200160405180910390a261087c565b60cf54600090815260ce60205260408120604080516060808201835260cb54825260d254602080840191825260d054848601908152855160e08101875290518152845181830152915182860152918101879052835191820190935260018401548152608083015291925060009060a081016106a5836113f9565b81526020016106b460006113f9565b815250905060cc54816060018181516106cd9190611d41565b905250600060cc8190556106e160ce61141d565b90505b8151156107e45760608201516106f9576107e4565b815160009061070a9060ce9061144d565b905061072c6107218460600151856020015161145f565b60808501519061147e565b60808401908152600060608501526040805160208101909152600183015481529051610757916114a9565b60a08401526107686012600a611e3d565b60a084015151101561077a57506107e4565b60405180602001604052806012600a6107939190611e3d565b60a0860151516107a39190611e49565b905260c0840181905281546107b7916114cb565b606084015280546020840180516107cf908390611e49565b905250825160408401526003015482526106e4565b6080820151516001820155602082015183511461080457602082015160cb555b816040015183602001511461081c57604082015160d2555b815160408401511461082e57815160d0555b60608201511561085457816060015160cc600082825461084e9190611d41565b90915550505b6040518581523390600080516020611fdd8339815191529060200160405180910390a2505050505b5060018055565b600260015414156108a65760405162461bcd60e51b815260040161039a90611cd7565b60026001556108b3610db4565b6108d96040518060600160405280836001600160a01b031681526020016103df85610e4a565b60c9546108f1906001600160a01b03163330856114df565b6040518281526001600160a01b0382169033907f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f629060200161043e565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b61097160008051602061201d8339815191523361092e565b1580156109935750610991600080516020611ffd8339815191523361092e565b155b156109b0576040516282b42960e81b815260040160405180910390fd5b60d3805460ff191682151590811790915560405160ff909116151581527f0e2fb031ee032dc02d8011dc50b816eb450cf856abd8261680dac74f72165bd29060200160405180910390a150565b610a06826104b5565b610a1081336112a8565b6104e78383611392565b60026001541415610a3d5760405162461bcd60e51b815260040161039a90611cd7565b6002600155610a4a610db4565b6040805160608101825233815260006020820152610a7d918101610a6d85610e4a565b610a7690611d24565b9052610e74565b60c954610a93906001600160a01b0316836115df565b60d35460ca54604051631a4ca37b60e21b81526001600160a01b0391821660048201526024810185905233604482015261010090920416906369328dec90606401600060405180830381600087803b158015610aee57600080fd5b505af1158015610b02573d6000803e3d6000fd5b50506040518481526001600160a01b03841692503391507f70eb43c4a8ae8c40502dcf22436c509c28d6ff421cf07c491be56984bd9870689060200161043e565b6001600160a01b038116600090815260cd6020526040812060d254600282015411610b715750600092915050565b8054600282015460cf54919350600091610b98918591610b939160ce916116df565b6114cb565b9050610ba48184611e49565b949350505050565b6001600160a01b038116600090815260cd6020526040812060d254600282015411610bec5760018101548154909250610be59083611d41565b9392505050565b60018101548154600283015460cf54929450600092610c139291610b939160ce91906116df565b9050610ba48184611d41565b600054610100900460ff16610c3a5760005460ff1615610c3e565b303b155b610ca15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161039a565b600054610100900460ff16158015610cc3576000805461ffff19166101011790555b610cdb600080516020611ffd83398151915233611731565b610cf3600080516020611ffd8339815191528061173b565b610d1960008051602061201d833981519152600080516020611ffd83398151915261173b565b60c980546001600160a01b038088166001600160a01b03199283161790925560ca8054878416921691909117905560d3805491851661010002610100600160a81b0319909216919091179055610d6f60ce61141d565b5060d3805460ff1916905560d480546001600160a01b0319166001600160a01b0384161790558015610da7576000805461ff00191690555b5050505050565b3b151590565b323314610e485760d454604051633af32abf60e01b81526001600160a01b0390911690633af32abf90610deb903390600401611bd6565b602060405180830381865afa158015610e08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2c9190611e60565b610e48576040516282b42960e81b815260040160405180910390fd5b565b6000600160ff1b8210610e7057604051630134249960e71b815260040160405180910390fd5b5090565b80516001600160a01b0316600090815260cd6020908152604091829020825160a08101845281548152600182015481840190815260028301548286015260cb54606080840191825260cf5460808501528651908101875283518082529251958101959095525194840194909452909290919015801590610efa5750816040015160d25410155b15610f1a57600081528151602082018051610f16908390611d41565b9052505b805115610f8d576000610f498260000151610b938560400151866080015160ce6116df9092919063ffffffff16565b90508082604001818151610f5d9190611e49565b905250815181908390610f71908390611e49565b905250602082018051829190610f88908390611d41565b905250505b610f9f8160400151856020015161178e565b604082015280516020850151610fb5919061178e565b815260208101516040850151610fcb919061178e565b6020820152815181516080840151604085015192158015939215159290911415906000908490610ff85750825b8015611002575081155b9050801561104e576000611024876040015160ce61144d90919063ffffffff16565b80548851919250906110369082611e49565b87519091506110459082611d41565b9091555061113c565b60008415801561105b5750835b8061106b575083801561106b5750825b9050600085801561107a575084155b8061108a575085801561108a5750835b905081156110e15760006110ac896080015160ce61144d90919063ffffffff16565b80549091506110c65760808901516110c69060ce906117ff565b8751815482906000906110da908490611d41565b9091555050505b8015611139576000611101896040015160ce61144d90919063ffffffff16565b9050886000015181600001600082825461111b9190611e49565b909155505080546111375760408901516111379060ce90611857565b505b50505b845186511461114a57845187555b846020015186602001511461116457602085015160018801555b846040015186606001511461117c57604085015160cb555b856080015186604001511461119657608086015160028801555b5050505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916111fc9190611e7d565b6000604051808303816000865af19150503d8060008114611239576040519150601f19603f3d011682016040523d82523d6000602084013e61123e565b606091505b509150915081158061126c575080511580159061126c57508080602001905181019061126a9190611e60565b155b15610da75784828260405163e7e40b5b60e01b815260040161039a93929190611e99565b610e2c600080516020611ffd8339815191523361092e565b6112b2828261092e565b610566576112ca816001600160a01b0316601461190a565b6112d583602061190a565b6040516020016112e6929190611ece565b60408051601f198184030181529082905262461bcd60e51b825261039a91600401611c42565b611316828261092e565b6105665760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561134e3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61139c828261092e565b156105665760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b611401611b1d565b604051806020016040528061141584611aa5565b905292915050565b6001810180546000918261143083611f3d565b909155505050600181015460009081526020919091526040902090565b60009081526020919091526040902090565b611467611b1d565b6000611472846113f9565b9050610ba48184611abd565b611486611b1d565b60408051602081019091528251845182916114a091611d41565b90529392505050565b6114b1611b1d565b60408051602081019091528251845182916114a091611e49565b6000610be56114da8385611ae0565b611b03565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916115439190611e7d565b6000604051808303816000865af19150503d8060008114611580576040519150601f19603f3d011682016040523d82523d6000602084013e611585565b606091505b50915091508115806115b357508051158015906115b35750808060200190518101906115b19190611e60565b155b156115d75785828260405163e7e40b5b60e01b815260040161039a93929190611e99565b505050505050565b600080836001600160a01b03166342966c6860e01b8460405160240161160791815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516116459190611e7d565b6000604051808303816000865af19150503d8060008114611682576040519150601f19603f3d011682016040523d82523d6000602084013e611687565b606091505b50915091508115806116b557508051158015906116b55750808060200190518101906116b39190611e60565b155b156116d95783828260405163e7e40b5b60e01b815260040161039a93929190611e99565b50505050565b6116e7611b1d565b6000838152602085815260408083208584529281902081518084018352600180860154825283519485019093529181015483529161172581836114a9565b98975050505050505050565b610566828261130c565b6000611746836104b5565b600084815260976020526040808220600101859055519192508391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6000808212156117d257826117a283611d24565b6117ac9085611e49565b915081106117cd57604051630134249960e71b815260040160405180910390fd5b61047f565b826117dd8382611d41565b915081101561047f57604051630134249960e71b815260040160405180910390fd5b60028201546118175760038201819055600290910155565b8082600301541415611827575050565b60008181526020839052604080822060039485018054808552929093206002909101919091559092018190559055565b6000818152602083905260409020600283015482141561187c57600381015460028401555b818360030154141561189357600281015460038401555b6002810154156118bb5760038082015460028301546000908152602086905260409020909101555b6003810154156118e35760028082015460038301546000908152602086905260409020909101555b50600090815260209190915260408120818155600181018290556002810182905560030155565b60606000611919836002611f58565b611924906002611d41565b6001600160401b0381111561193b5761193b611f77565b6040519080825280601f01601f191660200182016040528015611965576020820181803683370190505b509050600360fc1b8160008151811061198057611980611f8d565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106119af576119af611f8d565b60200101906001600160f81b031916908160001a90535060006119d3846002611f58565b6119de906001611d41565b90505b6001811115611a56576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611a1257611a12611f8d565b1a60f81b828281518110611a2857611a28611f8d565b60200101906001600160f81b031916908160001a90535060049490941c93611a4f81611fa3565b90506119e1565b508315610be55760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161039a565b6000611ab36012600a611e3d565b61047f9083611f58565b611ac5611b1d565b60405180602001604052808385600001516114a09190611fba565b611ae8611b1d565b60405180602001604052808385600001516114a09190611f58565b6000611b116012600a611e3d565b825161047f9190611fba565b6040518060200160405280600081525090565b80356001600160a01b0381168114611b4757600080fd5b919050565b60008060408385031215611b5f57600080fd5b82359150611b6f60208401611b30565b90509250929050565b600060208284031215611b8a57600080fd5b81356001600160e01b031981168114610be557600080fd5b600060208284031215611bb457600080fd5b610be582611b30565b600060208284031215611bcf57600080fd5b5035919050565b6001600160a01b0391909116815260200190565b60005b83811015611c05578181015183820152602001611bed565b838111156116d95750506000910152565b60008151808452611c2e816020860160208601611bea565b601f01601f19169290920160200192915050565b602081526000610be56020830184611c16565b8015158114611c6357600080fd5b50565b600060208284031215611c7857600080fd5b8135610be581611c55565b60008060008060808587031215611c9957600080fd5b611ca285611b30565b9350611cb060208601611b30565b9250611cbe60408601611b30565b9150611ccc60608601611b30565b905092959194509250565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b821415611d3a57611d3a611d0e565b5060000390565b60008219821115611d5457611d54611d0e565b500190565b600181815b80851115611d94578160001904821115611d7a57611d7a611d0e565b80851615611d8757918102915b93841c9390800290611d5e565b509250929050565b600082611dab5750600161047f565b81611db85750600061047f565b8160018114611dce5760028114611dd857611df4565b600191505061047f565b60ff841115611de957611de9611d0e565b50506001821b61047f565b5060208310610133831016604e8410600b8410161715611e17575081810a61047f565b611e218383611d59565b8060001904821115611e3557611e35611d0e565b029392505050565b6000610be58383611d9c565b600082821015611e5b57611e5b611d0e565b500390565b600060208284031215611e7257600080fd5b8151610be581611c55565b60008251611e8f818460208701611bea565b9190910192915050565b6001600160a01b03841681528215156020820152606060408201819052600090611ec590830184611c16565b95945050505050565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611f00816017850160208801611bea565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611f31816028840160208801611bea565b01602801949350505050565b6000600019821415611f5157611f51611d0e565b5060010190565b6000816000190483118215151615611f7257611f72611d0e565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081611fb257611fb2611d0e565b506000190190565b600082611fd757634e487b7160e01b600052601260045260246000fd5b50049056fe5988e4c12f4844b895de0739f562558435dca9602fd8b970720ee3cf8dff39bedf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42d3eedd6d69d410e954f4c622838ecc3acae9fdcd83cad412075c85b092770656a264697066735822122079eb7f5610f659bb307462e61c091a92aed885e8fcba86978b65251410a0678c64736f6c634300080b0033";

export class TransmuterV2__factory extends ContractFactory {
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
  ): Promise<TransmuterV2> {
    return super.deploy(overrides || {}) as Promise<TransmuterV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TransmuterV2 {
    return super.attach(address) as TransmuterV2;
  }
  connect(signer: Signer): TransmuterV2__factory {
    return super.connect(signer) as TransmuterV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransmuterV2Interface {
    return new utils.Interface(_abi) as TransmuterV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransmuterV2 {
    return new Contract(address, _abi, signerOrProvider) as TransmuterV2;
  }
}
