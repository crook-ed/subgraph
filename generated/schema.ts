// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class IncentiveCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("rewardToken", Value.fromBytes(Bytes.empty()));
    this.set("pool", Value.fromBytes(Bytes.empty()));
    this.set("startTime", Value.fromBigInt(BigInt.zero()));
    this.set("endTime", Value.fromBigInt(BigInt.zero()));
    this.set("refundee", Value.fromBytes(Bytes.empty()));
    this.set("reward", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IncentiveCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save IncentiveCreated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("IncentiveCreated", id.toString(), this);
    }
  }

  static load(id: string): IncentiveCreated | null {
    return changetype<IncentiveCreated | null>(
      store.get("IncentiveCreated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rewardToken(): Bytes {
    let value = this.get("rewardToken");
    return value!.toBytes();
  }

  set rewardToken(value: Bytes) {
    this.set("rewardToken", Value.fromBytes(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value!.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value!.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value!.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get refundee(): Bytes {
    let value = this.get("refundee");
    return value!.toBytes();
  }

  set refundee(value: Bytes) {
    this.set("refundee", Value.fromBytes(value));
  }

  get reward(): BigInt {
    let value = this.get("reward");
    return value!.toBigInt();
  }

  set reward(value: BigInt) {
    this.set("reward", Value.fromBigInt(value));
  }
}

export class TokenStaked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("incentiveId", Value.fromBytes(Bytes.empty()));
    this.set("liquidity", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenStaked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TokenStaked entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TokenStaked", id.toString(), this);
    }
  }

  static load(id: string): TokenStaked | null {
    return changetype<TokenStaked | null>(store.get("TokenStaked", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get incentiveId(): Bytes {
    let value = this.get("incentiveId");
    return value!.toBytes();
  }

  set incentiveId(value: Bytes) {
    this.set("incentiveId", Value.fromBytes(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }
}

export class TokenUnstaked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("incentiveId", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenUnstaked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TokenUnstaked entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TokenUnstaked", id.toString(), this);
    }
  }

  static load(id: string): TokenUnstaked | null {
    return changetype<TokenUnstaked | null>(store.get("TokenUnstaked", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get incentiveId(): Bytes {
    let value = this.get("incentiveId");
    return value!.toBytes();
  }

  set incentiveId(value: Bytes) {
    this.set("incentiveId", Value.fromBytes(value));
  }
}
