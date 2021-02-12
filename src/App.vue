<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/upload" tag="button">上传闲置</router-link>-->
<!--    <router-link to="/cargo" tag="button">购物车</router-link>-->
<!--    <router-link :to="'/mine/'+userId" tag="button">我的</router-link>-->
    <keepalive>
      <router-view/> <!--不会每次跳转都销毁-->
    </keepalive>
    <main-tap-bar></main-tap-bar>
<!--&lt;!&ndash;<keepalive include="" exclude="home,upload逗号后没有空格"></keepalive>控制哪部分组件会被销毁或者include&ndash;&gt;-->
<!--    <img src="./assets/img/saltyfish.jpg" alt="sorry,saltyfish" @click="userClick">-->
  </div>
</template>

<script>
import MainTapBar from './components/content/maintapbar'
export default {
  name: 'app',
  components: {
    MainTapBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/normalize.css";
  #app {
    background-color: var(--color-background);
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    position: fixed;
  }
</style>
