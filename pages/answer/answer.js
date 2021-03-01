// pages/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,//导航栏ID，用于确定选择状态和页面的切换
    winWidth:0,//页面宽度
    winHeight:0,//页面内容高度
    //轮播图
    indicatorDots:false,//是否显示轮播图指示点
    autoplay:true,//是否自动播放
    interval:5000,//显示时间
    duration:1000,//滑动时间
  },

  /**
   * swiperNav 设置currentIndex值
   */
  swiperNav: function (e) {
    //setData 设置currentIndex的值，和导航同步
    //currentTarget 获取触发事件标签的属性集合对象
    this.setData({currentIndex:e.currentTarget.id});

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