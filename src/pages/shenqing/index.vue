<template>
  <div class="qjbox">
    <a href="/pages/shenqingxiangqing/main">
    <div class="qjdiv">
      <img src="/static/images/qj.png" alt />
      <span>请假</span>
    </div>
    </a>
    <a href="/pages/qjdetail/main">
      <div class="jldiv" @click="gotodetail">
        <img src="/static/images/qj.png" alt />
        <span>请假记录</span>
        <i>
          <img src="/static/images/goback.png" alt />
        </i>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "申请"
    };
  },
  methods: {}
};
</script>

<style scoped>
.qjbox {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}
.qjdiv {
  width: 100%;
  height: 150rpx;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.qjdiv img {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.qjdiv span {
  font-size: 22rpx;
  line-height: 46rpx;
}
.jldiv {
  width: 100%;
  height: 80rpx;
  background-color: #fff;
  margin-top: 20rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.jldiv img {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  margin: 0 20rpx;
}
.jldiv span {
  font-size: 26rpx;
  flex: 1;
}
.jldiv i img {
  width: 30rpx;
  height: 30rpx;
  float: right;
  transform: rotate(180deg);
}
</style>