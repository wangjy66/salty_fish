<template>
  <div>
    <a>this is good.</a>
<!--    {{goodID}}-->
    {{$route.query.goodId}}
    <router-link to="home" tag="button" >返回</router-link>
    <router-link to="conversation" tag="button" >私信会话</router-link>
  </div>
</template>

<script>
export default {
  name: 'good',
  computed: {
    goodID () {
      return this.$route.params.goodId
    }
  }
  // created () {
  //   document.title = 'good'
  // }
}
</script>

<style scoped>

</style>
