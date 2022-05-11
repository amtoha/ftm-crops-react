import { metaMask } from './connectors'
import { defaultChain } from './chains'

export const switchChain = async () => {
  await metaMask.activate(defaultChain)
}
