<template>
  <div class="community">
    <div class="communityTop">
      <div class="search"><img src="../assets/images/community/search.png" alt=""></div>
      <div class="communityTitle">
        <div :class="{'active':communityTitle === true}" @click="changeTitle()">关注</div>
        <div :class="{'active':communityTitle === false}" @click="changeTitle()">推荐</div>
      </div>
      <div class="Img"><img src="../assets/images/community/default.png" style="width: 22px;height: 22px" alt=""></div>
    </div>
    <div class="cardType" v-show="communityTitle">
      <div class="cardTypeItem">
        <div><img src="../assets/images/community/default.png" alt=""></div>
        <div style="margin-left:10px">艺人上新</div>
      </div>
      <div class="cardTypeItem">
        <div><img src="../assets/images/community/default.png" alt=""></div>
        <div style="margin-left:10px">好友动态</div>
      </div>
    </div>
    <div v-if="!communityTitle" class="recommend">
      <div class="swipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" width="100%" height="100%"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="myCommunication">
        <div class="myCommunication_title">
          <div>我的交流圈</div>
          <div style="color: #999999;" @click="findMore()">发现更多 <van-icon name="arrow" /></div>
        </div>
        <div class="myCommunication_content">
          <div v-for="(item,key) in pic" :key="key" class="myCommunicationItem">
            <div><img class="img" :src="item.img" ></div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="communityRelease">
      <div class="communityReleaseItem">
        <div v-show="!communityTitle" style="color: #111111; font-weight:700 ;font-size: 18px">今日推荐</div>
        <div class="releaseTop">
          <div class="releaseUser">
            <div><img src="../assets/images/community/default.png" alt=""></div>
            <div class="releaseUsername">Name</div>
          </div>
          <div class="right"><img src="../assets/images/community/sandian.png" alt=""></div>
        </div>
        <div class="releaseContent">
          {{this.lineFlag ? this.releaseMsg.substring(0, 90) : this.releaseMsg}}<span style="float: right; color: #0096C7;" @click='this.moreInfo'> {{this.lineFlag ? '展示更多' : '收起'}} </span>
        </div>
        <div class="communityImg">
          <div><img src="../assets/images/community/default.png" alt="" width="100%"></div>
          <div><img src="../assets/images/community/default.png" alt="" width="100%"></div>
          <div><img src="../assets/images/community/default.png" alt="" width="100%"></div>
        </div>
        <div class="shareFabulous">
          <ShareFabulous></ShareFabulous>
        </div>
      </div>
    </div>
    <div class="releaseBtn"><van-icon name="plus" /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import ShareFabulous from '@/components/ShareFabulous.vue'
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, Icon } from 'vant'

