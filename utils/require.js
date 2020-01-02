var baseUrl = 'https://www.easy-mock.com/project/5bb8c1c63ccc501a316e3ccb'

function require (params) {
  wx.require({
    url: baseUrl + params.url,
    success: function (res) {
      if (res.data.code == 0) {
        params.success(res.data.data)
      } else {
        showError()
      }
    },
    fail: function () {
      showError()
    }
  })
}

function showError() {
  wx.showToast({
    totle: "请求错误",
    icon: "none"
  })
}

module.exports = require