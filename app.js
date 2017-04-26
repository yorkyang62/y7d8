//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  httpRequest:function(url,params,doSuccess,doFail){
    wx.request({
      url:url,
      header: { //这里写你借口返回的数据是什么类型，这里就体现了微信小程序的强大，直接给你解析数据，再也不用去寻找各种方法去解析json，xml等数据了
        'Content-Type': 'application/jsonp'
      },
      data:params,
      method:'GET',
      success:function(res){
        if(res!= null ){
          //接口实际返回的内容在res.data中
          doSuccess(res.data);                   
        }
        else{
          doFail(res.data);
        }
      },
      fail:function(err){
          doFail(err.data);
      }
    })
  },
  httpUrl:"http://hyu2500460001.my3w.com/service/api/web/index.php/user/user-menu"
})