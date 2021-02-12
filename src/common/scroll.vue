<template>
<div ref="wrapper">
  <slot></slot>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "scroll",
//props中所涉及属性的作用自行查看better-scroll文档
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
  //初始化滚动组件
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.robeType,
        click: this.click,
      })
    },
    //所使用到的函数作用自行查看文档
    enable() {
      this.scroll && this.scroll.enable()
    },
    disable() {

      this.scroll && this.scroll.disable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
  //观察传入的数据，一旦数据发生变化，重新渲染滚动组件
    data() {
      setTimeout(() => {
        // this.scroll.refresh()
        this.refresh()
      }, 20);
    }
  }
}
</script>

<style scoped>

</style>
