<template>
<div>
  <Header>
    <div slot="HeaderMiddle">上蝌闲鱼</div>
  </Header>
  <router-link to="pay" tag="button" >全部购买</router-link>
  <h2>This is cargo 购物车</h2>
</div>
</template>

<script>
import Header from '../../components/common/header/header'
export default {
  name: 'cargo',
  components: {
    Header
  }
}
</script>
<style scoped>
</style>
