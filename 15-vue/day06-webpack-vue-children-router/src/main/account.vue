<template>
    <div>
        <h1>这是account组件</h1>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
/* 
    普通的style标签只支持普通的样式，如果想要启用scss或less，需要设置lang属性
 */
// 只要style标签，是在.vue中定义的，那么推荐style都开启scpoed属性
    body {
        div {
            font-style:italic;
        }
    }
</style>
