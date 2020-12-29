<template>
  <div>
    <!-- 这是轮播图区域 -->
    <swiper :swipeList="swipeList" :isFull="true"></swiper>

    <!-- 九宫格布局 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="../../images/menu1.png" alt />
          <!-- <span class="mui-icon mui-icon-home"></span> -->
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoList">
          <img src="../../images/menu2.png" alt />
          <!-- <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>-->
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <img src="../../images/menu3.png" alt />
          <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt />
          <!-- <span class="mui-icon mui-icon-location"></span> -->
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt />
          <!-- <span class="mui-icon mui-icon-search"></span> -->
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt />
          <!-- <span class="mui-icon mui-icon-phone"></span> -->
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper  from "../subcomponents/swiper.vue"
import axios from 'axios'
import Qs from 'qs'

export default {
  components: {
    swiper
  },
  data() {
    return {
      swipeList: [] //保存轮播图的数据
    };
  },
  created() {
    this.getSwipe();
  },
  methods: {
    // 获取轮播图数据
    getSwipe() {
      this.$http
        .get("https://njrzzk.com/app/a/app/tblImgCycle/getlist")
        .then(result => {
          // 这是成功的
          if (result.body.code == 0) {
            this.swipeList = result.body.rows.map(item => {
              item.mainImage =
                "https://njrzzk.com" + item.mainImage.replace("|", "");
              console.log(item.mainImage);
              return item;
            });
            console.log(this.swipeList);
          } else {
            // 失败
            Toast("加载轮播图失败");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
</style>
