<template>
  <div>
    <!--  顶部滑动条组件 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', index==0?'mui-active':'']"
            v-for="(item,index) in cates"
            :key="item._id"
            @click.prevent="getPhotoListByCateId(item._id)"
            href="#"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in this.imgList" :key="item._id" :to="'/home/photoInfo/'+item._id" tag="li">
        <img v-lazy="'http://jd.itying.com/'+item.pic" />
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.title}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 1. 导入mui的js
import mui from "../../lib/mui/js/mui.js";
export default {
  data() {
    return {
      cates: [],
      imgList: []
    };
  },
  //   当组件中的Dom结构被渲染好，并被放到页面中后，会执行mounted
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.005 // flick 减速系数
    });
  },
  created() {
    this.getCates();
  },
  methods: {
    getCates() {
      this.$http
        .get("http://jd.itying.com/api/pcate?pid=59f1e1ada1da8b15d42234e9")
        .then(result => {
          console.log(result);
          if (result.body.result) {
            for (let i in result.body.result) {
              this.cates.push(result.body.result[i]);
            }
          }
        });
    },
    showContent() {},

    getPhotoListByCateId(cid) {
      console.log(cid);
      // 根据分类id，获取图片列表
      this.$http
        .get("http://jd.itying.com/api/plist?cid=" + cid + "&page=1")
        .then(result => {
          console.log(result);
          this.imgList = result.body.result;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
// 去除chrome警告：[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  padding: 10px;
  margin: 0;
  padding-bottom: 0;
  li {
    position: relative;
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 8px #999;
    img {
      height: 300px;
      width: 100%;
      vertical-align: top;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      max-height: 84px;
      width: 100%;
      position: absolute;
      bottom: 0;
      color:#fff;
      background-color: rgba(0,0,0,0.5);
      text-align: left;
      .info-title{
        font-size: 14px;
      }
      .info-body {
        font-size: 12px;
      }
    }
  }
}
</style>


