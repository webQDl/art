<template>
  <div class="forgetPwd">
    <div class="forgetTop">
      <van-nav-bar title="" >
        <template #left>
          <span class="icon" @click="onClickLeft">返回</span>
        </template>
        <template #right>
          <span class="icon" @click="onLogin">注册/验证码登录</span>
        </template>
      </van-nav-bar>
    </div>
    <div class="forgetFrom">
      <div class="forgetTitle">重置密码</div>
      <div>
        <div><input v-model="username" placeholder="请输入手机号码" style="width:100%;margin-bottom:20px;" /></div>
        <div>
          <div  >
            <input v-model="password" type="password"  style="width:70%;margin-bottom:20px;" placeholder="请输入验证码" />
            <button class="verificationCode">获取验证码</button>
          </div>
        </div>
        <div><input v-model="newPwd" placeholder="请输入6-10位新密码" style="width:100%;margin-bottom:20px;" /></div>
        <div><input v-model="newPwdAgain" placeholder="请再次输入新密码" style="width:100%;margin-bottom:20px;" /></div>
      </div>
      <div class="submitBtn"><van-button round block color="#0096C7" @click="onSubmit">提交</van-button></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Toast, Form, Button } from 'vant'

Vue.use(Form)
Vue.use(NavBar)
Vue.use(Toast)
Vue.use(Button)

export default {
  name: 'ForgetPwd',
  data () {
    return {
      username: '',
      password: '',
      loginState: true,
      newPwd: '',
      newPwdAgain: ''
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      Toast('按钮')
    },
    onSubmit (values) {
      Toast.success('成功文案')
    },
    onLogin () {
      this.$router.push('/phoneLogin')
    }
  }
}
</script>
<style lang="less" scoped>
  .icon{
    color: #333333;
  }
  .forgetTitle{
    font-size: 25px;
    font-weight: 700;
    padding: 10% 0;
  }
  .forgetFrom input{
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
  .forgetFrom{
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
