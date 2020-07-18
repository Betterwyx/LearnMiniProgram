App({
  onLaunch:()=>{

  },
  onShow:()=>{
    //获取用户信息，并且将用户信息传给服务器
/*     wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    }) */
   
  },
  //小程序隐藏时
  onHide(){

  },
  globalData:{
    name:'wyx',
    age:23
  }
})