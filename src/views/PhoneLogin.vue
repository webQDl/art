<template>
  <div class="phoneLogin">
    <div class="loginTop">
      <van-nav-bar title="" >
        <template #left>
          <span class="icon"  @click="onClickRight">返回</span>
        </template>
        <template #right>
          <span class="icon" @click="onLogin">{{loginState?'密码登录':'注册/验证码登录'}}</span>
        </template>
      </van-nav-bar>
    </div>
    <div class="loginFrom">
      <div class="loginTitle">登录</div>
        <div>
          <div><input v-model="username" placeholder="请输入手机号码" style="width:100%;margin-bottom:20px;" /></div>
          <div>
            <div style="margin-bottom:10px">
              <input v-model="password" type="password" :style="{width: !loginState ? '100%':'70%'}" :placeholder="pwdPholder" />
              <button v-show="loginState" class="verificationCode" @click="onCheck()">获取验证码</button>
            </div>
            <router-link :to="{path :'/forgetPwd'}"><div v-show="!loginState" class="forget">忘记密码?</div></router-link>
          </div>
        </div>
        <div class="submitBtn"><van-button round block color="#0096C7" native-type="submit" @click="onSubmit()">登录</van-button></div>
        <div class="protocol">未注册手机登录后即自动注册代表您同意<a>小白用户协议</a>和<a>隐私政策</a></div>
    </div>
    <div class="thirdLogin">
      <ThirdLogin></ThirdLogin>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'
import ThirdLogin from '@/components/ThirdLogin.vue'
import Vue from 'vue'
import { NavBar, Toast, Form, Button } from 'vant'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5
Vue.use(NavBar, Toast, Form, Button)

export default {
  name: 'PhoneLogin',
  data () {
    return {
      username: '',
      password: '',
      loginState: true
    }
  },
  components: {
    ThirdLogin
  },
  computed: {
    pwdPholder () {
      return this.loginState ? '请输入验证码' : '请输入密码'
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      Toast('按钮')
    },
    onCheck () {
      const url = 'api/system/api/user/sms?mobile=' + this.username + '&type=1'
      axios({
        method: 'get',
        url: url
      }).then((res) => {
        console.log(res)
      }).catch(function (error) {
        console.log(error)
      })
    },
    onSubmit () {
      var grantType = this.loginState ? 'mobile_sms' : 'password'
      // let url = this.loginState ? 'mobile_sms' : 'api/auth/oauth/token'
      var dataType = this.loginState ? 'mobile=' + this.username + '&smsCode=' + md5(this.password) + '&grant_type=' + grantType + '&client_id=zlt&client_secret=zlt' : 'username=' + this.username + '&password=' + md5(this.password) + '&grant_type=' + grantType + '&client_id=app&client_secret=app'
      axios({
        method: 'post',
        url: 'api/auth/oauth/token',
        // url: 'http://192.168.0.6:9999/auth/oauth/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: dataType
      }).then((res) => {
        console.log(1)
        console.log(res.data)
      }).catch(function (error) {
        console.log(2)
        console.log(error)
      })
    },
    onLogin () {
      this.loginState = !this.loginState
    }
  }
}
</script>
<style lang="less" scoped>
  .icon{
    color: #333333;
  }
  .loginTitle{
    font-size: 25px;
    font-weight: 700;
    padding: 10% 0;
  }
  .loginFrom input{
    height: 30px;
    background-color: #FFF;
    outline: none;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid #DCDCDC;
    padding: 0;
  }
  // /deep/ .van-nav-bar__left{
  //   padding: 0
  // }
  .loginFrom{
    width: 86%;
    margin: 0px auto 15%;
  }
  .submitBtn{
    margin: 60px 0 30px;
  }
  /deep/ .van-button--round{
    border-radius: 5px
  }
  .protocol{
    text-align: center;
    width: 70%;
    margin: 0px auto 0;
    font-size: 10px;
  }
  .protocol>a{
    color: #4ABDF4;
  }
  .verificationCode{
    background-color: #DBF8FF;
    color: #00ACF1;
    height: 28px;
    width: 30%;
    outline: none;
    box-shadow: none;
    border: 0;
    border-radius: 5px;
  }
  .forget{
    float: right;
  }
</style>
