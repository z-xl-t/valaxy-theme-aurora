/**
 * set default img
 * @param e
 */
export function ImgErrorHander(e: Event, defaultImg: string) {
  const targetEl = e.target as HTMLImageElement
  targetEl.setAttribute('data-src', targetEl.src)
  targetEl.src = defaultImg
}
