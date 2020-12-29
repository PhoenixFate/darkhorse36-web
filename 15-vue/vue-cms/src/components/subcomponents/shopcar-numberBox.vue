 <template>
 <!-- 问题：我们不知道什么时候获取到max的值 -->
 <!-- watch：有监听作用，可以监听max的变化 -->
 <!-- 使用watch属性监听，来监听父组件传递过来的max值，不管watch被触发几次，但最后一次触发肯定是有效的max数值 -->
  <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="count"
      @change="countChanged()"
      ref="number"
      readonly
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

  <!-- 分析：子组件什么时候把数据传递给父组件 -->
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  data() {
    return {
    };
  },
  mounted() {
    mui(".mui-numbox").numbox();

  },
  methods: {
    countChanged() {
        console.log(this.$refs.number.value)
        // 每当数量值改变，则立即把最新的数量同步到购物车的store中，覆盖之前的数量值
        this.$store.commit("updateGoodsInfo",{id:this.goodsId,count:this.$refs.number.value})
    }
  },
  props:[
    "count",
    "goodsId"
  ]
};
</script>
<style lang="scss" scoped>
</style>

