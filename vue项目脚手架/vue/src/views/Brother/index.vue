<template>
  <Scroll :on-reach-bottom="handleReachBottom">
    <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0">
      Content {{ item }}
    </Card>
  </Scroll>
</template>
<script>
import { Card, Scroll } from 'view-design'
  export default {
    data() {
      return {
        list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    components:{
      Card,
      Scroll
    },
    methods: {
      handleReachBottom() {
        return new Promise(resolve => {
          setTimeout(() => {
            const last = this.list1[this.list1.length - 1];
            for (let i = 1; i < 11; i++) {
              this.list1.push(last + i);
            }
            resolve();
          }, 2000);
        });
      }
    },
    created(){
      
    }
  }
</script>
