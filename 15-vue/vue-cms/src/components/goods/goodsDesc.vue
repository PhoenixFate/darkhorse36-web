<template>
    <div class="goodsdesc-container">
        <h3>{{info.title}}</h3>
        <div v-html="info.content" class="content">

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
            info:{

            }
        }
    },
    created(){
        this.getGoodsDesc();
    },
    methods:{
        getGoodsDesc(){
            this.$http.get("http://jd.itying.com/api/pcontent?id=59f6a2d27ac40b223cfdcf81").then(result=>{
                console.log(result)
                this.info=result.body.result;
                console.log(this.info)
            })
        }
    }
}
</script>

<style lang="scss" >
    .goodsdesc-container {
        padding:4px;
        h3 {
            font-size:16px;
            color:#226aff;
            text-align: center;
            margin:15px 0;
        }

        img {
            width: 100%;
        }
    }

</style>


