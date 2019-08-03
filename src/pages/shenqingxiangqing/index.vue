<template>
  <div class="box">
    <div class="start cl">
      <div class="startfont">开始时间</div>
      <div class="starttime">
        <picker mode="multiSelector" @change="bindMultiPickerChange" :value="multiIndex" :range="newMultiArray" >
          <span>{{time}}</span>
        </picker>

        <!-- <picker mode="date" @click="changeDate" :value="date" start="2015-09-01" end="2019-09-01" >
          <view class="picker">
            当前选择: {{date}}
          </view>
        </picker>
        <picker mode="time" :value="time" start="09:01" end="21:01" bindchange="bindTimeChange">
          <view class="picker">
            当前选择: {{time}}
          </view>
        </picker> -->
        
      </div>
    </div>
    <div class="end cl">
      <div class="endfont">结束时间</div>
      <div class="endtime">
        <picker mode="multiSelector" @change="bindMultiPickerChange1" :value="multiIndex1" :range="newMultiArray">
          <span>{{time1}}</span>
        </picker>
      </div>
    </div>
    <div class="shiyou">
      <p>请假事由</p>
      <textarea placeholder="请输入请假事由" id="" cols="30" rows="10" v-model="text"></textarea>
    </div>
    <div  class="btn">
      <button @click="sendtext">提交申请</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "申请",
      text:"",
      date:"请选择开始日期",
       time: "点击设置开始时间",
       time1:"点击设置结束时间",
      multiArray: [],
      multiIndex: [0, 0, 0, 0, 0],
      multiIndex1: [0, 0, 0, 0, 0]

    };
  },
  computed: {
    newMultiArray: () => {
      let array = [];
      const date = new Date();
      const years = [];
      const months = [];
      const days = [];
      const hours = [];
      const minutes = [];
 
      for (let i = 2018; i <= date.getFullYear() + 10; i++) {
        years.push("" + i);
      }
      array.push(years);
 
      for (let i = 1; i <= 12; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        months.push("" + i);
      }
      array.push(months);
 
      for (let i = 1; i <= 31; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        days.push("" + i);
      }
      array.push(days);
 
      for (let i = 0; i < 24; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        hours.push("" + i);
      }
      array.push(hours);
 
      for (let i = 0; i < 60; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        minutes.push("" + i);
      }
      array.push(minutes);
      return array;
    }
  },

  methods:{
    sendtext(){
      mpvue.showToast({
        title: this.text,
        icon: 'success',
        duration: 2000
      })
    },
    changeDate(e){
      console.log("1",e)
      this.date = e.target.timeStamp
    },
     bindMultiPickerChange(e) {
      this.multiIndex = e.target.value;
      console.log("当前选择的时间", this.multiIndex);
      const index = this.multiIndex;
      const year = this.newMultiArray[0][index[0]];
      const month = this.newMultiArray[1][index[1]];
      const day = this.newMultiArray[2][index[2]];
      const hour = this.newMultiArray[3][index[3]];
      const minute = this.newMultiArray[4][index[4]];
      this.time = year + "-" + month + "-" + day + " " + hour + ":" + minute;
    },
     bindMultiPickerChange1(e) {
      this.multiIndex1 = e.target.value;
      console.log("当前选择的时间", this.multiIndex1);
      const index = this.multiIndex1;
      const year = this.newMultiArray[0][index[0]];
      const month = this.newMultiArray[1][index[1]];
      const day = this.newMultiArray[2][index[2]];
      const hour = this.newMultiArray[3][index[3]];
      const minute = this.newMultiArray[4][index[4]];
      this.time1 = year + "-" + month + "-" + day + " " + hour + ":" + minute;
    }

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