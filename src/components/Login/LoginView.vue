<template>
  <div class="Login_view">
    <div class="Login_top">
      <img src="static\icon-03.png" alt="欢迎登陆" />
      <div class="Login_top_text">欢迎登陆</div>
      <div class="Login_top_text2">
        <img src="static/消息.png" alt="" />
        <span class="pointer">登陆页面，调查问卷</span>
      </div>
    </div>
    <div class="Login_mid">
      <div class="Login_mid_text">
        <img src="static/tooltips.png" alt="" />
        依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！
        新版《京东隐私政策》已上线，将更有利于保护您的个人隐私。
      </div>
    </div>
    <div class="Login_bottom">
      <div class="Login_bottom_bg"></div>
      <div class="Login_area">
        <div class="Login_area_top">
          <img src="static/tooltips.png" alt="" />
          京东不会以任何理由要求您转账汇款，谨防诈骗。
        </div>
        <div class="Login_style">
          <div
            :id="flag == true ? 'active' : ''"
            class="Login_style_scan inline-block"
            @click="changeflag(1)"
          >
            扫码登录
          </div>
          <span style="opacity: 0.1">|</span>
          <div
            :id="!flag == true ? 'active' : ''"
            class="Login_style_account inline-block"
            @click="changeflag(0)"
          >
            账户登录
          </div>
        </div>
        <div class="Login">
          <Scan v-if="flag"></Scan>
          <Account v-if="!flag"></Account>
        </div>
        <div class="Login_last inline-block">
          <img src="static/QQ.png" alt="QQ" />
          <span class="pointer">QQ&nbsp;&nbsp;</span>
          <span style="opacity: 0.2">|&nbsp;&nbsp;</span>
          <img src="static/微信.png" alt="微信" />
          <span class="pointer">微信</span>
          <img src="" alt="" />
          <div class="now_register inline-block">
            <img src="static/右箭头.png" />
            <router-link to="/RegisterPage">立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="Login_end">
      <end_Info></end_Info>
    </div>
  </div>
</template>

<script>
import Scan from "./Scan";
import Account from "./Account";
import end_Info from "../end_Info";
export default {
  components: {
    Scan,
    Account,
    end_Info
  },
  data() {
    return {
      flag: true
    };
  },
  methods: {
    Isactive() {
      this.flag = true;
    },
    changeflag(item) {
      if (item == 1) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    }
  }
};
</script>

<style scope>
* {
  margin: 0px;
}
.Login_top {
  width: 1920px;
  height: 80px;
  /* background-color: coral; */
}
.Login_top img {
  width: 200px;
  margin: auto;
  position: relative;
  top: 5px;
  left: 450px;
  /* border:1px solid darkmagenta; */
}
.Login_view {
  width: 1920px;
  height: 680px;
  /* background-color: cyan; */
}
.Login_top_text {
  display: inline-block;
  color: #999999;
  font-size: 24px;
  position: relative;
  left: 480px;
  top: 8px;
  line-height: 80px;
  vertical-align: top;
}
.Login_top_text2 {
  display: inline-block;
  height: 20px;
  width: 140px;
  /* background-color: darkorchid; */
  position: relative;
  left: 980px;
  vertical-align: bottom;
  font-size: 12px;
  line-height: 20px;
  color: #777777;
}
.Login_top_text2 img {
  width: 20px;
  height: 20px;
  position: relative;
  left: 0px;
  top: 0px;
  vertical-align: top;
  border: none;
}
.Login_mid {
  width: 1920px;
  height: 40px;
  background-color: #fff8f0;
  font-size: 12px;
  text-align: center;
  color: #777777;
  opacity: 0.8;
}
.Login_mid_text {
  line-height: 40px;
}
.Login_mid_text img {
  width: 16px;
  height: 16px;
  position: relative;
  top: 3px;
}
.Login_bottom {
  /* border: 1px solid aqua; */
  width: 1920px;
  height: 475px;
  background-color: #0b0e2d;
  text-align: center;
}
.Login_bottom_bg {
  display: inline-block;
  position: relative;
  left: 200px;
  width: 990px;
  height: 473px;
  background-color: #0b0e2d;
  background: url(/static/login_background.jpg) no-repeat center;
}
.Login_area {
  display: inline-block;
  height: 400px;
  width: 346px;
  background-color: #ffffff;
  position: relative;
  left: -180px;
  top: 15px;
  vertical-align: top;
}
.pointer{
  cursor: pointer;
}
.Login_area_top {
  display: inline-block;
  text-align: center;
  height: 50px;
  width: 346px;
  background-color: #fff8f0;
  font-size: 12px;
  float: top;
  vertical-align: top;
  line-height: 50px;
  color: #999999;
}
.Login_area_top img {
  display: inline-block;
  vertical-align: middle;
  float: top;
  /* position: absolute; */
}
.Login_style {
  float: top;
  /* display: inline-flex; */
  position: relative;
  width: 100%;
  height: 50px;
  /* vertical-align: top; */
  background-color: #ffffff;

  font-size: 18px;
  font-family: 微软雅黑;
  color: #666666;
}
.Login_style_scan {
  height: 100%;
  line-height: 50px;
  /* background-color: blueviolet; */
  position: relative;
  left: -20px;
  cursor: pointer;
}
.Login_style_account {
  height: 100%;
  line-height: 50px;
  position: relative;
  left: 20px;
  cursor: pointer;
}
.inline-block {
  display: inline-block;
}
#active {
  color: #e1251b;
  font-weight: 500;
}
.Login {
  width: 100%;
  height: 235px;
  /* background-color: cornflowerblue; */
}
.Login_last {
  line-height: 65px;
  width: 100%;
  height: 65px;
  background-color: #fcfcfc;
  text-align: left;
  text-indent: 20px;
}
.now_register {
  position: relative;
  right: -50px;
}
.now_register img {
  width: 16px;
  height: 16px;
}
.now_register a {
  text-decoration: none;
  color: #b61d1d;
  font-size: 14px;
  cursor: pointer;
}
.Login_end {
  display: inline-block;
  width: 1920px;
  height: 100px;
  text-align: center;
}
</style>
