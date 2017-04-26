// pages/orderDetail/orderDetail.js
Page({
  data:{},
  onLoad:function(options){
    wx.request({
      url: 'http://hd.springtour.com/Index/SearchLineByID?enabled=1&lineId=12847&callback=jQuery1820032841618590746524_1487865117590&_=1487865117718', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
          'content-type': 'application/json'
      },
      complete: function( res ) {
          if( res == null || res.data == null ) {
              console.log("error");
          }
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})