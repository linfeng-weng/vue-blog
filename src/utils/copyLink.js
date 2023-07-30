import { messagePrompt, errorPrompt } from "./messagePrompt"

export default async function copyLink() {
    const Link = window.location.href
   
    try {
        await navigator.clipboard.writeText(Link)
        messagePrompt('复制链接成功')
    } catch (error) {
        errorPrompt('复制链接失败')
    }
}