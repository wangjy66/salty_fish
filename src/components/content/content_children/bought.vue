<template>
  <div>
  <Header>
    <div slot="HeaderMiddle">已购买商品</div>
  </Header>
  <router-link to="mine" tag="button" >返回</router-link>
  <a href="">this is bought.</a>
  </div>
</template>

<script>
import Header from '../../../components/common/header/header'
export default {
  name: 'bought',
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
