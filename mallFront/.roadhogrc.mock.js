//mock数据拦截设置
const mock = {}

require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
    Object.assign(mock, require('./mock/' + file))
})

module.exports = mock
