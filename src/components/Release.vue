<template>
  <div class="releaseCom">
    <div class="releaseTop">
      <div class="releaseUser">
        <div><img src="../assets/images/community/default.png" alt=""></div>
        <div class="releaseUsername">Name</div>
      </div>
      <div class="right"><img src="../assets/images/community/sandian.png" alt=""></div>
    </div>
    <div class="releaseContent">
      {{this.lineFlag ? this.releaseMsg.substring(0, 90) : this.releaseMsg}}
      <span style="float: right; color: #0096C7;" @click='this.moreInfo' v-show="this.releaseMsg>90"> {{this.lineFlag ? '展示更多' : '收起'}} </span>
    </div>
    <div class="communityImg">
      <div><img src="../assets/images/community/default.png" alt="" width="100%"></div>
      <div><img src="../assets/images/community/default.png" alt="" width="100%"></div>
      <div><img src="../assets/images/community/default.png" alt="" width="100%"></div>
    </div>
    <div class="shareFabulous">
      <div><van-icon name="share-o" />分享</div>
      <div><van-icon name="chat-o" />评论</div>
      <div><van-icon name="good-job-o" />点赞</div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  name: 'Release',
  props: {
    releaseMsg: {
      type: String,
      default: 'hello world'
    }
  },
  data () {
    return {
      lineFlag: true,
      active: 0
    }
  },
  mounted () {
    console.log(this.msgReleaseMsg)
  },
  methods: {
    moreInfo () {
      this.lineFlag = !this.lineFlag
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .releaseCom{
    padding: 20px 0;
    border-bottom: 1px solid #DCDCDC;
  }
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
  .releaseTop{
    margin: 10px 0;
    position: relative;
  }
  .releaseUser{
    display: inline-flex;
    align-items: center;
  }
  .releaseUsername{
    font-weight: 700;
    margin-left: 20px;
    font-size: 15px;
  }
  .right{
    position: absolute;
    right: 0;
    top: 30%;
  }
  .releaseContent{
    line-height: 20px;
  }
  .communityImg{
    margin: 20px 0;
  }
  .communityImg>div{
    width: 30%;
    display: inline-block;
  }
  .communityImg>div:not(:last-of-type){
    margin-right: 5%;
  }
</style>
