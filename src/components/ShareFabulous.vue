<template>
  <div class="shareFabulous">
    <div><van-icon name="share-o" />分享</div>
    <div><van-icon name="chat-o" />评论</div>
    <div><van-icon name="good-job-o" />点赞</div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  name: 'Member',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .shareFabulous{
    display: flex;
  }
  .shareFabulous>div:not(:last-of-type){
    flex: 1;
  }
  .shareFabulous>div{
    display: flex;
    align-items: center;
  }
</style>
