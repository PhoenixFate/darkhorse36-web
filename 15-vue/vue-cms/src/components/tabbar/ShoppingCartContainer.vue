<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="(item,index) in goodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="item.selected" @change="selectedChange(item.id,index)"></mt-switch>
            <img src="http://jd.itying.com/public\upload\iPrQ_-r43nGjFyxYXiMZWTM6.jpg" alt />
            <div class="info">
              <h1>这是一个最简单的卡片视图控件</h1>
              <p>
                <span class="price">￥2199</span>
                <number-box :count="item.count" :goodsId="item.id"></number-box>
                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品
              <span class="red">{{$store.getters.getCountAndAmount.count}}</span>件，总价 ￥
              <span class="red">{{$store.getters.getCountAndAmount.amount}}</span>元
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numberBox from "../subcomponents/shopcar-numberBox.vue";
export default {
  components: {
    numberBox
  },
  data() {
    return {
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.goodsList = this.$store.state.car;
      console.log(this.goodsList);
    },
    remove(id, index) {
      this.goodsList.splice(index, 1);
    },

    selectedChange(id,index){
        this.goodsList[index].selected=!this.goodsList[index].selected;
        this.$store.commit("changeSelected",id);
    }
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;

  .goods-list {
    padding: 0;
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }

    img {
      width: 60px;
      height: 60px;
      margin:0 5px;
    }

    h1 {
      font-size: 13px;
      margin: 0;
    }

    p {
      margin: 0;
    }

    .info {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px 0;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }

  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
