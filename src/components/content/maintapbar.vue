<template>
    <TapBar>
    <tap-bar-item path="/home" ActiveColor="black" deActiveColor="white">
      <img slot="item-icon" src="../../assets/img/tapbar/HomeWhite.svg" alt="" class="tap-bar-img">
      <img slot="item-icon-black" src="../../assets/img/tapbar/HomeBlack.svg" alt="" class="tap-bar-img">
      <div slot="item-text">首页</div>
    </tap-bar-item><!--active颜色设置-->
    <tap-bar-item path="/upload" ActiveColor="black" deActiveColor="white">
      <img slot="item-icon" src="../../assets/img/tapbar/UploadWhite.svg" alt="" class="tap-bar-img">
      <img slot="item-icon-black" src="../../assets/img/tapbar/UploadBlack.svg" alt="" class="tap-bar-img">
      <div slot="item-text">上传闲置</div>
    </tap-bar-item>
    <tap-bar-item path="/cargo" ActiveColor="black" deActiveColor="white">
      <img slot="item-icon" src="../../assets/img/tapbar/CargoWhite.svg" alt="" class="tap-bar-img">
      <img slot="item-icon-black" src="../../assets/img/tapbar/CargoBlack.svg" alt="" class="tap-bar-img">
      <div slot="item-text">购物车</div>
    </tap-bar-item>
    <tap-bar-item :path="'/mine/'+goodId" ActiveColor="black" deActiveColor="white">
      <img slot="item-icon" src="../../assets/img/tapbar/MineWhite.svg" alt="" class="tap-bar-img">
      <img slot="item-icon-black" src="../../assets/img/tapbar/MineBlack.svg" alt="" class="tap-bar-img">
      <div slot="item-text">我的</div>
    </tap-bar-item>
  </TapBar>
</template>

<script>
import TapBar from '../common/tapbar/tapbar'
import TapBarItem from '../common/tapbar/tapbaritem'
export default {
  name: 'main-tap-bar',
  data () {
    return {
      goodId: '0001',
      goodName: '咸鱼',
      introduction: '一段介绍',
      userId: 'wjy',
      imgURL: 'http://www.baidu.com/logo.png'
    }
  },
  components: {
    TapBar,
    TapBarItem
  },
  methods: {
    // userClick () {
    //   this.$router.push('/mine/' + this.userId) // 可以push对象，有path和query：{}还可以replace
    // }
  }
}
</script>

<style scoped>
.tap-bar-img {
    vertical-align: middle;
    display: inline-block;
    height: 50%;
    text-align: center;
    /*margin-bottom: 2px ;*/
  }
</style>
