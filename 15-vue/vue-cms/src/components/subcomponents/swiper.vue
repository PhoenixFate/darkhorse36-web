<template>
    <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for循环的话，一定要使用:key -->
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.mainImage" alt :class="{'img-full':isFull}" />
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:[
        "swipeList",
        "isFull"
    ]
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
      text-align: center;

    // sacc语法：
    &:nth-child(1) {
      color: red;
    }
    &:nth-child(2) {
      color: yellow;
    }
    &:nth-child(3) {
      color: yellowgreen;
    }

    img {
      height: 100%;
    }

    .img-full {
        width:100%
    }
  }
}
</style>



