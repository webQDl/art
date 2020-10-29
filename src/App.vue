<template>
  <div id="app">
    <div class="page" :style="{height: contentHeight}">
      <router-view/>
    </div>
    <Member v-if="$route.meta.TabbarShow"></Member>
  </div>
</template>

<script>
// @ is an alias to /src
import Member from '@/components/Member.vue'

export default {
  name: 'App',
  data () {
    return {
      pageHeight: 0
    }
  },
  components: {
    Member
  },
  computed: {
    contentHeight () {
      return (0.9 * (window.innerHeight)) + 'px'
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page{
  margin: 10px;
  height: 1000px;
  overflow-y: auto;
  font-size: 13px;
}
</style>
