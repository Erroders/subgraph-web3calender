import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { WalletCreated } from "../generated/SampleContract/SampleContract"

export function createWalletCreatedEvent(
  ownerAddress: Address,
  walletAddress: Address,
  walletCid: string,
  ownerCid: string
): WalletCreated {
  let walletCreatedEvent = changetype<WalletCreated>(newMockEvent())

  walletCreatedEvent.parameters = new Array()

  walletCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerAddress",
      ethereum.Value.fromAddress(ownerAddress)
    )
  )
  walletCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "walletAddress",
      ethereum.Value.fromAddress(walletAddress)
    )
  )
  walletCreatedEvent.parameters.push(
    new ethereum.EventParam("walletCid", ethereum.Value.fromString(walletCid))
  )
  walletCreatedEvent.parameters.push(
    new ethereum.EventParam("ownerCid", ethereum.Value.fromString(ownerCid))
  )

  return walletCreatedEvent
}
