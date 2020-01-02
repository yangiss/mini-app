// pages/type/type.js

import request from '../../utils/require.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleInfo: {
      title: "读书",
      imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539165797219&di=c28103fa4d9ce3a8df9a95788d3c4d09&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D2fc6885a3e2ac65c73086e33928ad77d%2Fb90e7bec54e736d13a6fd83290504fc2d562698f.jpg",

    },
    list: [],
    markType: []
  },
  getData(options) {
    let typeId = options.typeId;
    let that = this;
    let data = [{
      "markPeople": "neffy",
      "markPeopleAvatar": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767933055,258610378&fm=27&gp=0.jpg",
      "markCount": "270",
      "articleImgSrc": "/image/list/article/4.png",
      "articleTitle": "三毛：不雕琢痛苦，不敷衍生活",
      "id": "3",
      "publishTime": "1天前"
    },
    {
      "markPeople": "Benson",
      "markPeopleAvatar": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767933055,258610378&fm=27&gp=0.jpg",
      "markCount": "7",
      "articleImgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2795508467,2677631400&fm=27&gp=0.jpg",
      "articleTitle": "回忆顾城和谢烨 | 舒婷",
      "id": "10",
      "publishTime": "1天前"
    },
    {
      "markPeople": "赵旭",
      "markPeopleAvatar": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767933055,258610378&fm=27&gp=0.jpg",
      "markCount": "114",
      "articleImgSrc": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539155923724&di=7f94856b8def4f3fc056342d59d10cad&imgtype=0&src=http%3A%2F%2Fpic.qbaobei.com%2FUploads%2FEditor%2F2016-03-05%2F56da4cdc782e1.png",
      "articleTitle": "人生呐，只有吃不可辜负",
      "id": "11",
      "publishTime": "9月26日"
    }]
    
    this.setData({
      list: data,
      markType: data.markType
    })
    // request({
    //   url: '/getArticleTypeTitleInfo/' = typeId,
    //   success: function (res) {
    //     that.setData({
    //       titleInfo: res
    //     })
    //   }
    // })
  },
  getArticleDetail(e) {
    // e 不重要，没接口，没有文章id
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/articleDetail/articleDetail?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options);
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})