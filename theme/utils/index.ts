/**
 * set default img
 * @param e
 */
export function ImgErrorHander(e: Event, defaultImg: string) {
  const targetEl = e.target as HTMLImageElement
  targetEl.setAttribute('data-src', targetEl.src)
  targetEl.src = defaultImg
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
