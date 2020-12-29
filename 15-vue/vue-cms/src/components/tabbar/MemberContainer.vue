<template>
  <div>
    <h1>MemberContainer</h1>
    <vue-preview :slides="imgList" @close="handleClose" class="thumbs"></vue-preview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  created(){
      this.getThumbs()
  },
  methods: {
         handleClose() {
      console.log("close event");
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

<style lang="scss" scoped>
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
</style>