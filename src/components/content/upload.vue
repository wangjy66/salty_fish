<template>
<div>
  <Header>
        <div slot="HeaderMiddle">上蝌闲鱼</div>
  </Header>
  <div class="show-img">
<!--    <UploadImg name="上传介绍图片"></UploadImg>-->
<!--    <UploadImg name="上传收款图片"></UploadImg>-->
<!--    <upload></upload>-->
  </div>
  <div class="good-name"></div>
  <div class="good-price"></div>
  <div class="old-degree"></div>
  <div class="good-introduction"></div>
  <h2>This is upload 上传</h2>
</div>
</template>

<script>
import Header from '../common/header/header'
import MineButton from '../common/MineButton/MineButton'
// import Upload from '../common/upload/upload'
// import UploadImg from '../common/UploadImg/upload-img'

export default {
  name: 'upload',
  components: {
    Header,
    MineButton,
    // Upload
    // UploadImg
  }
}
</script>

<style scoped>
.show-img{
  display: flex;
}
</style>
