// Page({
//   data: {
//     array: ['美国', '中国', '巴西', '日本'],
//     objectArray: [
//       {
//         id: 0,
//         name: '美国'
//       },
//       {
//         id: 1,
//         name: '中国'
//       },
//       {
//         id: 2,
//         name: '巴西'
//       },
//       {
//         id: 3,
//         name: '日本'
//       }
//     ],
//     index: 0,
//     date: '2016-09-01',
//     time: '12:01'
//   },
//   bindPickerChange: function(e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       index: e.detail.value
//     })
//   },
//   bindDateChange: function(e) {
//     this.setData({
//       date: e.detail.value
//     })
//   },
//   bindTimeChange: function(e) {
//     this.setData({
//       time: e.detail.value
//     })
//   }
// })

//index.js  
//获取应用实例  
var app = getApp()  
Page( {  
  data: {  
    /** 
        * 页面配置 
        */  
    winWidth: 0,  
    winHeight: 0,  
    // tab切换  
    currentTab: 0,  
  },  
  onLoad: function() {  
    var that = this;  
  
    /** 
     * 获取系统信息 
     */  
    wx.getSystemInfo( {  
  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
  
    });  
  },  
  /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {  
  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  
  },  
  /** 
   * 点击tab切换 
   */  
  swichNav: function( e ) {  
  
    var that = this;  
  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  }  
})  
