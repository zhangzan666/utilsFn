// 解析 URL 查询字符串
/**
 * 
 * @param {string} string 
 */
function getQueryStringArgs(string) {
  let qs = string.substring(1),
    args = {}
  
  for (let item of qs.split('&').map(kv => kv.split("="))) {
    let name = decodeURIComponent(item[0]),
    value = decodeURIComponent(item[1])
    if(name.length) {
      args[name] = value
    }
  }

  return args
}