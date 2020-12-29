<template>
  <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button>

    <div>禁用按钮：</div>
    <mt-button disabled>disabled</mt-button>
    <div>幽灵按钮：</div>
    <mt-button plain>plain</mt-button>
    <div>带图标：</div>
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">更多</mt-button>

    <div>Toast:</div>
    <mt-button size="large" @click="show">Toast基本用法：</mt-button>
    <mt-button size="large" @click="show2">Toast传入一个基本对象</mt-button>
    <mt-button size="large" @click="show3">Toast 文字上方传入一个icon</mt-button>
    <div class="glyphicon glyphicon-heart"></div>
    <span class="glyphicon glyphicon-music"></span>
    <h1>这是app组件</h1>
    <router-link to="account">account</router-link>
    <router-link to="goodsList">goodsList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// 按需导入Toast组件
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      toastInstance:null
    };
  },
  created(){
    this.getList();
  },
  methods: {
    getList(){
      // 模拟获取调用接口的方法:
      // 在获取数据之前，立即弹出Toast提示用户，正在加载数据
      this.show3();
      setTimeout(()=>{
        // 当3秒之后，数据得到之后，移除Toast
        this.toastInstance.close();
      },3000)
    },
    show() {
      Toast("提示信息");
    },
    show2() {
      Toast({
        message: "提示",
        position: "bottom",
        duration: 1000
      });
    },
    show3() {
      this.toastInstance=Toast({
        message: "操作成功",
        position:"top",
        duration:-1,
        iconClass: "glyphicon glyphicon-heart",
        ClassName:"myToast"  // 自定义Toast的的样式
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  
</style>
