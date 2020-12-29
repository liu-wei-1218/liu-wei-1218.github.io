<template>
  <div class="not_login">
    <router-link to="/LoginPage">
      <span id="please_login">你好，请登录</span>
    </router-link>
    <router-link to="/RegisterPage">
      <span class="free_in" style="color: red; font-size: 14px;position:relative;top:1px;"> 免费注册</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scope>
.not_login {
  width: 100%;
  height: 100%;
}
#please_login {
  display: inline-block;
  position: relative;
  width: 650px;
  line-height: 30px;
  /* border: 1px solid #333333; */
  text-align: right;
  vertical-align: top;
  position: relative;
  left: 50px;
}
#please_login:hover {
  color: #e1251b;
}
.free_in {
  display: inline-block;
  height: 30px;
  color: #e1251b;
  line-height: 30px;
  text-align: right;
  padding: 0px 0px;
  font-size: 12px;
  position: relative;
  right: -70px;
}
</style>
