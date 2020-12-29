<template>
    <div>
        <comment :id="$route.params.id"></comment>
    </div>
</template>
<script>
import comment from "../subcomponents/comment.vue"
export default {
    components:{
        comment
    },
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>

</style>
