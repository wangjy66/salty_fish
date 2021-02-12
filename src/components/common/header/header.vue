<template>
  <div class="header-background">
    <div class="LeftItem"><slot name="HeaderLeft"></slot></div>
    <div class="MiddleItem"><slot name="HeaderMiddle"></slot></div>
    <div class="RightItem"><slot name="HeaderRight"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
  @import "../../../assets/css/base.css";
  .header-background {
    display: flex;
    position: center;
    left:0px;
    top:0px;
    right: 0px;
    line-height: 49px;
    background-color: var(--color-text);
    border: 0px none;
    box-shadow:0 1px 1px var(--color-text);
  }
  .LeftItem, .RightItem {
    width: 60px;
  }
  .MiddleItem {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family:'汉仪南宫体简', sans-serif;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size:20px;
    color: var(--color-high-text);
    text-align: center;
    border-width:0px;
    word-wrap:break-word;
    text-transform:none;
  }
</style>
