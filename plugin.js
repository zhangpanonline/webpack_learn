const pluginName = 'ConsoleLogOnBuildWebpackPlugin'

class Plugin {
  apply(compiler) {

    // 所有文件资源都被 loader 处理后触发这个事件
    compiler.hooks.compilation.tap(pluginName, function (compilation) {

      // 获取打包后的js文件名
      const filename = compiler.options.output.filename

      // 生成一个 index.html 并引入打包后的 js 文件
      const html = `<!doctype html>
      <html>
        <head>
          <title>起步</title>
        </head>
        <body>
          <script src="${filename}"></script>
        </body>
      </html>`

      // 所有处理后的资源都放在 compilation.assets 中
      // 添加一个 index.html 文件
      compilation.assets['index.html'] = {
        source() {
          return html
        },
        size() {
          return html.length
        }
      }
    })
  }
}

module.exports = Plugin
