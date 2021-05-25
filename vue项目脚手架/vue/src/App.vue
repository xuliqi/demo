<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
html,body {
  height: 100%;
}
#app {
  height: 100%;
  background-color: #F3F5F7;
}
/*清除浮动代码*/
.clearfix:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
  line-height: 0
}
.clearfix {
  zoom: 1;
}
.lt {
  float: left;
}
.rt {
  float: right;
}
</style>
