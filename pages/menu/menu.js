//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    currentTab: 0,
    shareMenu: false,
    inviteUser: false,
    showLikeList: false,
    array: [],
    likeList: [],
    totalNum: 0,
    totalProce: 0
  },
  //事件处理函数
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
    console.log(this.data.currentTab);
  },
  tabWant: function (e) {
    var that = this;
    var tepmpArray = that.data.array;
    tepmpArray[that.data.currentTab].goods_list[e.target.dataset.index].is_like = !tepmpArray[that.data.currentTab].goods_list[e.target.dataset.index].is_like;
    var tempNum = 0;
    var tempPrice = 0;
    for (var i = 0; i < tepmpArray.length; i++) {
      for (var j = 0; j < tepmpArray[i].goods_list.length; j++) {
        if (tepmpArray[i].goods_list[j].is_like) {
          tempNum += 1;
          tempPrice += parseInt(tepmpArray[i].goods_list[j].goods_price);
        }
      }
    }
    that.setData({
      loading: false,
      array: tepmpArray,
      totalNum: tempNum,
      totalProce: tempPrice
    });
  },
  likeListToggle: function () {
    if (this.data.shareMenu) {
      var tempLike = this.data.showLikeList;
      tempLike = !tempLike;
      this.setData({
        showLikeList: tempLike
      });
    }
    else {
      wx.navigateTo({
        url: '../menu_cart/menu_cart'
      })
    }
  },
  onShareAppMessage: function () {
    return {
      title: '我发起的菜单',
      desc: '我发起的菜单',
      path: '/menu/menu?id=1'
    }
  },
  onReady: function () {
  },
  onLoad: function (options) {
    var that = this;
    app.httpRequest(
      app.httpUrl,
      {
        token: "eb16f6cf8b15eff966b6622974e3d3af",
        restuarant_id: "rest1"
      },
      function (data) {
        // for (var i = 0; i < data.category.length; i++) {
        //   for (var j = 0; j < data.category[i].goods_list.length; j++) {
        //     data.category[i].goods_list[j].want = false;
        //   }
        // }
        var tepmpArray = [
          {
            "category_name": "小吃",
            "category_id": 1,
            "goods_list": [
              {
                "goods_id": "goods1",
                "goods_name": "烤翅",
                "goods_price": "15",
                "goods_img": "",
                "goods_like_num": 5,
                "is_like": 1
              },
              {
                "goods_id": "goods2",
                "goods_name": "红烧肉",
                "goods_price": "25",
                "goods_img": "",
                "goods_like_num": 0,
                "is_like": 0
              }
            ]
          },
          {
            "category_name": "热菜",
            "category_id": 2,
            "goods_list": [
              {
                "goods_id": "goods3",
                "goods_name": "酸汤肥牛",
                "goods_price": "30",
                "goods_img": "",
                "goods_like_num": 0,
                "is_like": 0
              },
              {
                "goods_id": "goods4",
                "goods_name": "椒麻鸡",
                "goods_price": "43",
                "goods_img": "",
                "goods_like_num": 8,
                "is_like": 1
              }
            ]
          }
        ];
        var tempNum = 0;
        var tempPrice = 0;
        for (var i = 0; i < tepmpArray.length; i++) {
          for (var j = 0; j < tepmpArray[i].goods_list.length; j++) {
            if (tepmpArray[i].goods_list[j].is_like) {
              tempNum += 1;
              tempPrice += parseInt(tepmpArray[i].goods_list[j].goods_price);
            }
          }
        }
        that.setData({
          loading: false,
          array: tepmpArray,
          totalNum: tempNum,
          totalProce: tempPrice
        });
      },
      function (err) {
        //error
      }
    )
    console.log(options.invite_uid);
    if (options.invite_uid) {
      that.setData({
        loading: false,
        shareMenu: true,
        inviteUser: false
      });
    }
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log('刷新');
  },
  onReachBottom: function () {
    if (this.data.loading) return;
    this.setData({ loading: true });
    //updateRefreshIcon.call(this);
    // var array = this.data.array.concat([{ message: '土生土长' }]);
    // setTimeout(() => {
    //   this.setData({
    //     loading: false,
    //     array: array
    //   });
    // }, 2000);
  }
})
