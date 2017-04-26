// pages/menu_cart/menu_cart.js
var app = getApp();
Page({
  data: {
    totalNum: 0,
    totalProce: 0,
    likeList: []
  },
  tapSelect: function (e) {
    var tepmpArray = this.data.likeList;
    tepmpArray[e.target.dataset.index].slected = !tepmpArray[e.target.dataset.index].slected;
    var tempNum = 0;
    var tempPrice = 0;
    var tempLikeList = [];
    for (var i = 0; i < tepmpArray.length; i++) {
      if (tepmpArray[i].slected) {
        tempNum += tepmpArray[i].selectNum;
        tempPrice += parseInt(tepmpArray[i].goods_price) * tepmpArray[i].selectNum;
      }
      tempLikeList.push(tepmpArray[i]);
    }
    this.setData({
      loading: false,
      totalNum: tempNum,
      totalProce: tempPrice,
      likeList: tempLikeList
    });
  },
  addNum:function(e){
    var tepmpArray = this.data.likeList;
    if(tepmpArray[e.target.dataset.index].selectNum==0){
      tepmpArray[e.target.dataset.index].slected = true;
    }
    tepmpArray[e.target.dataset.index].selectNum++;
    var tempNum = 0;
    var tempPrice = 0;
    var tempLikeList = [];
    for (var i = 0; i < tepmpArray.length; i++) {
      if (tepmpArray[i].slected) {
        tempNum += tepmpArray[i].selectNum;
        tempPrice += parseInt(tepmpArray[i].goods_price) * tepmpArray[i].selectNum;
      }
      tempLikeList.push(tepmpArray[i]);
    }
    this.setData({
      loading: false,
      totalNum: tempNum,
      totalProce: tempPrice,
      likeList: tempLikeList
    });
  },
  minusNum:function(e){
    var tepmpArray = this.data.likeList;
    if(tepmpArray[e.target.dataset.index].selectNum==0){
      return;
    }
    tepmpArray[e.target.dataset.index].selectNum--;
    var tempNum = 0;
    var tempPrice = 0;
    var tempLikeList = [];
    for (var i = 0; i < tepmpArray.length; i++) {
      if (tepmpArray[i].slected) {
        tempNum += tepmpArray[i].selectNum;
        tempPrice += parseInt(tepmpArray[i].goods_price) * tepmpArray[i].selectNum;
      }
      tempLikeList.push(tepmpArray[i]);
    }
    this.setData({
      loading: false,
      totalNum: tempNum,
      totalProce: tempPrice,
      likeList: tempLikeList
    });
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
            "goods_name": "烤翅",
            "goods_id": "goods1",
            "goods_price": "15",
            "goods_number": 0
          },
          {
            "goods_name": "麻辣小龙虾",
            "goods_id": "goods2",
            "goods_price": "85",
            "goods_number": 3
          },
          {
            "goods_name": "小炒肉",
            "goods_id": "goods3",
            "goods_price": "20",
            "goods_number": 1
          }
        ];
        var tempNum = 0;
        var tempPrice = 0;
        var tempLikeList = [];
        for (var i = 0; i < tepmpArray.length; i++) {
          if (tepmpArray[i].goods_number > 0) {
            tempNum += tepmpArray[i].goods_number;
            tempPrice += parseInt(tepmpArray[i].goods_price) * tepmpArray[i].goods_number;
            tempLikeList.push(Object.assign(tepmpArray[i], { "slected": true,"selectNum":tepmpArray[i].goods_number}));
          }
        }
        that.setData({
          loading: false,
          totalNum: tempNum,
          totalProce: tempPrice,
          likeList: tempLikeList
        });
      },
      function (err) {
        //error
      }
    )
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})