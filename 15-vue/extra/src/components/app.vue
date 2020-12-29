<template>
  <div>
    {{data}}
    <input type="button" value="post" @click="comment()" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "59f6a2d27ac40b223cfdcf81",
      data: []
    };
  },
  created() {
    this.$axios
      .get("https://njrzzk.com/app/a/app/tblImgCycle/getlist")
      .then(result => {
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });

    let id = "59f6a2d27ac40b223cfdcf81";
    this.$axios
      .get("http://jd.itying.com/api/pcontent?id=" + this.id)
      .then(result => {
        console.log(result.data);
      });
  },

  methods: {
    comment() {
      let postParams = {
        content: "axios",
        picTextId: "8ef90f94a773456c949e4053161bf71d",
        registarId: "5308175f2b304c4c9db949bc2ff51f4c"
      };
      this.$axios.defaults.timeout = 5000; //响应时间
      this.$axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded;charset=UTF-8"; //配置请求头

      this.$axios.defaults.baseURL = '';   //配置接口地址

      let param = new URLSearchParams()
      param.append('content', 'axios')
      param.append('picTextId', '8ef90f94a773456c949e4053161bf71d')
      param.append('registarId','5308175f2b304c4c9db949bc2ff51f4c')


      //this.$axios.defaults.headers.post["Content-type"] = "application/json"
      this.$axios
        .post(
          "https://njrzzk.com/app/a/app/tblComment/submitComment",
          param
        )
        .then(result => {
          console.log("post");
          console.log(result.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.h {
  height: 100px;
  background-color: yellowgreen;
}
.b {
  height: 100px;
  background-color: skyblue;
}
.f {
  height: 100px;
  background-color: hotpink;
}
</style>