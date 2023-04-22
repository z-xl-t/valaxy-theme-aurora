import type { Menu } from '../types'
/**
 * set default img
 * @param e
 */
export function ImgErrorHander(e: Event, defaultImg: string) {
  const targetEl = e.target as HTMLImageElement
  targetEl.setAttribute('data-src', targetEl.src)
  targetEl.src = defaultImg
}

export function onImgError(e: Event, defaultImage: string) {
  ImgErrorHander(e, defaultImage)
}

/**
 * get random color array
 */
export function getRandomColorArr(colorArr: string[], length: number) {
  const arr: string[] = []
  for (let i = 0; i < length; ++i) {
    const index = Math.floor(Math.random() * (colorArr.length) + 1)
    arr.push(colorArr[index])
  }
  return arr
}

export function getMenuQuote(menu: Menu[], link: any) {
  const quote = menu.find((m: { link: string }) => m.link.includes(link))?.quote || ''
  return quote
}
