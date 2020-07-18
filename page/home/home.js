// page/home/home.js

//getApp()可以获取App()产生的实例对象
const app=getApp();
const name=app.globalData.name;
const age=app.globalData.age;
Page({
  /* 1.页面所需数据的定义 */
  data: {
    name:'wyx',
    age:18,
    movices:[
      {
        name:'aaa',
        age:21,
        height:165
      },
      {
        name:'bbb',
        age:21,
        height:165
      },
      {
        name:'ccc',
        age:21,
        height:165
      }, {
        name:'ddd',
        age:21,
        height:165
      }
    ],
    count:0,
    list:[]
  },
  /* 2.监听wxml中相关的事件 */
  handleBtnClick(){
    this.setData({
      count:this.data.count+1
    })
  },
  handleSubClick(){
    this.setData({
      count:this.data.count-1
    })
  },
  getuserinfo(event){
    console.log(event)
  },
  getScollTop(){
    scrollTo(0,500)
  },
  /* 3。周期函数的执行 */
  onLoad(){
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        console.log(res)
        const data=res.data.data.list;
        this.setData({
          list:data
        })
      }
    })
  },
  /* 4.监听其他事件 */
  onPageScroll(obj){
    console.log(obj)
  }

})