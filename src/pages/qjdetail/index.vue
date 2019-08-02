<template>
  <div class="qjddiv">
    <ul>
      <li>
        <div>
          <h3>小仙女的请假单</h3>
          <span>开始时间2019-08-01 20:00:00</span>
          <span>结束时间2019-08-01 20:00:00</span>
        </div>
        <img src="/static/images/ty.png" alt />
      </li>
      <li>
        <div>
          <h3>小仙女的请假单</h3>
          <span>开始时间2019-08-01 20:00:00</span>
          <span>结束时间2019-08-01 20:00:00</span>
        </div>
        <img src="/static/images/sh.png" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.qjddiv {
  width: 100vw;
  background-color: #fff;
}
.qjddiv ul li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 20rpx 0;
}
.qjddiv ul li img {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 40rpx;
}
.qjddiv ul li div {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20rpx;
}
.qjddiv ul li div span {
  font-size: 22rpx;
  line-height: 46rpx;
}
.qjddiv ul li div h3 {
  font-size: 26rpx;
  line-height: 46rpx;
}
</style>