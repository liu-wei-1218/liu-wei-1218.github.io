<template>
  <div class="no_login_info">
    <span><a href="#" class="no_login_info_text1">Hi~欢迎逛京东!</a></span
    ><br />
    <div class="no_login_info_t1">
      <router-link to="/LoginPage" class="no_login_info_text2" style="margin: 0px">登录</router-link>
      <span class="no_login_info_text2" style="opacity:0.4;">|</span>
      <router-link to="/RegisterPage" class="no_login_info_text2" style="margin: 0px">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scope>
.no_login_info{
    width: 100%;
    height: 100%;
    display: inline-block;
}
.no_login_info a {
  text-decoration: none;
  font-size: 12px;
}
.no_login_info a:hover{
  color: #e1251b;
}
.no_login_info_t1{
  line-height: 32px;
  position: relative;
  left: 10px;
  top: -10px;
}
</style>
