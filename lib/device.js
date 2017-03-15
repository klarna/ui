import { MOBILE_MAX_WIDTH } from '../settings'

/**
 * Based on window width determines mobile
 *
 * This should be refactored into a HOC attaching to context
 * for listening to window resize events
 */
export const isMobile = () => {
  var currentWidth = window.innerWidth || document.body.clientWidth
  return currentWidth < MOBILE_MAX_WIDTH
}
