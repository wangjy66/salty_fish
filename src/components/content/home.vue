<template>
<div id="home">
  <Header>
        <div slot="HeaderMiddle">上蝌闲鱼</div>
  </Header>
<!--  <h2>This is home 首页</h2>-->

  <Slider></Slider>
  <classify-tip class="slider-stick" :tips="['学习','生活','兴趣','医药','电子']"></classify-tip>
<!--  <router-link :to="{path: '/good', query:{goodName,goodId}}" tag="button" >商品</router-link>-->
  <router-view></router-view>
<!--  <scroll class="content"-->
<!--          ref="scroll" :probe-type="3"-->
<!--          @scroll="contentScroll"-->
<!--          :pull-up-load="true">-->
  <div ref="wrapper" class="wrapper">
    <div class="content">
<!--      <good-item>-->
<!--        <img slot="img" src="../../assets/img/goodimg/goodimg01.jpg" alt="goodimg01.jpg">-->
<!--        <a slot="GoodName">商品1</a>-->
<!--        <p slot="introduction">-->
<!--          一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍-->
<!--        </p>-->
<!--      </good-item>-->
      <goods :goods="goods['study'].list"></goods>
    </div>
  </div>
<!--    </scroll>-->
</div>
</template>

<script>
import Header from '../../components/common/header/header'
import Slider from '../../components/common/slider/slider'
import ClassifyTip from '../../components/common/classifybar/classifytip'

import Scroll from '../../components/common/scroll/Scroll'

import Goods from '../../components/common/gooditem/goods'
export default {
  name: 'home',

  created() {
  },
  data () {
    return {
      goods: {
        'study': {
          page:0,
          list:[
            {'goodid': 1000,
              'goodname': '咸鱼',
              'price': 10,
              'degree': 99,
              'pay': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              'imgurl': ['https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'],
              'introduction': '一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍'
            },
            {'goodid': 1000,
              'goodname': '咸鱼',
              'price': 10,
              'degree': 99,
              'pay': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              'imgurl': ['https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'],
              'introduction': '一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍'
            },
            {'goodid': 1000,
              'goodname': '咸鱼',
              'price': 10,
              'degree': 99,
              'pay': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              'imgurl': ['https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'],
              'introduction': '一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍'
            },
            {'goodid': 1000,
              'goodname': '咸鱼',
              'price': 10,
              'degree': 99,
              'pay': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              'imgurl': ['https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'],
              'introduction': '一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍'
            },
            {'goodid': 1000,
              'goodname': '咸鱼',
              'price': 10,
              'degree': 99,
              'pay': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              'imgurl': ['https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'],
              'introduction': '一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍'
            },
            {'goodid': 1000,
              'goodname': '咸鱼',
              'price': 10,
              'degree': 99,
              'pay': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              'imgurl': ['https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'],
              'introduction': '一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍'
            },
            {'goodid': 1000,
              'goodname': '咸鱼',
              'price': 10,
              'degree': 99,
              'pay': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              'imgurl': ['https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'],
              'introduction': '一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍'
            },
            {'goodid': 1000,
              'goodname': '咸鱼',
              'price': 10,
              'degree': 99,
              'pay': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              'imgurl': ['https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'],
              'introduction': '一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍一段介绍'
            }
          ]},
        'life': {page:0, list:[]},
        'hobby': {page:0, list:[]},
        'medicine': {page:0, list:[]},
        'equipments': {page:0, list:[]},
      }
    }
  },
  components: {
    Header,
    Slider,
    ClassifyTip,
    Scroll,
    Goods
  },
  mounted() {

  }
  // created () {
  //   document.title = 'home'
  // }// 用导航守卫和生命周期函数来记录离开前子路由的active状态
  // activated和deactivated函数只有在keepalive时会调用
}
</script>

<style scoped>
  #home {
    background-color: #F4F5F4;
  }
  .slider-stick {
    position: sticky;
    top: 49px
  }
  .wrapper {
    position: absolute;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    top: 220px;
    bottom: 49px;
    margin-bottom: 49px;
    max-height: 65%;
    overflow: auto; /*控制父级，形成滚动条*/
  }
  .content {
    height:100%;       /*pc和手机模式不一样，pc100%，手机90%*/
    /*bottom: 49px;*/
    /*margin-bottom: 50px;*/
    background-color: aqua;
    overflow: hidden;
    overflow-y: scroll;
    /*display: inline;*/
    box-shadow:0 1px 1px rgba(111, 91, 91, 0.5);
  }
</style>
