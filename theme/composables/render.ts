import type { iconStyleType } from 'types'

// 由于 useThemeConfig 函数只能在 component 或 setup 中调用， 因此采用，传入参数的方式，获取 icon

/**
 * set markdown blockquote
 */
export function setMarkdownBlockquote(container: HTMLElement | Document = document, iconStyle: iconStyleType) {
  container.querySelectorAll('.markdown-body blockquote').forEach((el) => {
    const left = document.createElement('i')
    left.classList.add('icon-blockquote-left', iconStyle.panelLeft)
    const right = document.createElement('i')
    right.classList.add('icon-blockquote-right', iconStyle.panelRight)
    el.appendChild(left)
    el.appendChild(right)
  })
}

export function setMarkdownHx(container: HTMLElement | Document = document, iconStyle: iconStyleType) {
  const hxIcon = ['', iconStyle.h1, iconStyle.h2, iconStyle.h3, iconStyle.h4, iconStyle.h5, iconStyle.h6] as string[]
  for (let i = 1; i <= 6; ++i) {
    const hx = `h${i}`
    container.querySelectorAll(`.markdown-body ${hx}`).forEach((el) => {
      const icon = document.createElement('i')
      icon.classList.add(`icon-${hx}`, hxIcon[i])
      el.prepend(icon)
    })
  }
}
