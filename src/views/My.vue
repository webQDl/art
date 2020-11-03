<template>
  <div class="my" ref="my">
    <div class="head">
      <div class="user">
        <div class="userImg">
          <img style="height: 100%" src="../assets/images/my/default.png" alt="">
        </div>
        <div class="userInfo">
          <div class="userName">手机用户2543</div>
          <div class="usergradeDiv">
            <div class="usergradeImgDiv"><img class="usergradeImg" src="../assets/images/my/security.png" alt=""></div>
            <div class="usergradeName">普通会员</div>
          </div>
        </div>
        <div class="right">
          <img class="" src="../assets/images/my/set.png" alt="">
        </div>
      </div>
      <div class="nav">
        <div class="nav_item">
          <div class="nav_num">3</div>
          <div class="nav_title">关注</div>
        </div>
        <div class="nav_item">
          <div class="nav_num">3</div>
          <div class="nav_title">粉丝</div>
        </div>
        <div class="nav_item">
          <div class="nav_num">3</div>
          <div class="nav_title">收藏</div>
        </div>
        <div class="nav_item">
          <div class="nav_num">3</div>
          <div class="nav_title">圈子</div>
        </div>
      </div>
      <div class="member kuai">
        <img class="widthBig" src="../assets/images/my/member1.png" alt="">
      </div>
    </div>
    <div class="order">
      <div class="orderTitle">
        <div class="orderTitle_left">我的订单</div>
        <div class="orderTitle_right">查看全部<van-icon name="arrow" /></div>
      </div>
      <div class="orederContent">
        <div class="nav">
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\waitPayment.png" alt=""></div>
            <div class="nav_title">待付款</div>
          </div>
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\shopCart.png" alt=""></div>
            <div class="nav_title">代发货</div>
          </div>
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\waitGoods.png" alt=""></div>
            <div class="nav_title">待收货</div>
          </div>
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\waitEvaluate.png" alt=""></div>
            <div class="nav_title">待评价</div>
          </div>
      </div>
      </div>
    </div>
    <div class="gg">
      <img class="widthBig" src="../assets/images/my/member1.png" alt="">
    </div>
    <div class="modular">
      <div class="nav">
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\waitPayment.png" alt=""></div>
            <div class="nav_title">待付款</div>
          </div>
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\shopCart.png" alt=""></div>
            <div class="nav_title">代发货</div>
          </div>
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\waitGoods.png" alt=""></div>
            <div class="nav_title">待收货</div>
          </div>
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\waitEvaluate.png" alt=""></div>
            <div class="nav_title">待评价</div>
          </div>
      </div>
      <div class="nav">
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\waitPayment.png" alt=""></div>
            <div class="nav_title">待付款</div>
          </div>
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\shopCart.png" alt=""></div>
            <div class="nav_title">代发货</div>
          </div>
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\waitGoods.png" alt=""></div>
            <div class="nav_title">待收货</div>
          </div>
          <div class="nav_item">
            <div class="nav_num"><img src="..\assets\images\my\waitEvaluate.png" alt=""></div>
            <div class="nav_title">待评价</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  name: 'My',
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
  .my{
    background-color: #F5F6F9;
  }
  .gg{
    margin: 2% 0;
  }
  .head,.order,.modular{
    background-color: #ffffff;
  }
  .widthBig{
    width :100%;
  }
  .user{
    display: flex;
  }
  .userImg{
    flex: 3;
  }
  .userInfo{
    flex: 6;
  }
  .userName{
    font-size: 18px;
    font-weight: 700;
  }
  .right{
    flex: 1;
    text-align: right;
  }
  .userInfo>div{
    width:fit-content;
    margin: 10px 0;
  }
  .usergradeDiv{
    display: flex;
    align-items: center;
    line-height: 24px;
    border-radius: 12px;
    background: -webkit-linear-gradient(left,#0096C7,#58C3EC) no-repeat;
    padding: 0 10px;
    color: #fff;
  }
  .usergradeImg{
    display: flex;
  }
  .usergradeName{
    margin: 0 5px;
    font-size: 13px;
  }
  .nav{
    display: flex;
    text-align: center;
    margin: 7% 0;
  }
  .nav_num{
    font-size: 20px;
    font-weight: 700;
    color: #333333;
  }
  .nav_title{
    color: #666666;
  }
  .nav>div{
    flex: 1;
  }
  .kuai{
    margin: 4% 0;
  }
  .order{
    background-color: #FFFFFF;
    padding: 5px 0;
  }
  .orderTitle{
    display: flex;
  }
  .orderTitle_left{
    flex: 1;
    font-weight: 700;
    font-size: 15px;
  }
  .orderTitle_right{
    font-size: 13px;
    color: #999999;
  }
  .modular{
    padding: 5px 0;
  }
</style>
