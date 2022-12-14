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

export class AttendeeInvited extends ethereum.Event {
  get params(): AttendeeInvited__Params {
    return new AttendeeInvited__Params(this);
  }
}

export class AttendeeInvited__Params {
  _event: AttendeeInvited;

  constructor(event: AttendeeInvited) {
    this._event = event;
  }

  get eventAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get attendee(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AttendeeRsvpd extends ethereum.Event {
  get params(): AttendeeRsvpd__Params {
    return new AttendeeRsvpd__Params(this);
  }
}

export class AttendeeRsvpd__Params {
  _event: AttendeeRsvpd;

  constructor(event: AttendeeRsvpd) {
    this._event = event;
  }

  get eventAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get attendee(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get response(): i32 {
    return this._event.parameters[2].value.toI32();
  }
}

export class AttendeeUninvited extends ethereum.Event {
  get params(): AttendeeUninvited__Params {
    return new AttendeeUninvited__Params(this);
  }
}

export class AttendeeUninvited__Params {
  _event: AttendeeUninvited;

  constructor(event: AttendeeUninvited) {
    this._event = event;
  }

  get eventAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get attendee(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CommentAdded extends ethereum.Event {
  get params(): CommentAdded__Params {
    return new CommentAdded__Params(this);
  }
}

export class CommentAdded__Params {
  _event: CommentAdded;

  constructor(event: CommentAdded) {
    this._event = event;
  }

  get eventAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get commment(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class EndTimeModified extends ethereum.Event {
  get params(): EndTimeModified__Params {
    return new EndTimeModified__Params(this);
  }
}

export class EndTimeModified__Params {
  _event: EndTimeModified;

  constructor(event: EndTimeModified) {
    this._event = event;
  }

  get eventAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newETime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MetadataModified extends ethereum.Event {
  get params(): MetadataModified__Params {
    return new MetadataModified__Params(this);
  }
}

export class MetadataModified__Params {
  _event: MetadataModified;

  constructor(event: MetadataModified) {
    this._event = event;
  }

  get eventAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newMetadata(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class StartTimeModified extends ethereum.Event {
  get params(): StartTimeModified__Params {
    return new StartTimeModified__Params(this);
  }
}

export class StartTimeModified__Params {
  _event: StartTimeModified;

  constructor(event: StartTimeModified) {
    this._event = event;
  }

  get eventAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newSTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Event extends ethereum.SmartContract {
  static bind(address: Address): Event {
    return new Event("Event", address);
  }

  CREATOR(): Bytes {
    let result = super.call("CREATOR", "CREATOR():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CREATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("CREATOR", "CREATOR():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  INVITED(): Bytes {
    let result = super.call("INVITED", "INVITED():(bytes32)", []);

    return result[0].toBytes();
  }

  try_INVITED(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("INVITED", "INVITED():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RSVPD(): Bytes {
    let result = super.call("RSVPD", "RSVPD():(bytes32)", []);

    return result[0].toBytes();
  }

  try_RSVPD(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("RSVPD", "RSVPD():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _endTime(): BigInt {
    let result = super.call("_endTime", "_endTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try__endTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_endTime", "_endTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _startTime(): BigInt {
    let result = super.call("_startTime", "_startTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try__startTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_startTime", "_startTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get stime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get etime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get metadata(): string {
    return this._call.inputValues[2].value.toString();
  }

  get attendees(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get creator(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCommentCall extends ethereum.Call {
  get inputs(): AddCommentCall__Inputs {
    return new AddCommentCall__Inputs(this);
  }

  get outputs(): AddCommentCall__Outputs {
    return new AddCommentCall__Outputs(this);
  }
}

export class AddCommentCall__Inputs {
  _call: AddCommentCall;

  constructor(call: AddCommentCall) {
    this._call = call;
  }

  get commment(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class AddCommentCall__Outputs {
  _call: AddCommentCall;

  constructor(call: AddCommentCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InviteCall extends ethereum.Call {
  get inputs(): InviteCall__Inputs {
    return new InviteCall__Inputs(this);
  }

  get outputs(): InviteCall__Outputs {
    return new InviteCall__Outputs(this);
  }
}

export class InviteCall__Inputs {
  _call: InviteCall;

  constructor(call: InviteCall) {
    this._call = call;
  }

  get attendee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InviteCall__Outputs {
  _call: InviteCall;

  constructor(call: InviteCall) {
    this._call = call;
  }
}

export class ModifyEndTimeCall extends ethereum.Call {
  get inputs(): ModifyEndTimeCall__Inputs {
    return new ModifyEndTimeCall__Inputs(this);
  }

  get outputs(): ModifyEndTimeCall__Outputs {
    return new ModifyEndTimeCall__Outputs(this);
  }
}

export class ModifyEndTimeCall__Inputs {
  _call: ModifyEndTimeCall;

  constructor(call: ModifyEndTimeCall) {
    this._call = call;
  }

  get time(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ModifyEndTimeCall__Outputs {
  _call: ModifyEndTimeCall;

  constructor(call: ModifyEndTimeCall) {
    this._call = call;
  }
}

export class ModifyEventCall extends ethereum.Call {
  get inputs(): ModifyEventCall__Inputs {
    return new ModifyEventCall__Inputs(this);
  }

  get outputs(): ModifyEventCall__Outputs {
    return new ModifyEventCall__Outputs(this);
  }
}

export class ModifyEventCall__Inputs {
  _call: ModifyEventCall;

  constructor(call: ModifyEventCall) {
    this._call = call;
  }

  get metadata(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ModifyEventCall__Outputs {
  _call: ModifyEventCall;

  constructor(call: ModifyEventCall) {
    this._call = call;
  }
}

export class ModifyStartTimeCall extends ethereum.Call {
  get inputs(): ModifyStartTimeCall__Inputs {
    return new ModifyStartTimeCall__Inputs(this);
  }

  get outputs(): ModifyStartTimeCall__Outputs {
    return new ModifyStartTimeCall__Outputs(this);
  }
}

export class ModifyStartTimeCall__Inputs {
  _call: ModifyStartTimeCall;

  constructor(call: ModifyStartTimeCall) {
    this._call = call;
  }

  get time(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ModifyStartTimeCall__Outputs {
  _call: ModifyStartTimeCall;

  constructor(call: ModifyStartTimeCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class RsvpCall extends ethereum.Call {
  get inputs(): RsvpCall__Inputs {
    return new RsvpCall__Inputs(this);
  }

  get outputs(): RsvpCall__Outputs {
    return new RsvpCall__Outputs(this);
  }
}

export class RsvpCall__Inputs {
  _call: RsvpCall;

  constructor(call: RsvpCall) {
    this._call = call;
  }

  get response(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class RsvpCall__Outputs {
  _call: RsvpCall;

  constructor(call: RsvpCall) {
    this._call = call;
  }
}

export class UninviteCall extends ethereum.Call {
  get inputs(): UninviteCall__Inputs {
    return new UninviteCall__Inputs(this);
  }

  get outputs(): UninviteCall__Outputs {
    return new UninviteCall__Outputs(this);
  }
}

export class UninviteCall__Inputs {
  _call: UninviteCall;

  constructor(call: UninviteCall) {
    this._call = call;
  }

  get attendee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UninviteCall__Outputs {
  _call: UninviteCall;

  constructor(call: UninviteCall) {
    this._call = call;
  }
}
