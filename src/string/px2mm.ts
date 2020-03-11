
/**
 * Assuming the pixel density is 96 dpi, meaning that there are 96 pixels per inch. 
 * We know that 1 inch is equal to 25.4 mm. So there are 96 pixels per 25.4 mm. 
 * Than 1 pixel = (25.4 / 96) mm. Thus, there are 0.26458333 millimeters in a pixel.
 */
const DPI = (function getDPI() {
  const screen = window.screen
  if (screen.deviceXDPI) {
    return [screen.deviceXDPI, screen.deviceYDPI]
  }
  const $div = document.createElement('div')
  $div.style.cssText = 'width: 1in; height: 1in; position: absolute; left: 0; top: 0; z-index: 999; visibility: hidden;'
  document.body.appendChild($div)
  const dpi = [parseInt($div.offsetWidth, 10), parseInt($div.offsetHeight, 10)]
  $div.parentNode.removeChild($div)
  return dpi
})()

export default function px2mm(px) {
  return px / DPI[0] * 25.4
}