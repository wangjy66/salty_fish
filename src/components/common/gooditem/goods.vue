<template>
  <div class="goods">
    <good-item v-for="item in goods" :goods-item="item"/>
<!--    {{goods }}-->
  </div>
</template>

<script>
  import GoodItem from './gooditem'

  export default {
    name: "goods",
    props: {
        goods: {
          type: Array,
          default() {
            return []
          }
        }
    },
    components: {
      GoodItem
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
  }
</style>
