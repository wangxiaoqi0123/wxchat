<template>
  <div class="box">
    <div class="start cl">
      <div class="startfont">开始时间</div>
      <div class="starttime">请选择开始时间</div>
    </div>
    <div class="end cl">
      <div class="endfont">结束时间</div>
      <div class="endtime">请选择结束时间</div>
    </div>
    <div class="shiyou">
      <p>请假事由</p>
      <textarea placeholder="请输入请假事由" id="" cols="30" rows="10"></textarea>
    </div>
    <div  class="btn">
      <button>提交申请</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "申请"
    };
  }
};
</script>

<style >
.box{
  width:100%;
  height:100%;
  background-color: rgb(240, 235, 235);
}
.start,.end{
  border-top: 1px solid rgb(226, 226, 226);
  background-color: #fff;
  font-size: 15px;
  line-height: 50px;
}
.startfont,.endfont{
  float: left;
  margin-left: 5%;

}
.starttime,.endtime{
  float: right;
   margin-right: 5%;
}
.cl:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
}

.cl {
    zoom: 1;
}
.shiyou{
  margin-top: 20px;
  background-color: #fff;
}
.shiyou p{
  margin-left: 5%;
  line-height: 50px;
  font-weight: bold;
}
.shiyou textarea{
  margin: 5%;
}
.btn{
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;

}
.btn button{
  width: 60%;
  margin:0 20%;
  height: 40px;
  font-size: 14px;
  border-radius: 120px;
  background-color:rgb(47, 140, 184);
  color: #fff;
  line-height: 40px;
  overflow: hidden;
}
</style>