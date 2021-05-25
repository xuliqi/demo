<template>
  <div class="demo">
    <p>{{message}}</p>
    <Button type="info" @click="toBrother" class="mt">跳转页面</Button>
  </div>
</template>

<script>
import {Button,Scroll} from 'view-design'
import Brother from '../Brother/index.vue'
import {mapState,mapFetters} from "vuex"
export default {
  data() {
    return {
      message:'我是页面数据'
    }
  },
  components: {
    Button,
    Brother
  },
  methods:{
    toBrother(){
      this.$router.push({path:'/brother'})
    }
  },
  watch:{
    $route(to,from){
      deep:true,
      console.log(to,'to')
      console.log(from,'from')
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped lang="less">
  .demo{
    .mod{
      margin:10px 0;
    }
    .mt{
      margin-top:20px;
    }
  }

</style>
