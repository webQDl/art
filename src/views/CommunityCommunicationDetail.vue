<template>
  <div class="communityCommunicationDetail">
    <div class="detailTop">
      <div>
        <van-nav-bar left-text="" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
          <template #left>
            <van-icon name="arrow-left" />
          </template>
          <template #right>
            <van-icon name="share-o" />
          </template>
        </van-nav-bar>
      </div>
      <div class="myCircle">
        <div class="myCircleImg"><img :src="myCircle.src" width="100%" alt=""></div>
        <div class="myCircleContent">
          <div class="myCircleTitle">{{myCircle.title}}</div>
          <div class="myCircleCount">{{myCircle.count}}人参与</div>
          <div class="myCircleInfo">{{myCircle.info}}</div>
        </div>
        <div class="myCircleBtn"><van-button type="default">已加入</van-button></div>
      </div>
    </div>
    <div class="content">
      <van-tabs>
        <van-tab title="全部">
          <Release></Release>
        </van-tab>
        <van-tab title="精华">
          <Release></Release>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import Release from '@/components/Release.vue'
import { Tab, Tabs, Icon, Button } from 'vant'

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon, Button)
export default {
  name: 'CommunityCommunicationDetail',
  data () {
    return {
      myCircle: {
        src: require('../assets/images/communityMy/yqzt.png'),
        title: '雅趣杂谈',
        count: '6006',
        info: '风俗雅士之趣者，谈天论地，博古而通今。'
      }
    }
  },
  components: {
    Release
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      console.log('按钮')
    },
    onClick (name, title) {
      console.log(name, title)
    }
  }
}
</script>
<style lang="less" scoped>
  .detailTop{
    background-color: red;
    padding-bottom: 20px;
  }
  .myCircle{
    position: relative;
    display: flex;
    align-items: center ;
    margin-top: 8px;
  }
  .myCircle:not(:last-of-type){
    border-bottom: 1px solid #DCDCDC;
  }
  .myCircleImg{
    width: 60px;
    height: 60px;
  }
  .myCircleContent{
    margin-left: 5px;
    margin-bottom: 3px;
    height: 100%;
  }
  .myCircleTitle{
    font-size: 15px;
    font-weight: 500;
    color: #FFF;
  }
  .myCircleCount{
    color: #999999;
    font-size: 12px;
    color: #F5F6F9;
  }
  .myCircleInfo{
    font-size: 12px;
    color: #F5F6F9;
  }
  /deep/ .van-tabs__content{
    border-top: 1px solid #DCDCDC;
  }
  /deep/ .van-button--normal{
    padding: 0 ;
    font-size: 14px;
  }
  /deep/ .van-nav-bar{
    background-color: transparent;
  }
  /deep/ .van-hairline--bottom::after {
    border-bottom-width: 0px;
  }
  /deep/ .van-nav-bar__left, /deep/ .van-nav-bar__right {
    padding: 0;
    font-size: 22px;
  }
  .van-nav-bar .van-icon {
    color: #FFF;
  }
  .myCircleBtn .van-button{
    width: 100%;
    height: 100%;
    color: #000;
    border-radius: 5px;
  }
  .myCircleBtn{
    position: absolute;
    right: 0;
    top: 0;
    width: 58px;
    height: 26px;
  }
  /deep/ .van-tab{
    flex: inherit!important;
    padding: 0px 10px;
    color: #999999;
    font-size: 15px;
  }
  /deep/ .van-tab--active {
    color: #323233;
    font-weight: 500;
  }
  /deep/ .van-tabs__line{
    background-color: #000;
    bottom: 25px;
    width: 20px;
  }
  /deep/ .van-tabs--line .van-tabs__wrap {
    height: 50px;
  }
</style>
