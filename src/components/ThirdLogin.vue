<template>
  <div class="ThirdLogin">
    <van-divider :style="{ color: '#666666', borderColor: '#DCDCDC' }">其它登录方式</van-divider>
    <div class="loginIcon">
      <div><img src="../assets/images/login/qq.png" alt=""></div>
      <div><img src="../assets/images/login/weixin.png" alt=""></div>
      <div><img src="../assets/images/login/weibo.png" alt=""></div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Divider } from 'vant'

Vue.use(Divider)
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
  .loginIcon{
    display: flex;
    margin: 10%;
    text-align: center;
  }
  .loginIcon>div{
    flex: 1;
  }
</style>
