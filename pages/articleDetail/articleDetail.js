// pages/articleDetail/articleDetail.js
var audio = wx.getBackgroundAudioManager();
// audio.title = "水水水水"
// audio.epname = "自身的"
// audio.singer = "阿斯顿"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleDetail: null,
    danmuList: [{
      text: "弹幕大军正在来袭",
      color: '#51c332',
      time: 12
    },
    {
      text: '淡漠1',
      color: '#51c332',
      time: 30
    }],
    aa: true,
    videoCoverHidden: true,
    playing: false,
    flag: true,
    audioCurTime: 0,
    progressPercent: 0,
    progressCircleLeft: 0,
    progressWidth: 520,
    // audioCircleMoveX: '',
    audioCircleOrigionX: 0,
    circleFlag: false

  },
  getData(id) {
    let data = null;
    switch (id) {
      case "10":
        data = {
          "title": "回忆顾城和谢烨 | 舒婷",
          "author": "舒婷",
          "publishTime": "10月13",
          "banner": [],
          "video": {
            "src": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            "poster": "http://img.soogif.com/9KBJkggZhYYnTHtCgrqlC7iIaQx8MyXn.gif_s400x0",
            "id": "video20181015",
            "duration": "5'30''"
          },
          "audio": {},
          "content": "顾城死的前一年，我见到他和谢烨，我还送了谢烨好几件衣服。我走的时候把我的衣服都放在床上，摊着让谢烨挑，需要什么都挑走。她挑走了一件水洗的真丝夹克，一件红衬衫，一条牛仔裤，苹果牌的牛仔裤。第二年就听到她出事了。她死的时候肯定穿着我的衣服，真的。因为他们在国外非常节省，非常非常节省。\n后来我看到别人写的文章，我觉得很生气，里面好像对顾城有点误会，说顾城养了200多只鸡，说他有嗜血的本性，居然在一夜之间把这些鸡都给杀了。这话是不对的。\n事实上，是执法的小法官上岛来，限他3天之内把鸡剩下12只，如果200多只就侵犯了他人的利益。所以他们必须把这些鸡都杀了。谢烨跟我说的，说得非常生动，说他们怎么杀：“舒婷啊，杀得真是血流遍地！”她说，“杀200只鸡，3天以内必须要杀完。”\n那些鸡放在岛上放野了，抓到它们都很困难。杀完了放在毛利人酋长那里。他们打猎的人有那种大冰库，放在大冰库里面冰着。谢烨拿出来做鸡春卷，跟顾城到圩上去卖。他杀鸡确实是迫不得已，但是有人把他说成是嗜血成性，亲手养的鸡，一夜杀光。好像顾城原来就有杀人的倾向似的。",
          "readNum": "5090"
        }
        break;
      case "11":
        data = {
          "title": "人生呐，只有吃不可辜负",
          "author": "单向街书店",
          "publishTime": "2018-10-14",
          "banner": [],
          "video": {},
          "audio": {
            "src": "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
            "poster": "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
            "singer": "许巍",
            "title": "此时此刻",
            "from": "来自单向街书店",
            "audioTitle": "人生呐，只有吃不可辜负",
            "duration": 401
          },
          "content": "「吃」对人类来说，是本能，是礼节，也是艺术。\n《罗曼蒂克消亡史》，葛优谈事情，要在茶楼里，饭桌上。\n无论阴谋如何在桌底下暗潮涌动，饭桌上，还是那简单的几碗粥、几碟小菜、几笼点心。要办上不了台面的事，必须得泡一壶茶，再上一些点心。无论事情再紧迫，点心吃完了，餐具还是要依次撤下。威胁、勒索，少不了一杯酒的侍奉。拒绝威逼利诱，用的是一个手势，与一声干脆利落的「喝茶」。不想掺和阴险的纷争，就用一句「我去吃饭了」搪塞。\n而在家里边，吃，更是毫不含糊。即使一碗粥，女管家也要先尝过，咸了，就重做。人吃的讲究，猫也是，一碗猫食，要用螃蟹熬煮，再放上鲜切的鱼排。食物是精巧的，人是复杂的。那里头的烟火情仇和人生薄凉，让人嘘唏哑然。\n食物是精巧的，人是复杂的。那里头的烟火情仇和人生薄凉，让人嘘唏哑然。",
          "readNum": "5098"
        }
        break;
      case "3":
        data = {
          "title": "三毛：不雕琢痛苦，不敷衍生活",
          "author": "如风",
          "publishTime": "10月4日",
          "banner": [
            "http://5b0988e595225.cdn.sohucs.com/images/20181013/a62b1553f401411cb4a3a3599d7905a3.jpeg",
            "http://5b0988e595225.cdn.sohucs.com/images/20181013/05983e1efad74d7fb348290515354a37.jpeg",
            "http://5b0988e595225.cdn.sohucs.com/images/20181013/f87fe2fe51ea4e6cbc61cab346632161.jpeg"
          ],
          "video": {},
          "audio": {},
          "content": "生与死之间的漫长旅程就像一段拉扯着的橡皮筋，长短不过是极限之内的微小差距，而在这无差别的生命旅程中，唯有赋予意义，生命才方显独特与壮阔。就像三毛说的：“生命不在于长短，而在于是否痛快地活过。”\n三毛去流浪，找寻华袍覆盖之外的远方，找寻自由与心灵的栖息。她的写作，下笔只有一份真诚，不雕琢痛苦，不敷衍生活。她的生命，带着英雄主义的燃烧，浓烈而执著。在有限的生命中三毛不仅痛快地活过，而且活成了一个传奇。\n三毛出生于战争时期的重庆，三岁时居家迁居至台湾。从此也便算是永远离了故土。人们讲起三毛的成长经历，对于这次迁居总是半句话草草带过。然而重庆在三毛的心中是确确实实的故乡。\n再后来她给堂兄的信中写道：“此次回乡之后，乡愁更浓，这种感情是没有办法从我心中拿去的，不晓得哪位好心的记者给我一张家乡油菜地的照片，我拿回来翻拍了，放的好大，几乎每天拿出来看……”\n故乡难归，于是便去远方寻前世的乡愁。\n对于自幼敏感又孤僻的三毛来说，童年的离乱和颠沛的动荡已经在她心中留下了流浪的种子。\n小时候她梦想当一个拾荒者，因为可以把流浪变成生活的常态。\n21岁时与初恋不欢而散，三毛选择用一张前往马德里的机票开启另一段生活。她独自在异乡求学，拼命学习语言，不放弃写作，家信中也不提及半句艰辛，就这样度过了四年的流浪生活。\n四年后她回到台北，终于要与心爱之人携手走进婚姻，爱人却因心脏病发突然离世。她再一次踏上了去往西班牙的漫长路途。在数次的心碎和逃离之后，她选择去往承载着前世乡愁的撒哈拉。这一次她找到了自己的归所。",
          "readNum": "8605"
        }
        break;
      default:
        data = {
          "title": "三毛：不雕琢痛苦，不敷衍生活",
          "author": "如风",
          "publishTime": "10月4日",
          "banner": [
            "http://5b0988e595225.cdn.sohucs.com/images/20181013/a62b1553f401411cb4a3a3599d7905a3.jpeg",
            "http://5b0988e595225.cdn.sohucs.com/images/20181013/05983e1efad74d7fb348290515354a37.jpeg",
            "http://5b0988e595225.cdn.sohucs.com/images/20181013/f87fe2fe51ea4e6cbc61cab346632161.jpeg"
          ],
          "video": {},
          "audio": {},
          "content": "生与死之间的漫长旅程就像一段拉扯着的橡皮筋，长短不过是极限之内的微小差距，而在这无差别的生命旅程中，唯有赋予意义，生命才方显独特与壮阔。就像三毛说的：“生命不在于长短，而在于是否痛快地活过。”\n三毛去流浪，找寻华袍覆盖之外的远方，找寻自由与心灵的栖息。她的写作，下笔只有一份真诚，不雕琢痛苦，不敷衍生活。她的生命，带着英雄主义的燃烧，浓烈而执著。在有限的生命中三毛不仅痛快地活过，而且活成了一个传奇。\n三毛出生于战争时期的重庆，三岁时居家迁居至台湾。从此也便算是永远离了故土。人们讲起三毛的成长经历，对于这次迁居总是半句话草草带过。然而重庆在三毛的心中是确确实实的故乡。\n再后来她给堂兄的信中写道：“此次回乡之后，乡愁更浓，这种感情是没有办法从我心中拿去的，不晓得哪位好心的记者给我一张家乡油菜地的照片，我拿回来翻拍了，放的好大，几乎每天拿出来看……”\n故乡难归，于是便去远方寻前世的乡愁。\n对于自幼敏感又孤僻的三毛来说，童年的离乱和颠沛的动荡已经在她心中留下了流浪的种子。\n小时候她梦想当一个拾荒者，因为可以把流浪变成生活的常态。\n21岁时与初恋不欢而散，三毛选择用一张前往马德里的机票开启另一段生活。她独自在异乡求学，拼命学习语言，不放弃写作，家信中也不提及半句艰辛，就这样度过了四年的流浪生活。\n四年后她回到台北，终于要与心爱之人携手走进婚姻，爱人却因心脏病发突然离世。她再一次踏上了去往西班牙的漫长路途。在数次的心碎和逃离之后，她选择去往承载着前世乡愁的撒哈拉。这一次她找到了自己的归所。",
          "readNum": "8605"
        }
    }

    this.setData({
      articleDetail: data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onVideoTap() {
    this.setData({
      videoCoverHidden: false
    })

    var myVideo = wx.createVideoContext('myVideo');
    myVideo.play()
  },
  setAudio() {
    audio.title = "水水水水"
    audio.epname = "自身的"
    audio.singer = "阿斯顿"
    audio.src = 'http://music.163.com/song/media/outer/url?id=1371780785.mp3'

  },
  onAudioPlayTap() {
    var that = this;
    
    var playing = this.data.playing
    if (playing) {
      audio.pause()
    } else {
      this.setAudio();
    }
    // this.setData({
    //   playing: !palying
    // })
    this.listenAudioPlay();
    this.updateAudioData();
  },
  listenAudioPlay() {
    audio.onPause(() => {
      console.log('onPause')
      this.setData({
        playing: false
      })
    })
    
    audio.onStop(() => {
      this.setData({
        playing: false
      })
    })
    audio.onEnded(() => {
      this.setData({
        playing: false
      })
    })
    audio.onPlay(() => {
      console.log('onPlay')
      this.setData({
        playing: true
      })
    })
  },
  updateAudioData() {
    let audioDuration = this.data.articleDetail.audio.duration;
    audio.onTimeUpdate(() => {
      let percent = this.data.audioCurTime / audioDuration
      let progressPercent = percent * 100
      let left = percent * this.data.progressWidth
      this.setData({
        audioCurTime: audio.currentTime.toFixed(),
        progressPercent: progressPercent,
        progressCircleLeft: left
      })
    })
  },
  onAudioCircleStart: function (e) {
    if (!this.data.circleFlag) {
      let circleFlag = true
      let audioCircleOrigionX = e.touches[0].pageX * this.getPhoneRadio()
      this.setData({
        circleFlag: circleFlag,
        audioCircleOrigionX: audioCircleOrigionX
      })
    }
    console.log(e.touches[0].pageX)
    
    
  },
  onAudioCircleMove: function (e) {
    // console.log(e.touches[0].pageX);
    let audioCircleMoveX = e.touches[0].pageX * this.getPhoneRadio()
    let audioCircleOrigionX = this.data.audioCircleOrigionX
    console.log(audioCircleMoveX, audioCircleOrigionX)

    let progressCircleLeft = audioCircleMoveX - audioCircleOrigionX

    if (progressCircleLeft <= 0) {
      progressCircleLeft = 0
    } else if (progressCircleLeft >= this.data.progressWidth) {
      progressCircleLeft = this.data.progressWidth
    }
    let progressPercent = progressCircleLeft / this.data.progressWidth * 100
    let audioCurTime = (progressCircleLeft / this.data.progressWidth * this.data.articleDetail.audio.duration).toFixed()
    this.setAudio()
    audio.seek(Number(audioCurTime))
    this.listenAudioPlay()
    this.updateAudioData()
    this.setData({
      progressCircleLeft: progressCircleLeft,
      progressPercent: progressPercent,
      audioCurTime: audioCurTime
    })
  },
  getPhoneRadio() {
    var radio = 0
    wx.getSystemInfo({
      success: function (res) {
        var width = res.screenWidth
        radio = 750 / width
      }
    })
    return radio
  }
})

// 1. 总时长
// 2. 已播放时间
// 3. 事件 --》 更新



// 1.运动
// 2. 百分比改变
// 3. 时间改变
// 4. 歌曲播放