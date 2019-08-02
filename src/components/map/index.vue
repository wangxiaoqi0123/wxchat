<template>
  <div>
    <view>
      <map
        id="map"
        :longitude="longitude"
        :latitude="latitude"
        scale="16"
        show-location
        :markers="markers"
        style="width: 100%; height: 180px;"
      ></map>
    </view>
  </div>
</template>

<script>
import store from "@/pages/counter/store.js";
export default {
  data() {
    return {
      longitude: "",
      latitude: "",
      markers: [
        {
          iconPath: "/static/images/biaoji.png",
          id: "map",
          latitude: 0,
          longitude: 0,
          width: 15,
          height: 15
        }
      ]
    };
  },
  methods: {},
  created() {
    mpvue.getLocation({
      type: "wgs84",
      success: res => {
        const latitude = res.latitude;
        const longitude = res.longitude;
        console.log("latitude", latitude);
        console.log("longitude", longitude);
        // 获取精度维度 确定人在地图上的位置
        this.longitude = res.longitude;
        this.latitude = res.latitude;
      }
    });

    // 获取以打卡中心原点的经纬度
    this.markers[0].longitude = store.state.longitude;
    this.markers[0].latitude = store.state.latitude;
  }
};
</script>

<style scoped>
</style>