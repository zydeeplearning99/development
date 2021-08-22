/**
 * 获取地址参数值
 * @param name
 * @returns {string}
 */
export const getQueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let url = window.location.href
  let index = url.lastIndexOf('?')
  let token = url.substring(index + 1)
  let r = token.match(reg)
  if (r !== null) {
    return decodeURI(r[2]);
  } else {
    return ''
  }
}