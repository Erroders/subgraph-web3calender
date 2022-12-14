// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class WalletCreated extends ethereum.Event {
  get params(): WalletCreated__Params {
    return new WalletCreated__Params(this);
  }
}

export class WalletCreated__Params {
  _event: WalletCreated;

  constructor(event: WalletCreated) {
    this._event = event;
  }

  get ownerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get walletAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get walletCid(): string {
    return this._event.parameters[2].value.toString();
  }

  get ownerCid(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class SampleContract extends ethereum.SmartContract {
  static bind(address: Address): SampleContract {
    return new SampleContract("SampleContract", address);
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateWalletCall extends ethereum.Call {
  get inputs(): CreateWalletCall__Inputs {
    return new CreateWalletCall__Inputs(this);
  }

  get outputs(): CreateWalletCall__Outputs {
    return new CreateWalletCall__Outputs(this);
  }
}

export class CreateWalletCall__Inputs {
  _call: CreateWalletCall;

  constructor(call: CreateWalletCall) {
    this._call = call;
  }

  get walletCid_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get ownerCid_(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CreateWalletCall__Outputs {
  _call: CreateWalletCall;

  constructor(call: CreateWalletCall) {
    this._call = call;
  }
}
