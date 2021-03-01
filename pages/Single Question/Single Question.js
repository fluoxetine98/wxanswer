wx.cloud.init({
  env: 'answer-2gmvhyg53cc1acc8'  //数据库ID
})
let app = getApp();
// 获取云数据库引用
const db = wx.cloud.database();
const admin = db.collection('SingleSel');//注意，这里就是刚才的集合的名字——teacher


Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'a', value: 'A',checked: 'true'},
      { name: 'b', value: 'B' },
      { name: 'c', value: 'C' },
      { name: 'd', value: 'D' },
    ],
    score:[
      { name: 'one', value: '1',checked: 'true'},
      { name: 'two', value: '2' },
      { name: 'three', value:'3'},
      { name: 'fore', value: '4' },
    ]
  },
  radioChange: function (e) {
    var str = null;
    for (var value of this.data.items) {
      if (value.name === e.detail.value) {
        str = value.value;
        break;
      }
    }
    this.setData({
      Str:e.detail.value
    });
  },

  radiochange: function (e) {
    var sco = null;
    for (var value of this.data.score) {
      if (value.name === e.detail.value) {
        sco = value.value;
        break;
      }
    }
    this.setData({
      Sco: e.detail.value
    });
  },

  num1: function (e) {
    this.setData({
      num: e.detail.value
    })
  },

  neirong1: function (e) {
    this.setData({
      neirong: e.detail.value
    })
  },

  A1: function (e) {
    this.setData({
      A: e.detail.value
    })
  },

  B1: function (e) {
    this.setData({
      B: e.detail.value
    })
  },

  C1: function (e) {
    this.setData({
      C: e.detail.value
    })
  },

  D1: function (e) {
    this.setData({
      D: e.detail.value
    })
  },

  upData: function (e) {
    db.collection('SingleSel').add({
      data:{
        QuestionID: this.data.num,
        Question: this.data.neirong,
        ChoiceA: this.data.A,
        ChoiceB: this.data.B,
        ChoiceC: this.data.C,
        ChoiceD: this.data.D,
        Answer: this.data.Str,
        Score: this.data.Sco,
      },
      success:res=>{
        console.log(res);
        console.log("上传成功");
        wx.showToast({
          title: '上传成功！',
          icon: 'success',
          duration: 2500
        })
        setTimeout(function(){
          wx.navigateTo({
            url: '/pages/make-question/make-question',//这里是成功登录后跳转的页面
          })
        },2000);
      },
      fail:err=>{
        console.log(err);
        console.log("上传失败");
        wx.showToast({
          title: '上传失败！',
          icon: 'fail',
          duration: 2500
        })
      }
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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