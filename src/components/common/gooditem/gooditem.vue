<template>
    <div id="gooditem">
      <img v-for="item in goodsItem.imgurl" :src="item" alt="goodimg01.jpg">
      <div class="good-name">
        <a>{{goodsItem.goodname}}</a>
      </div>
      <div class="introduction">
        <p>{{goodsItem.introduction}}</p>
      </div>
      <div class="button">
        <button class="button" @click="AddGood">加入购物车</button>
        <button class="button" @click="BuyGood">立即购买</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'gooditem',
  data() {
    return {
        screenWidth: document.body.clientWidth,     // 屏幕宽
        screeHeight: document.body.clientHeight,    // 屏幕高
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    AddGood () {

      },
    BuyGood () {

    }
  },
  computed: {
    margin () {
      return this.screenWidth*0.4
    }
  }
}
</script>

<style scoped>
  .button {
    display: flex;
    background: inherit;
    color: deepskyblue;
    font-style: normal;
    border: none;
    bottom: 0;
    font-size: 2px;
  }
  #gooditem {
    width: 40%;
    padding: 1%;
    border-top : 2px solid var(--color-good-border); /*上框线*/
    border-bottom : 2px solid var(--color-good-border); /*下框线*/
    border-left : 2px solid var(--color-good-border); /*左框线*/
    border-right : 2px solid var(--color-good-border); /*右框线*/
    border-radius: 15px;
    background-color: rgba(244, 244, 244, 1);
    position: relative;
    margin: 3px 0 40px 5%;
  }
  #gooditem img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  #gooditem p {
    font-size: 10px
  }
  .good-name {
    line-height: 20px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 3%;
  }
  .introduction {
    position: center;
    left: 0;
    top: 230px;
    bottom: 49px;
    margin-left: 3%;
    margin-right: 3%;
    max-height: 100px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
