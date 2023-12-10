/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface TokenBridgeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bridgeToken"
      | "crossTokenAddress"
      | "inbox"
      | "outbox"
      | "releaseToken"
      | "setCrossTokenAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bridgeToken",
    values: [BigNumberish, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "crossTokenAddress",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
  encodeFunctionData(functionFragment: "outbox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releaseToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCrossTokenAddress",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "bridgeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "crossTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "outbox", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCrossTokenAddress",
    data: BytesLike
  ): Result;
}

export interface TokenBridge extends BaseContract {
  connect(runner?: ContractRunner | null): TokenBridge;
  waitForDeployment(): Promise<this>;

  interface: TokenBridgeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  bridgeToken: TypedContractMethod<
    [
      chainId: BigNumberish,
      tokenAddress: AddressLike,
      to: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  crossTokenAddress: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [string],
    "view"
  >;

  inbox: TypedContractMethod<[], [string], "view">;

  outbox: TypedContractMethod<[], [string], "view">;

  releaseToken: TypedContractMethod<
    [chainId: BigNumberish, messageId: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCrossTokenAddress: TypedContractMethod<
    [
      chainId: BigNumberish,
      sourceTokenAddress: AddressLike,
      targetTokenAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bridgeToken"
  ): TypedContractMethod<
    [
      chainId: BigNumberish,
      tokenAddress: AddressLike,
      to: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "crossTokenAddress"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "inbox"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "outbox"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "releaseToken"
  ): TypedContractMethod<
    [chainId: BigNumberish, messageId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCrossTokenAddress"
  ): TypedContractMethod<
    [
      chainId: BigNumberish,
      sourceTokenAddress: AddressLike,
      targetTokenAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}