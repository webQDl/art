<template>
  <div class="communityCommunication">
    <div>
      <van-nav-bar title="小白交流群" left-text="" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
    </div>
    <div>
      <van-tabs @click="onClick" color="#666" line-height="2px">
        <van-tab title="我的圈子">
          <div class="myCircleItem" v-for="(item,key) in myCircleList" :key="key">
            <div class="myCircleItemImg"><img :src="item.src" alt=""></div>
            <div class="myCircleItemContent">
              <div class="myCircleItemTitle">{{item.title}}</div>
              <div class="myCircleItemCount">{{item.count}}人参与</div>
            </div>
          </div>
        </van-tab>
        <van-tab title="推荐圈子">
          <div class="myCircleItem" v-for="(item,key) in myCircleList" :key="key">
            <div class="myCircleItemImg"><img :src="item.src" alt=""></div>
            <div class="myCircleItemContent">
              <div class="myCircleItemTitle">{{item.title}}</div>
              <div class="myCircleItemCount">{{item.count}}人参与</div>
            </div>
            <div style="position: absolute;right: 0;"><van-button round type="info" color="#FE5F55">加入</van-button></div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { NavBar, Tabs, Tab, Toast, Button } from 'vant'

Vue.use(NavBar)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Toast)
Vue.use(Button)
export default {
  name: 'CommunityCommunicatione',
  data () {
    return {
      myCircleList: [
        {
          src: require('../assets/images/communityMy/yqzt.png'),
          title: '雅趣杂谈',
          count: '6006'
        },
        {
          src: require('../assets/images/communityMy/zz.png'),
          title: '竹韵生香',
          count: '66'
        },
        {
          src: require('../assets/images/communityMy/mnls.png'),
          title: '艺术经典',
          count: '606'
        },
        {
          src: require('../assets/images/communityMy/xnh.png'),
          title: '生活美学',
          count: '6066'
        }
      ]
    }
  },
  components: {
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      console.log('按钮')
    },
    onClick (name, title) {
      Toast(title)
    }
  }
}
</script>
<style lang="less" scoped>
  .myCircleItem{
    display: flex;
    align-items: center ;
    padding: 20px 0;
  }
  .myCircleItem:not(:last-of-type){
    border-bottom: 1px solid #DCDCDC;
  }
  .myCircleItemContent{
    margin-left: 10px;
    margin-bottom: 5px;
    height: 100%;
  }
  .myCircleItemTitle{
    font-size: 16px;
    font-weight: 700;
  }
  .myCircleItemCount{
    color: #999999;
  }
  /deep/ .van-tabs__content{
    border-top: 1px solid #DCDCDC;
  }
  .van-button{
    height: 35px;
  }
</style>
