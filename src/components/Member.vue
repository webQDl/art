<template>
  <div class="member">
    <van-tabbar v-model="active" :style="{height: memberHeight}">
      <van-tabbar-item icon="home-o">导航</van-tabbar-item>
      <van-tabbar-item icon="search">
        <span>小白</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)

export default {
  name: 'Member',
  data () {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  },
  computed: {
    memberHeight () {
      return (0.1 * (window.innerHeight) - 10) + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
