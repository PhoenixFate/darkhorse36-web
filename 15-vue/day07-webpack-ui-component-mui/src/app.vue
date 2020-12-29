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










    	<h5>有底色按钮：</h5>
				<button type="button" class="mui-btn">
					默认
				</button>
				<div class="mui-btn mui-btn-primary">
					蓝色
				</div>
				<span class="mui-btn mui-btn-success">
					绿色
				</span>
				<button type="button" class="mui-btn mui-btn-warning">
					黄色
				</button>
				<button type="button" class="mui-btn mui-btn-danger">
					红色
				</button>
				<button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>
		
				<h5 style="margin-top: 10px;">无底色按钮（使用父元素的背景色）：</h5>	
				<button type="button" class="mui-btn mui-btn-outlined">
					默认
				</button>
				<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined">
					操作
				</button>
				<button type="button" class="mui-btn mui-btn-success mui-btn-outlined">
					成功
				</button>
				<button type="button" class="mui-btn mui-btn-warning mui-btn-outlined">
					警告
				</button>
				<button type="button" class="mui-btn mui-btn-danger mui-btn-outlined">
					危险
				</button>
				<button type="button" class="mui-btn mui-btn-royal mui-btn-outlined">
					高贵
				</button>
				<h5 style="margin-top: 15px;">链接按钮：</h5>	
				<button type="button" class="mui-btn mui-btn-link">
					添加
				</button>
				<h5 style="margin-top: 10px;">默认input标签样式：</h5>	
				<input type="button" value="type=button" />
				<input type="reset" value="type=reset" />
				<input type="submit" value="type=submit" />
				<h5 style="margin-top: 10px;">默认button标签样式：</h5>	
				<button type="button" >按钮</button>
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
