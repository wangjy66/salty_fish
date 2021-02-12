<template>
<!-- 制作一个框架包裹slider -->
 <div style="width:70%;margin:10px auto;height:120px">
      <!-- 配置slider组件 -->
      <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- 直接使用slideritem slot -->
           <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
          <!-- 设置loading,可自定义 -->
          <div slot="loading">loading...</div>
      </slider>
 </div>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'// import slider components
export default {
   el: '#home',
   data () {
      return {
        //Image list
        someList:[],
        //Sliding configuration [obj]
        options: {
          currentPage: 0,
          infinite: 8,
          slidesToScroll: 1,
          loop: true
        }
      }
    },
  // style: {
  //   'background': '#7caabe',
  //   'width': '23.5%',
  //   'margin-right': '2%'
  // },
    components: {
      slider,
      slideritem
    },
    mounted () {
      let that = this
      setTimeout(function () {
        that.someList = [
          {
            html: 'slide1',
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            html: 'slide2',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            html: 'slide3',
            style: {
              'background': '#7baabe'
            }
          },
          {
            html: 'slide4',
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            html: 'slide5',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            html: 'slide6',
            style: {
              'background': '#7baabe'
            }
          },
          {
            html: 'slide7',
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            html: 'slide8',
            style: {
              'background': '#4bbfc3'
            }
          }
        ]
      }, 2000)
    },
    methods: {
      // Listener event
      slide (data) {
        console.log(data)
      },
      onTap (data) {
        console.log(data)
      },
      onInit (data) {
        console.log(data)
      }
    }
}
</script>


<style scoped>
</style>
