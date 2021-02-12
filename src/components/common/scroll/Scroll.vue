<template>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null,
        message: 'hhh'
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        Click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })

      this.scroll.scrollerHeight = 10000000

      this.scroll.refresh()
    },
    methods: {
      scrollTo(x, y, time=300){
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {

      }
    },
  }
</script>

<style scoped>

</style>
