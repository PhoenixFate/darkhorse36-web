 <template>
 <!-- 问题：我们不知道什么时候获取到max的值 -->
 <!-- watch：有监听作用，可以监听max的变化 -->
 <!-- 使用watch属性监听，来监听父组件传递过来的max值，不管watch被触发几次，但最后一次触发肯定是有效的max数值 -->
  <div class="mui-numbox" data-numbox-min="1" >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="countChanged()"
      ref="number"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

  <!-- 分析：子组件什么时候把数据传递给父组件 -->
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  data() {
    return {};
  },
  mounted() {
    mui(".mui-numbox").numbox();
    console.log(this.max)
  },
  methods: {
    countChanged() {
      // 每当文本框的数据被修改的时候，立即把最新的数据，通过事件调用传递给父组件
      //console.log(this.$refs.number.value)
      this.$emit("getCount", this.$refs.number.value);
       console.log(this.max);
    }
  },
  props: ["max"],
  watch:{
    // 属性监听
    max:function(newValue,oldValue){
      // 使用js 的api设置numbox的最大值
      mui(".mui-numbox").numbox().setOption('max',newValue);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

