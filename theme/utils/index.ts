import type { Tags } from 'valaxy'
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
    const index = Math.floor(Math.random() * (colorArr.length))

    arr.push(colorArr[index])
  }
  return arr
}

export function getMenuQuote(menu: Menu[], href: any) {
  const quote = menu.find((m: { href: string }) => m.href.includes(href))?.quote || ''
  return quote
}

export function getTagStyleMap(tags: Tags, colorArr: string[]) {
  const randomColorArr = getRandomColorArr(colorArr, tags.size)
  const tagStyleMap = new Map<string, { style: string }>()

  const counts = Array.from(tags).map(([_, value]) => value.count)
  const max = Math.max(...counts)
  const min = Math.min(...counts)
  const range = max - min
  let i = 0
  tags.forEach((v, k) => {
    const percent = (v.count - min) / range
    const nv = { style: `font-size: ${percent * 24 + 12}px; color: ${randomColorArr[i]}` }
    tagStyleMap.set(k, nv)
    i++
  })
  return tagStyleMap
}
