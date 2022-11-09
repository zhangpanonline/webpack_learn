module.exports = function(src) {
  return src.replace(/var/g, 'const')
}