<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.mainImage" />
          <div class="mui-media-body">
            <h3>{{item.title}}</h3>

            <p class="mui-ellipsis">
                <span>发表时间：{{item.createDate | dateFormat}}</span>
                <span>点击：{{item.assortment}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            // vue-resouce的请求url最前面不能带'/'
            this.$http.get('https://njrzzk.com/app/a/app/tblInformation/getPagelist?pageNum=1')
            .then(result=>{
                console.log(result)
                if(result.body.code==0){
                    // 请求成功
                    console.log(result.body.rows)
                    this.newsList=result.body.rows.map(item=>{
                        item.mainImage ="https://njrzzk.com" + item.mainImage.replace("|", "");
                        return item;
                    });
                }else {
                    Toast("获取新闻列表失败")
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h3 {
                font-size: 14px
            }
            .mui-ellipsis {
                font-size: 12px;
                color:#226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>

