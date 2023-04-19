// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgHidden: false,
    buttonText: '点击了解更多'
  },
  onClick: function() {
    this.setData({
      imgHidden: true,
    })
  }
})
