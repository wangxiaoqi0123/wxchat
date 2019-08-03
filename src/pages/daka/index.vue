<template>
  <div class="daka">
    <div class="daka-map">
      <MMap></MMap>
    </div>

    <div class="daka-user">
      <div class="userinfo">
        <div class="u-left">
          <div class="avatar">
            <img :src="avatarUrl" alt />
          </div>
          <div class="location-info">
            <p class="mingzi">{{nickName}}</p>
            <p class="weizhi">
              <img class="dingwei" src="/static/images/biaoji.png" alt />
              <span>啦啦啦啦啦啦啦啦</span>
            </p>
          </div>
        </div>

        <div class="u-right">统计</div>
      </div>
    </div>

    <div class="userdaka">
      <div class="dakashijian">
        <h2>今日打卡</h2>
        <div>
          <p v-if="!!atime">
            <i :style="{backgroundColor:chidaoFlag ? 'red' :'#30dab6'}"></i>
            {{atime}}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>{{chidaoFlag?"迟到":"签到"}}</span>
          </p>
        </div>
        <div>
          <p v-if="!!ptime">
            <i :style="{backgroundColor:zaotuiFlag ? 'red' :'#30dab6'}"></i>
            {{ptime}}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>{{zaotuiFlag?"早退":"签退"}}</span>
          </p>
        </div>
      </div>
      <div class="yuanbox">
        <div class="yuanquan">
          <div class="yuaninfo" @click="qiandao">
            <p>{{sign}}</p>
            <p>{{time}}</p>
          </div>
          <div class="fangda1"></div>
          <div class="fangda2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MMap from "@/components/map/index";
import store from "@/pages/counter/store.js";
export default {
  data() {
    return {
      time: "",
      atime: "",
      ptime: "",
      sign: "签到",
      clickDate: 0,
      chidaoFlag: false,
      zaotuiFlag: false,
      avatarUrl: "",
      nickName: ""
    };
  },
  components: {
    MMap
  },
  mounted() {
    //------------------------------
    // 请求用户头像与信息
    wx.getUserInfo({
      success: res => {
        this.avatarUrl = res.userInfo.avatarUrl;
        this.nickName = res.userInfo.nickName;
      }
    });
    //------------------------------
    setInterval(() => {
      this.format();
    }, 1000);
  },
  methods: {
    /* 
      签到成功后数据存储 
      需要一个数据格式
      {
        data // 年月日
        atime // 早上打卡时间
        ptime // 晚上打卡时间
        chidaoFlag // true迟到 / false正常
        zaotuiFlag // true早退 / false正常
        username // 那个人?
      }

    */

    qiandao() {
      // 判断地理位置逻辑

      // 获取打卡中心点的经纬度
      const Ylongitude = store.state.longitude;
      const Ylatitude = store.state.latitude;
      console.log("Ylongitude", Ylongitude);
      console.log("Ylatitude", Ylatitude);

      // 点击时获取设备的精度维度
      mpvue.getLocation({
        type: "wgs84",
        success: res => {
          const latitude = res.latitude;
          const longitude = res.longitude;

          console.log(111, Math.abs(longitude - Ylongitude));
          console.log(222, Math.abs(latitude - Ylatitude));

          // 判断范围逻辑
          // 纬度1度 = 大约111km
          // 0.002 = 0.111km
          // 给定一个两百米的范围
          // 点击时在范围内就允许打卡
          // 不在范围内就不让打卡,给出提示

          if (
            Math.abs(longitude - Ylongitude) < 0.002 &&
            Math.abs(latitude - Ylatitude) < 0.002
          ) {
            // 点击操作逻辑
            if (!this.atime) {
              // 防止用户连续点击
              console.log(222, new Date());
              // console.log(33333, new Date() - this.clickDate);
              this.clickDate = new Date();

              this.atime = this.time;

              // 签到成功的逻辑
              // 签到成功判断用户是否迟到
              // 需要一个固定上班时间 8:30
              let Chou = new Date().getHours();
              let Cmin = new Date().getMinutes();

              if (Chou < 8) {
                // 正常
                wx.showToast({
                  title: "签到成功",
                  icon: "success",
                  duration: 2000
                });
              } else if (Chou == 8 && Cmin <= 30) {
                // 正常
                wx.showToast({
                  title: "签到成功",
                  icon: "success",
                  duration: 2000
                });
              } else {
                // 迟到
                wx.showToast({
                  title: "迟到 ~~",
                  icon: "none",
                  duration: 2000
                });

                this.chidaoFlag = true;
              }

              this.sign = "签退";
            } else {
              console.log(33333, new Date() - this.clickDate);
              // 防止用户点击出错 10s 内不可重复点击
              if (new Date() - this.clickDate <= 10000) {
                wx.showToast({
                  title: "不要重复点击",
                  icon: "none",
                  duration: 2000
                });
              } else {
                this.ptime = this.time;

                // 签退成功的逻辑
                // 签到成功判断用户是否早退
                // 需要一个固定上班时间 18:00
                let Chou = new Date().getHours();
                let Cmin = new Date().getMinutes();

                if (Chou > 18) {
                  // 正常
                  wx.showToast({
                    title: "签退成功",
                    icon: "success",
                    duration: 2000
                  });
                } else {
                  // 早退
                  this.zaotuiFlag = true;
                  wx.showToast({
                    title: "早退 ~~",
                    icon: "none",
                    duration: 2000
                  });
                }

                this.sign = "已签退";
              }
            }
          } else {
            wx.showToast({
              title: "您还没有进入打开范围,还不能打卡~~",
              icon: "none",
              duration: 2000
            });
          }
        }
      });
    },
    format() {
      let date = new Date();
      let hours = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();

      hours = hours < 10 ? "0" + hours : hours;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      this.time = hours + ":" + min + ":" + sec;
    }
  }
};
</script>

