<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">
            {{newsInfo.title}}
        </h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>
                发表时间：{{newsInfo.createDate}}
            </span>
            <span>
                点击：{{newsInfo.assortment}} 次
            </span>
        </p>

        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsInfo.description">

        </div>
        <!-- 评论区域 -->
        <comment-box :id="id">

        </comment-box>
    </div>
</template>

<script>
// 1. 导入comment子组件
import comment from '../subcomponents/comment.vue'

export default {
    // 用来注册子组件
    components:{
        'comment-box':comment
    },

    data(){
        return {
            id:this.$route.params.id,  // 将url地址中传递过来的id挂载到data上，方便以后调用
            newsInfo:{
                title:"",

            }
        }
    },
    created(){
        console.log(this.$route.params.id);
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get("https://njrzzk.com/app/a/app/tblInformation/getDetail?id="+this.id).then(result=>{
                console.log(result)
                if(result.body.code==0){
                    // success
                    this.newsInfo=result.body.rows[0];
                }
            })
        }
    }
}
</script>
<style lang="scss">
    .newsinfo-container {
        padding:0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px auto;
            color:red;
        }

        .subtitle {
            font-size: 13px;
            color:#226aff;
            display: flex;
            justify-content: space-between;
        }

        .content {
            img {
                width: 100%;
                max-height: 500px;
            }
        }
    }
</style>



