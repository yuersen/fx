/**
 * 获取当前脚本路径
 * @returns {string}
 */
export function getCurrentScriptPath(): string {
  // 页面解析到当前为止所有的 script 标签
  const scripts = document.scripts;
  const current = scripts[scripts.length - 1];
  const src = current.src;
  return src.substring(0, src.lastIndexOf("/"));
}