<style scoped>
.daka {
  background: #eeeded;
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.userdaka {
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.daka-map {
  width: 100%;
  height: 200px;
}

.daka-user {
  padding: 0px 5px;
  margin-top: -50px;
  position: relative;
  z-index: 100;
  margin-bottom: 10px;
}
.userinfo {
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}

.u-left {
  flex: 1;
  display: flex;
}
.avatar {
  width: 40px;
  height: 40px;
  padding: 10px;
}
.avatar img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.location-info {
  padding-left: 10px;
}
.location-info p {
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: black;
}

.weizhi {
  text-indent: 8px;
  font-size: 12px;
}

.mingzi {
  text-indent: 20px;
}

.location-info .dingwei {
  float: left;
  display: block;
  width: 12px;
  height: 12px;
}

.location-info span {
  float: left;
}

.u-right {
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.dakashijian {
  padding-top: 20px;
  padding-left: 10px;
}

.dakashijian h2 {
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 5px;
}
.dakashijian div {
  width: 100%;
  height: 20px;
  line-height: 20px;
  padding-top: 8px;
}

.dakashijian p {
  width: 100%;
  height: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.dakashijian p i {
  width: 12px;
  height: 12px;
  margin-right: 20px;
  border-radius: 50%;
}

.yuanbox {
  flex: 1;
  display: flex;
  justify-content: center;
}

.yuanquan {
  margin-top: 10px;
  width: 100px;
  height: 100px;
  background-color: blue;

  border-radius: 50%;
  position: relative;
}

.yuaninfo p:first-child {
  font-size: 16px;
}

.yuaninfo {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  /* border: 1px solid #000; */
}

.fangda1,
.fangda2 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  box-sizing: border-box;
  border: 1px solid blue;
  border-radius: 50%;
  opacity: 0.5;
  color: #fff;
}
.fangda1 {
  animation: ripple 3s infinite;
}

.fangda2 {
  animation: ripple 3s 2s infinite;
}

.yuanquan p:first-child {
  font-size: 18px;
  font-weight: 700;
}

.yuanquan p {
  height: 30px;
  height: 30px;
  color: #fff;
}

@keyframes ripple {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>