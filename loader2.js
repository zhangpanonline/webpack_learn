module.exports = function(src) {
  const cb = this.async()
  setTimeout(() => {
    cb(null, `${src.replace(/;/g, '')}`)
  }, 3000);
}