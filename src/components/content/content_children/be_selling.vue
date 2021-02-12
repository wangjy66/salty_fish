<template>
  <div>
    <Header>
      <div slot="HeaderLeft"></div>
    </Header>
    <router-link to="mine" tag="button" >返回</router-link>
  <a href="">this is be_selling.</a>
  </div>
</template>

<script>
import Header from '../../../components/common/header/header'

export default {
  name: 'be_selling',
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