Vue.use(Lazyload)
Vue.use(Icon)
Vue.use(Swipe, SwipeItem)
export default {
  name: 'Community',
  components: {
    ShareFabulous
  },
  data () {
    return {
      lineNum: 4,
      lineFlag: false,
      releaseMsg: '噫吁嚱，危乎高哉！蜀道之难，难于上青天蚕丛及鱼凫，开国何茫然！尔来四万八千岁，不与秦塞通人烟。西当太白有鸟道，可以横绝峨眉巅。地崩山摧壮士死，然后天梯石栈相钩连。上有六龙回日之高标，下有冲波逆折之回川。黄鹤之飞尚不得过，猿猱欲度愁攀援。青泥何盘盘，百步九折萦岩峦。扪参历井仰胁息，以手抚膺坐长叹。问君西游何时还？畏途巉岩不可攀。但见悲鸟号古木，雄飞雌从绕林间。又闻子规啼夜月，愁空山。蜀道之难，难于上青天，使人听此凋朱颜！连峰去天不盈尺，枯松倒挂倚绝壁。飞湍瀑流争喧豗，砯崖转石万壑雷。其险也如此，嗟尔远道之人胡为乎来哉！剑阁峥嵘而崔嵬，一夫当关，万夫莫开。所守或匪亲，化为狼与豺。朝避猛虎，夕避长蛇；磨牙吮血，杀人如麻。锦城虽云乐，不如早还家。蜀道之难，难于上青天，侧身西望长咨嗟！',
      communityTitle: true,
      images: [
        require('../assets/images/community/slide.png'),
        require('../assets/images/community/slide.png'),
        require('../assets/images/community/slide.png'),
        require('../assets/images/community/slide.png')
      ],
      pic: [
        {
          img: require('../assets/images/community/pic-1.png'),
          name: '雅趣杂谈'
        },
        {
          img: require('../assets/images/community/pic-1.png'),
          name: '竹韵生香'
        },
        {
          img: require('../assets/images/community/pic-1.png'),
          name: '艺术经典'
        },
        {
          img: require('../assets/images/community/pic-1.png'),
          name: '生活美学'
        },
        {
          img: require('../assets/images/community/pic-1.png'),
          name: '生活美学'
        },
        {
          img: require('../assets/images/community/pic-1.png'),
          name: '生活美学'
        },
        {
          img: require('../assets/images/community/pic-1.png'),
          name: '生活美学'
        }
      ]
    }
  },
  mounted () {
    this.lineNum = parseInt(this.releaseMsg.length / 25) + 1
    this.lineNum > 4 ? (this.lineFlag = true) : (this.lineFlag = false)
    console.log(this.lineFlag)
  },
  methods: {
    moreInfo () {
      this.lineFlag = !this.lineFlag
      console.log(1)
    },
    changeTitle () {
      this.communityTitle = !this.communityTitle
    },
    findMore () {
      this.$router.push('/communityMy')
    }
  }
}
</script>
<style lang="less" scoped>
  .community{
    background-color: #999;
  }
  .communityTop{
    padding: 5% 0;
    background-color: #FFFFFF;
    display: flex;
  }
  .communityTitle{
    padding: 0 20%;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .communityTitle>div{
    text-align: center;
    flex: 1;
    color: #666666;
  }
  .active{
    font-size: 15px;
    font-weight: 700;
    align-items: center;
    color: #111111!important;
  }
  .cardType{
    display: flex;
    background-color: #FFFFFF;
    padding: 0 5%;
  }
  .cardTypeItem{
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 3%;
    border-radius: 5px;
    box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2) ;
  }
  .cardTypeItem:first-of-type{
    margin-right: 6%;
  }
  .releaseTop{
    margin: 10px 0;
    position: relative;
  }
  .right{
    position: absolute;
    right: 0;
    top: 30%;
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
  .releaseContent{
    line-height: 20px;
  }
  .row4{
    height: 80px;
    overflow-y: hidden;
    text-overflow:ellipsis;
    line-clamp: 4;
    box-orient: vertical;
    // white-space: nowrap
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
  .communityRelease{
    background-color: #FFFFFF;
  }
  .communityReleaseItem{
    border-bottom: 1px solid #DCDCDC;
    padding: 20px 0;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .recommend{
    background-color: #FFF;
  }
  .myCommunication_title{
    display: flex;
    align-items: center;
    padding: 20px 0 15px 0;
  }
  .myCommunication_title>div:first-of-type{
    flex: 1;
    color: #111111;
    font-size: 18px;
    font-weight: 700 ;
  }
  .myCommunication_content {
    width: 100%;
    height: 100px;
    overflow:auto;
    text-align: center;
    white-space:nowrap;
    .img {
      max-width: 100%;
      max-height: 100px;
    }
  }
  .myCommunicationItem{
    display: inline-block;
    height: 100%;
    padding: 0 7px;
  }
  .releaseBtn{
    position: absolute;
    right: 10%;
    bottom: 15%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    color: #FFF;
    text-align: center;
    line-height: 70px;
    opacity: 0.6;
  }
  .van-icon{
    font-size: 30px;
  }
</style>
