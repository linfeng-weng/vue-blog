// 获取缩进/颜色数据函数
const getConfig = (nodeName) => {
  let indent
  let color
  switch (nodeName) {
    case 'H1':
      indent = 0
      color = '#000'
      break
    case 'H2':
      indent = 1
      color = '#515767'
      break
    case 'H3':
      indent = 2
      color = '#8A919F'
      break
    default:
      break
  }
  return { indent, color }
}

const calculateOffsets = (elRef) => {
  const anchors = elRef.value.querySelectorAll('h1, h2, h3')
  // 过滤空标题元素
  const titles = Array.from(anchors).filter((item) => !!item.innerText.trim())
  // 无数据则退出
  if (titles.length === 0) return
  // 最终数据
  const arr = titles.map((item) => {
    const { indent, color } = getConfig(item.nodeName)
    return {
      title: item.innerText,
      tag: item.nodeName,
      offsetTop: item.offsetTop,
      indent,
      color
    }
  })
  return arr
}

const getCatalogStructure = async (elRef) => {
  const images = elRef.value.querySelectorAll('img')
  if (images.length === 0) {
    const arr = calculateOffsets(elRef)
    return arr
  }

  const imageLoadPromises = Array.from(images).map((img) => {
    return new Promise((resolve) => {
      if (img.complete) resolve()
      else img.onload = img.onerror = () => resolve()
    })
  })
  await Promise.all(imageLoadPromises)

  return calculateOffsets(elRef)
}

export default getCatalogStructure
