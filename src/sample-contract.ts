import { WalletCreated as WalletCreatedEvent } from "../generated/SampleContract/SampleContract"
import { WalletCreated } from "../generated/schema"

export function handleWalletCreated(event: WalletCreatedEvent): void {
  let entity = new WalletCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ownerAddress = event.params.ownerAddress
  entity.walletAddress = event.params.walletAddress
  entity.walletCid = event.params.walletCid
  entity.ownerCid = event.params.ownerCid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
