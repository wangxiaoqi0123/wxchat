<template>
  <div class="my">
    <div class="m-box">
        <div class="m-content">
            <image :src="pic"/>
            <view >
                <p >{{name}}</p>
                <p>{{myclass}}</p>
            </view>
        </div>
    </div>
    <div class="m-shadow"></div>
      <div>
          <ul  class="m-maincon">
             <li v-for="(item,index) in list" :key="index">
               <image :src="item.img"/>
               <p >
                  <span >{{item.title}}</span>
                  <span >{{item.text}}</span>
               </p>
             </li>
              <!-- <li >
               <image :src="slist.img"/>
               <p >
                  <span >{{slist.title}}</span>
                  <span >{{slist.text}}</span>
               </p>
             </li>
             <li >
               <image :src="zlist.img"/>
               <p >
                  <span >{{zlist.title}}</span>
                  <span >{{zlist.text}}</span>
               </p>
             </li>
             <li >
               <image :src="wlist.img"/>
               <p >
                  <span >{{wlist.title}}</span>
                  <span >{{wlist.text}}</span>
               </p>
             </li> -->
          </ul>
        </div>
  </div>
</template>

<script>
 
export default {


  data() {
    return {
      pic:"/static/images/tou.jpg",
      name:"lulu",
      myclass:"武汉HTML就业班1903期",
      list:[
        {
          title:"所在校区",
          text:"武汉",
          img:"/static/images/school.jpg"
        },
        {
          title:"上课时间",
          text:"09:00",
          img:"/static/images/zao.jpg"
        },
        {
          title:"放学时间",
          text:"21:00",
          img:"/static/images/wan.jpg"
        }
      ],
      // slist:{
      //     title:"所在校区",
      //     text:"武汉",
      //     img:"/static/images/school.jpg"
      // },
      // zlist:{
      //      title:"上课时间",
      //     text:"09:00",
      //     img:"/static/images/zao.jpg"
      // },
      // wlist:{
      //     title:"放学时间",
      //     text:"21:00",
      //     img:"/static/images/wan.jpg"
      // }
      
    };
  },
  methods: {
   
  }
};
</script>

<style scoped>
 .my{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
 }
 /* 背景为蓝色的部分 */
 .m-shadow{
   background-color: #3097fe;
   width: 100%;
   height: 240rpx;
 }
 /* 个人信息 定位的*/
 .m-box{
   position:absolute;
   left: 0;
   top: 110rpx;
   width:100%;
   height: 200rpx;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .m-content{
    height: 200rpx;
    line-height: 200rpx;
    width: 90%;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 8px #eff6fe;
    display:flex;
    padding:5px;
    align-items: center;
    background-color: #fff;
 }
 .m-content image {
    width: 140rpx;
    height:140rpx;
    border-radius: 50%;
    margin-right: 40rpx;
    margin-left: 20rpx;
    
 }
 .m-content  p{
   line-height: 70rpx;
   font-size:32rpx;
 }
 .m-content  p:nth-child(1){
    font-weight: bold;
    font-size:34rpx;
 }
 .m-content  p:nth-child(2){
   color:"#666666";
 }
 /* 作息列表 */
.m-maincon{
  width:100%;
  flex:1;
  padding-top: 86rpx;
}
.m-maincon li {
  width:100%;
  height: 110rpx;
  line-height: 110rpx;
  border-bottom: 1px solid  #e5e5e5;
  display:flex;
  box-sizing: border-box;
  padding: 0 10px;
  align-items: center;
}
.m-maincon li  image{
  width:60rpx;
  height:60rpx;
  border-radius: 50%;
  margin-right: 20rpx;
 
}
.m-maincon li  p{
  flex:1;
  display: flex; 
  justify-content:space-between;
}
</style>