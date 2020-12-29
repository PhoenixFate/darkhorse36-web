<template>
  <div class="goodsInfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card" >
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swipeList="swipeList" :isFull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="pirc">
            市场价：
            <del>￥{{goodsInfo.old_price}}</del>&nbsp;&nbsp;销售价：
            <span class="now-price">￥{{goodsInfo.price}}</span>
          </p>
          <p>
            购买数量：
            <number-box @getCount="getSelectedCount" :max="goodsInfo.salecount"></number-box>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar()">加入购物车</mt-button>

            <!-- 分析：如何实现加入购物车的时候，拿到选择的数量 -->
            <!-- 1. 经过分析发现：按钮属于goodsInfo页面，数字属于number-box组件 -->

            <!-- 2. 由于涉及到了父子组件的嵌套，所以无法直接在goodsInfo页面中获取到选中的商品数量 -->

            <!-- 3. 解决问题；涉及到了子组件向父组件传值（事件调用机制） -->
            <!-- 4. 事件调用本质：父向子传递方法，子调用方法，同时把数据当做参数传递给这个方法 -->
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{goodsInfo.cid}}</p>
          <p>库存情况:{{goodsInfo.salecount}}件</p>
          <p>上架时间:</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="toDesc()">商品介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="toComment()">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
// 导入轮播图组件
import swiper from "../subcomponents/swiper.vue";
// 导入数字选择框组件
import numberBox from "../subcomponents/goodsInfo-numberBox.vue";

export default {
  components: {
    swiper,
    numberBox
  },
  data() {
    return {
      id: this.$route.params.id,
      index:this.$route.params.index,
      swipeList: [],
      goodsInfo: {},
      ballFlag: false, //控制小球隐藏和显示的标识符
      selectedCount:1,   // 保存用户选中的商品数据，默认认为用户买一个
    }; 
  },
  created() {
    this.getSliders();

  },
  mounted(){
    this.getGoodsInfo();
  },

  methods: {
    beforeEnter(el) {
      // 0,0 点就是该元素的初始位置
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth; // 解决没有动画的bug

      // 小球动画优化思路：
      // 1. 先分析导致动画不准确的本质原因：我们把小球最终位移到的位置，已经局限在了某一分辨率下的滚动条未滚动的情况下
      // 2. 只要分辨率不一样或者滚动条有一定的滚动距离之后，问题就出现了
      // 3. 结论：不能把位移的横纵坐标直接写死了，应该根据不同情况，动态计算坐标值
      // 4. 经过分析，解决方法：先得到徽标的 横纵坐标，再得到小球的横纵坐标，然后让y值求差，x值求差，得到的结果就是横纵坐标要位移的坐标
      // 5. 如何获取徽标和小球的位置？  domObject.getBoundingClientRect()


      // 获取小球在页面中的位置：
      const ballPosition=this.$refs.ball.getBoundingClientRect();
      const badgePosition=document.getElementById('badge').getBoundingClientRect();

      console.log(ballPosition);
      console.log(badgePosition)

      const xDistance=badgePosition.left-ballPosition.left;
      const yDistance=badgePosition.top-ballPosition.top;

      el.style.transform = `translate(${xDistance}px,${yDistance}px)`;
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,0.68)";
      done()
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },

    addToShopCar() {
      // 添加商品到购物车
      this.ballFlag = !this.ballFlag;
      // 拼接出一个，要保存到store中car数组里的商品信息对象
      var goodsInfo={id:this.index,count:parseInt(this.selectedCount),price:this.goodsInfo.price,selected:true}

      // 调用store中的mutations来将商品加入购物车
      this.$store.commit('addToCar',goodsInfo)
    },


    getSelectedCount(count){
      // 当子组件把选中的数量传递给父组件的时候，把选中的值保存到data上，
      this.selectedCount=count;
      console.log(this.selectedCount)
    },

    toDesc() {
      this.$router.push({ name: "goodsDesc", params: { id: this.id } });
    },
    toComment() {
      this.$router.push({ name: "goodsComment", params: { id: this.id } });
    },

    getSliders() {
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
    },
    getGoodsInfo() {
      const url = "http://jd.itying.com/api/pcontent?id=" + this.id;
      console.log(url)
      this.$http
        .get("http://jd.itying.com/api/pcontent",{params:{id:this.id}})
        .then(result => {
          console.log(result);
          this.goodsInfo = result.body.result;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.goodsInfo-container {
  background-color: #eee;
  overflow: hidden;

  .ball {
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: red;
    z-index: 999;
    top: 392px;
    left: 148px;
  }

  .now-price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>


