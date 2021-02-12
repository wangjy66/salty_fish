<template>
  <div>
    <button class="outer-button">{{words}}</button>
  </div>
</template>

<script>
    export default {
        name: "MineButton",
    props: {
    words: {
      type: String,
      default() {
        return '按钮'
      }
    }
  }
    }
</script>

<style scoped>
.outer-button {
  border:none;
  width:auto;  height:auto;
  margin: 3px;
  top: 2px;
  bottom: 2px;
  line-height: 20px;
  color: white;
  border-radius: 5px;
  font-style: normal;
  font-size: 13px;
  font-family:'Adobe 黑体 Std', sans-serif;
  box-shadow: 3px 3px 3px rgba(111,91,91,0.13);
  background:linear-gradient(to bottom, rgba(111, 91, 91, 0.36),rgba(111, 91, 91, 0.8));/*设置按钮为渐变颜色*/
}
</style>
