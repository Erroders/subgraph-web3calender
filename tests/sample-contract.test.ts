import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { WalletCreated } from "../generated/schema"
import { WalletCreated as WalletCreatedEvent } from "../generated/SampleContract/SampleContract"
import { handleWalletCreated } from "../src/sample-contract"
import { createWalletCreatedEvent } from "./sample-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let ownerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let walletAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let walletCid = "Example string value"
    let ownerCid = "Example string value"
    let newWalletCreatedEvent = createWalletCreatedEvent(
      ownerAddress,
      walletAddress,
      walletCid,
      ownerCid
    )
    handleWalletCreated(newWalletCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("WalletCreated created and stored", () => {
    assert.entityCount("WalletCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "WalletCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ownerAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "WalletCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "walletAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "WalletCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "walletCid",
      "Example string value"
    )
    assert.fieldEquals(
      "WalletCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ownerCid",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
