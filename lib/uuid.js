import seededRandom from 'seed-random'

const TOKENS = /[xy]/g

export default function uuid (seed) {
  const random = seed === undefined ? Math.random : seededRandom(seed)

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(TOKENS, (c) => {
    const r = random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
