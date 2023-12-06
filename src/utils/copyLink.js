import { successPrompt, messagePrompt, errorPrompt } from './messagePrompt'

// export default async function copyLink() {
//     const Link = window.location.href

//     try {
//         await navigator.clipboard.writeText(Link)
//         messagePrompt('复制链接成功')
//     } catch (error) {
//         errorPrompt('复制链接失败')
//     }
// }

export default async function copyLink() {
  const Link = window.location.href

  const textArea = document.createElement('textarea')
  textArea.value = Link

  // 将元素设置为不可见
  textArea.style.opacity = '0'
  textArea.style.position = 'fixed'
  textArea.style.pointerEvents = 'none'

  document.body.appendChild(textArea)
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    if (successful) {
      // successPrompt('复制链接成功')
      ElMessage.success('复制链接成功')
    } else {
      errorPrompt('复制链接失败')
    }
  } catch (error) {
    errorPrompt('复制链接失败')
  }

  document.body.removeChild(textArea)
}
