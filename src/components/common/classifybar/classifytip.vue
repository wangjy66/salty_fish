<template>
  <div class="classify-bar">
    <div v-for="(item,index) in tips"
         class="classify-bar-item"
         :class="{active: index === currentIndex}"
         @click="tipClick(index)"><!--遍历传入的数据、绑定小tip样式、活跃样式绑定、记录被点击标签-->
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "classify-tip",
      props: {
        tips: {
          type: Array,        // 需要传入的标签数量，内容为String的Array
          default() {
            return []
          }
        }
      },
      data() {
        return {
          currentIndex: 0     // 当前处于哪个标签下
        }
      },
      methods: {
        tipClick(index) {         // 标签被点击后
          // console.log('tip is clicked');
          this.currentIndex = index;
        }
      }
    }
</script>

<style scoped>
  .classify-bar {         /*整个横条的样式*/
    display: flex;
    background-color:rgba(111, 91, 91, 0.2);
    text-align: center;
    position: fixed;
    line-height: 22px;
    left: 0;
    right: 0;
    vertical-align: middle;
    font-style:normal;
    margin-top: 4px;
    margin-bottom: 4px;
    box-shadow:0 1px 1px rgba(111, 91, 91, 0.5);
    }
  .classify-bar-item {        /*每个文字标签的样式*/
    flex: 1;
    color: rgba(111, 91, 91, 0.8);
    font-style: normal;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }
  .classify-bar-item span {   /*分类标签下面的横线比标签文字两边宽多少*/
    padding: 3px;
  }
  .active {         /*标签点击后活跃样式设置*/
    color: white;
  }
  .active span {    /*分类标签下面的横线*/
    border-bottom: 5px solid white;
  }
</style>
