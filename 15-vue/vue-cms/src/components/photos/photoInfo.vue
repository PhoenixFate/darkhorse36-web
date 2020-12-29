<template>
  <div class="photoinfo-container">
    <h3>{{photoInfo.sub_title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoInfo.old_price}}</span>
      <span>点击次数：{{photoInfo.price}}次</span>
    </p>
    <hr />

    <!-- 缩略图区域 -->
    <!-- <div class="thumbs">
      <img
        class="preview-img"
        v-for="item in imgList"
        height="100"
        :key="item.cid"
        :src="item.src"
        @click="this.$preview.open(index,imglist)"
      />
    </div>-->

    <vue-preview :slides="imgList" @close="handleClose" class="thumbs"></vue-preview>

    <!-- 图片内容区域 -->
    <div class="photoinfo-content" v-html="photoInfo.content"></div>

    <!-- 评论子组件 -->
    <comment :id="id"></comment>
  </div>
</template>
<script>
import comments from "../subcomponents/comment.vue";
export default  {
  components: {
    comment: comments
  },

  data() {
    return {
      id: this.$route.params.id, // 从路由中获取到的id
      photoInfo: {}, // 图片详情

      imgList: [],

      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },

  methods: {
    handleClose() {
      console.log("close event");
    },

    getPhotoInfo() {
      //获取图片的详情
      this.$http
        .get("http://jd.itying.com/api/pcontent?id=" + this.id)
        .then(result => {
          if (result.body.result.status == 0) {
            this.photoInfo = result.body.result;
            console.log(this.photoInfo);
          }
          console.log(result);
        });
    },

    getThumbs() {
      // 获取缩略图
      this.$http
        .get("http://jd.itying.com/api/plist?is_best=1")
        .then(result => {
          console.log(result);
          // 循环每个图片数据，补全图片的宽和高
          // 把数据保存到this.list
          this.imgList = result.body.result.map(item => {
            item.src = "http://jd.itying.com/" + item.pic;
            item.msrc = item.src;
            item.w = 600;
            item.h = 400;
            return item;
          });
          console.log(this.imgList);
        });
    }
  }
};
</script>

<style lang="scss">
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 13px;
  }

  .photoinfo-content {
    font-size: 13px;
    line-height: 30px;

    img {
      width: 100%;
      max-height: 400px;
    }
  }

  .thumbs {
    .my-gallery {
      //deep深层作用选择器
      display: flex;
      flex-wrap: wrap; //默认换行
      figure {
        width: 30%;
        margin: 5px;
        img {
          width: 100%;
          box-shadow: 0 0 8px #999;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>


