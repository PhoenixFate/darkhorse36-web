<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea name id placeholder="请输入要评论的内容" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="item.id">
        <div class="cmt-title">第{{index+1}}楼&nbsp;&nbsp;用户: {{item.tblRegistrar.nickname}}&nbsp;&nbsp;发表时间: {{item.createDate | dateFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore()">加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
  props:[
    "id"
  ],

  data() {
    return {
      pageNum:1,
      comments:[],
      msg:'',
    };
  },
  created() {
    console.log(this.id)
    this.getCommentList()
  },

  methods: {
    getCommentList(){
      this.$http.get('https://njrzzk.com/app/a/app/tblComment/getPagelist?'+'pageNum='+this.pageNum+'&picTextId=8ef90f94a773456c949e4053161bf71d').then(result=>{
        console.log(result)
        if(result.body.code==0){
          this.comments=this.comments.concat(result.body.rows);
        }else{
          Toast("获取评论失败")
        }

      })
    },

    postComment(){
      // 校验msg是否为空
      if(this.msg.trim()==0){
        Toast("评论内容不能为空")
      }

      // postc参数：
      // url，
      // params ：{ }
      // 定义提交时候，表单的数据格式：{ emulateJSON:true}   因为全局设置了，所以第三个参数可以省略
      this.$http.post('https://njrzzk.com/app/a/app/tblComment/submitComment',
      {"content":this.msg.trim(),
      "picTextId":"8ef90f94a773456c949e4053161bf71d",
      "registarId":"5308175f2b304c4c9db949bc2ff51f4c"})
      .then(result=>{
        console.log(result)
        if(result.body.code==0){
          // this.comments.unshift(this.msg);
          // this.msg=''
          this.pageNum=1;
          this.comments=[];
          this.getCommentList()
        }
      })
    },

    getMore(){
      this.pageNum++;
      this.getCommentList();
    }
  }
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }

  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin:10px 0; 
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 36px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 36px;
        text-indent: 2em;
      }
    }
  }
}
</style>

