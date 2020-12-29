<template>
  <div class="goods-list" >

      <!-- 老的方式 -->
    <!-- <router-link class="goods-item" v-for="item in goodsList" :key="item.pic" :to="'/home/goodsInfo/'+item.cid" tab="div">
      <img
        :src="item.pic"
        alt
      />
      <h1 class="title">{{item.title}}</h1>
      <div class="goods-info">
        <p class="price">
          <span class="now">￥{{item.old_price}}</span>
          <span class="old">￥{{item.price}}</span>
        </p>

        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </router-link> -->

    <!-- 新的方式 -->
    <!-- 在网页中有两种页面跳转方式： -->
    <!-- 方式1：使用a标签的形式；叫做标签跳转 -->
    <!-- 方式2：使用window.location.href=""的形式；叫做编程式导航 -->
        <div class="goods-item" v-for="(item,index) in goodsList" :key="item.pic" @click="toDetail(item.cid,index)">
      <img
        :src="item.pic"
        alt
      />
      <h1 class="title">{{item.title}}</h1>
      <div class="goods-info">
        <p class="price">
          <span class="now">￥{{item.old_price}}</span>
          <span class="old">￥{{item.price}}</span>
        </p>

        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getGoodsList()">加载更多</mt-button>
  </div>



</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    // 获取商品列表
    getGoodsList() {
      this.$http
        .get(
          "http://jd.itying.com/api/plist?cid=59f1e4919bfd8f3bd030eed6&page=" +
            this.pageIndex
        )
        .then(result => {
          console.log(result);
          this.goodsList=this.goodsList.concat(result.body.result.map(item=>{
              item.pic="http://jd.itying.com/"+item.pic;
              return item;
          }));
          console.log(this.goodsList)
          this.pageIndex++;
        });
    },

    // 使用js进行路由导航
    toDetail(id,index){
        // this.$route: 路由参数对象；所有路由中的参数，params,query 都属于它

        // this.$router: 路由导航对象；用它可以进行路由的前进和后退、跳转到新的url地址

        // 1. 最简单的写法
        // this.$router.push('/home/goodsInfo/'+id)
        // 2. 传递一个对象
        // this.$router.push({path:'/home/goodsInfo/'+id});

        // 3. 传递命名从路由
        this.$router.push({name:"goodsInfo" ,params:{id,index}})
    }
  }
};
</script>

<style lang="scss" scope>
.goods-list {
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 230px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .goods-info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
}
</style>


