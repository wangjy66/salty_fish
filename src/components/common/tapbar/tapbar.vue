<template>
    <div id="tap-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'tap-bar'
}
</script>

<style scoped>
  @import "../../../assets/css/base.css";
  #tap-bar {
    display: flex;
    background-color:var(--color-text);
    position: fixed;
    height: 49px;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
