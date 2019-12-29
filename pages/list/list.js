// pages/list/list.js
import {
  dict
} from '../../modules/date'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: null,
    title: "点评人见闻：成为中国锦鲤，我就有好运气了吗？",
    imgSrc: "/image/list/recommend-image.png",
    recommendTag: ["+", "手机拍摄", "日韩剧", "游戏", "古典音乐", "电影", "咖啡"],
    list: [],
    markType: [],
    listLike: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _date = new Date();
    this.setData({
      day: dict[(_date.getMonth() + 1).toString()] + '月' + dict[_date.getDate().toString()] + '日'
    })
    this.getLikeData();
    this.getData()

    // wx.showModal({
    //   title: '模态框',
    //   content: '是立刻打开了十多个',
    //   // showCancel: false
    //   // cancelText: "asd"
    //   success: function(success) {
    //     console.log(success,'-----')
    //   },
    //   fail: function(err) {
    //     console.log(err, '------')
    //   },
    //   complete: function(res) {
    //     console.log(res, '++++')
    //   }
    // })


    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000,
    //   mask: true
    // })

    wx.showLoading({
      title: "加载中..."
    })

    setTimeout(() => {
      wx.hideLoading()
    },1000)

   
  },
  getLikeData: function () {
    let listLikeStorage = wx.getStorageSync('listLike');

    if (!listLikeStorage) {
      listLikeStorage = {}
    }
    this.setData({
      listLike: listLikeStorage
    })

    console.log(this.data.listLike);
  },
  onLikeTap: function (e) {
    let _index = e.currentTarget.dataset.index;
    let listLike = this.data.listLike;
    listLike[_index] = !listLike[_index];
    this.setData({
      listLike: listLike
    })

    wx.setStorageSync('listLike', listLike);
  },
  onMoreTap(e) {
    console.log(e)
    let articletype = e.currentTarget.dataset.articletype
    wx.showActionSheet({
      itemList: ['内容过期了', `内容和${articletype}不相关`, `不再显示${articletype}相关内容`],
      itemColor: '#333',
      success(res) {
        console.log(res)
      }
    })
  },
  cheshi() {
    console.log('ceshi')
  },
  getData() {
    let data = {
      "recommend": {
        "date": "十月八日",
        "title": "点评人荐文：许子东访谈：研究到自己，才有价值",
        "imgSrc": "/image/list/recommend-image.png"
      },
      "markType": [{
        "type": "女性穿搭",
        "typeId": "7"
      },
      {
        "type": "男性穿搭",
        "typeId": "1"
      },
      {
        "type": "心理",
        "typeId": "5"
      },
      {
        "type": "深度阅读",
        "typeId": "0"
      },
      {
        "type": "人生整理术",
        "typeId": "2"
      },
      {
        "type": "读书",
        "typeId": "3"
      },
      {
        "type": "日韩剧",
        "typeId": "4"
      },
      {
        "type": "吃喝攻略",
        "typeId": "6"
      }
      ],
      "articleList": [{
        "markPeople": "neffy",
        "markPeopleAvatar": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767933055,258610378&fm=27&gp=0.jpg",
        "markCount": "96",
        "articleImgSrc": "/image/list/article/1.png",
        "articleTitle": "不伦之吻？《吻》背后令人惊讶的往事",
        "articleType": "深度阅读",
        "id": "0",
        "typeId": "0"
      },
      {
        "markPeople": "neffy",
        "markPeopleAvatar": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767933055,258610378&fm=27&gp=0.jpg",
        "markCount": "33",
        "articleImgSrc": "/image/list/article/2.png",
        "articleTitle": "秋季衬衫准没错？中了这几点就白买了",
        "articleType": "男性穿搭",
        "id": "1",
        "typeId": "1"
      },
      {
        "markPeople": "neffy",
        "markPeopleAvatar": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767933055,258610378&fm=27&gp=0.jpg",
        "markCount": "50",
        "articleImgSrc": "/image/list/article/3.png",
        "articleTitle": "你真正需要的，可能没有你以为的那么多 | 什么是极简主义？",
        "articleType": "人生整理术",
        "id": "2",
        "typeId": "2"
      },
      {
        "markPeople": "neffy",
        "markPeopleAvatar": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767933055,258610378&fm=27&gp=0.jpg",
        "markCount": "270",
        "articleImgSrc": "/image/list/article/4.png",
        "articleTitle": "三毛：不雕琢痛苦，不敷衍生活",
        "articleType": "读书",
        "id": "3",
        "typeId": "3"
      },
      {
        "markPeople": "阿妮娜",
        "markPeopleAvatar": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1583048521,3913773527&fm=27&gp=0.jpg",
        "markCount": "161",
        "articleImgSrc": "/image/list/article/5.png",
        "articleTitle": "甜到预告片看了无数遍，这部爱情片等得我好苦！",
        "articleType": "日韩剧",
        "id": "4",
        "typeId": "4"
      },
      {
        "markPeople": "Benson",
        "markPeopleAvatar": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=536063313,1610412903&fm=27&gp=0.jpg",
        "markCount": "366",
        "articleImgSrc": "/image/list/article/6.png",
        "articleTitle": "高手是持续性自律，你是间歇式自虐",
        "articleType": "心理",
        "id": "5",
        "typeId": "5"
      },
      {
        "markPeople": "PILL",
        "markPeopleAvatar": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3109059086,2989439166&fm=27&gp=0.jpg",
        "markCount": "44",
        "articleImgSrc": "/image/list/article/7.png",
        "articleTitle": "180m²的店居然藏着4位日本银座主厨，一次只接待16人！",
        "articleType": "吃喝攻略",
        "id": "6",
        "typeId": "6"
      },
      {
        "markPeople": "neffy",
        "markPeopleAvatar": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767933055,258610378&fm=27&gp=0.jpg",
        "markCount": "518",
        "articleImgSrc": "/image/list/article/8.png",
        "articleTitle": "6个穿衣陷阱，让你俗气到不行",
        "articleType": "女性穿搭",
        "id": "7"
      }
      ]
    }
    this.setData({
      list: data.articleList,
      markType: data.markType
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var _date = new Date();
    this.data.day = dict[(_date.getMonth() + 1).toString()] + '月' + dict[_date.getDate().toString()] + '日';
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('Unload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("下拉刷新")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("上拉处理")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("share")
  }
})