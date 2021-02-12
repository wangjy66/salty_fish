<template>
<div>
  <Header>
    <div slot="HeaderMiddle">上蝌闲鱼</div>
  </Header>
  <h2>This is mine 我的</h2>
  {{userID}}
  <router-link to="bought" tag="button" >已购买</router-link>
  <router-link to="sold" tag="button" >已出售</router-link>
  <router-link to="be_selling" tag="button" >挂售中</router-link>
  <router-link to="history" tag="button" >足迹</router-link>
  <router-link to="conversation_list" tag="button" >私信</router-link>
  <router-link to="comment" tag="button" >收到的评价</router-link>
</div>
</template>

<script>
import Header from '../../components/common/header/header'
export default {
  name: 'mine',
  computed: {
    userID () {
      return this.$route.params.userId
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
