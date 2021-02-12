<template>
<div class="tap-bar-item" @click="itemClick">
  <slot v-if="isActive" name="item-icon-black"></slot>
  <slot v-else name="item-icon"></slot>
  <div :style="activeStyle">
  <slot name="item-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'tap-bar-item',
  props: {
    path: String,
    ActiveColor: {
      type: String,
      default: 'black'
    },
    deActiveColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.ActiveColor } : { color: this.deActiveColor }
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tap-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    border: 0px none;
    vertical-align: middle;
    font-family:'Adobe 黑体 Std R', 'Adobe 黑体 Std', sans-serif;
    line-height: 22px;
    font-style:normal;
    margin-top: 4px;
    margin-bottom: 4px;
  }

</style>
