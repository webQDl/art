<template>
  <div class="news">
    <div class="newsTop">
      <van-nav-bar title="消息" >
        <template #left>
          <span class="icon" @click="onClickLeft">返回</span>
        </template>
      </van-nav-bar>
    </div>
    <div class="nav">
        <div class="nav_item">
          <div class="nav_img"><img src="../assets/images/news/newsNav1.png" alt=""></div>
          <div class="nav_title">社区通知</div>
        </div>
        <div class="nav_item">
          <div class="nav_img"><img src="..\assets\images\news\newsNav2.png" alt=""></div>
          <div class="nav_title">最新评论</div>
        </div>
        <div class="nav_item">
          <div class="nav_img"><img src="..\assets\images\news\newsNav3.png" alt=""></div>
          <div class="nav_title">赞与收藏</div>
        </div>
        <div class="nav_item">
          <div class="nav_img"><img src="..\assets\images\news\newsNav4.png" alt=""></div>
          <div class="nav_title">我的粉丝</div>
        </div>
      </div>
      <div class="newsList">
        <div v-for = "(item,index) in newsList" :key = "index" class="newsItem">
          <div class="newsImg"><img :src="item.newsItemImg" alt=""></div>
          <div class="newsInfo">
            <div class="newsTitle">
              <div>{{item.newsItemTitle}}</div>
              <div>{{item.newsItemTitle2}}</div>
            </div>
            <div class="newsDate">{{item.createDate}}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { NavBar, Form, Cell, CellGroup, Grid, GridItem } from 'vant'

Vue.use(NavBar, Form, Cell, CellGroup, Grid, GridItem)
export default {
  name: 'news',
  data () {
    return {
      newsList: [{
        newsItemImg: require('../assets/images/news/newsNav2.png'),
        newsItemTitle: '系统消息',
        newsItemTitle2: '来自小白的消息',
        createDate: '2020-10-16'
      }, {
        newsItemImg: require('../assets/images/news/newsNav3.png'),
        newsItemTitle: '系统消息2',
        newsItemTitle2: '来自消息',
        createDate: '2020-10-16'
      }, {
        newsItemImg: require('../assets/images/news/newsNav4.png'),
        newsItemTitle: '系统消息3',
        newsItemTitle2: '来自小白的',
        createDate: '2020-10-16'
      }]
    }
  },
  components: {
  },
  methods: {
    onClickLeft () {
      console.log(22)
    }
  }
}
</script>
<style lang="less" scoped>
  .news{
    height: 100%;
    background-color: #F5F6F9;
  }
  .nav{
    display: flex;
    text-align: center;
    background-color: #FFF;
    padding: 7% 0;
    font-size: 12px;
  }
  .nav>div{
    flex: 1;
  }
  .newsList{
    background-color: #FFF;
    margin-top: 5%;
  }
  .newsItem{
    padding: 0 9px;
    display: flex;
  }
  .newsTitle{
    flex: 1;
    padding: 0 5px;
  }
  .newsImg{
    padding-right: 15px;
    display: flex;
    align-items: center;
  }
  .newsDate{
    font-size: 10px;
    color: #999999;
  }
  .newsInfo{
    padding: 10px 0;
    flex: 1;
    display: flex;
  }
  .newsItem:not(:last-of-type) .newsInfo{
    border-bottom: 1px solid #E5E5E5;
  }
  .newsTitle>div:first-of-type{
    font-size: 15px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 1%;
  }
  .newsTitle>div:last-of-type{
    color: #999999;
  }
</style>
