//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    array: [
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'},
      {message: '1'},
      {message: '2'}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '我发起的菜单',
      path: '/list/list?id=1'
    }
  },
  onLoad: function (options) {
    console.log(options);
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
     console.log('刷新');
  },
  onReachBottom: function(){
    if (this.data.loading) return;  
   this.setData({ loading: true });  
   //updateRefreshIcon.call(this);
    var array = this.data.array.concat([{message: '土生土长'}]);
    setTimeout(() =>{
        this.setData({
          loading: false,
          array: array
        });
   }, 2000);
  }
})
