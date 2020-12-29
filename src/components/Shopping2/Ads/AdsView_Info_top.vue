<template>
  <div class="AdsView_Info">
    <div class="AdsView_Info_top">
      <div class="Info_logo">
        <img src="/static/icon-02.png" />
      </div>
      <div class="Info_text">
        <no_login_info v-if="!haslogin()"></no_login_info>
        <has_login_info v-if="haslogin()"></has_login_info>
      </div>
    </div>
    <div class="AdsView_Info_other">
      <el-button size="mini" id="button1" round>新人福利</el-button>
      <el-button size="mini" id="button2" round>PLUS会员</el-button>
    </div>
  </div>
</template>

<script>
import has_login_info from "./has_login_info";
import no_login_info from "./no_login_info";
export default {
  components: {
    no_login_info,
    has_login_info,
  },
  methods: {
    haslogin() {
      if (this.$store.state.now_user == "") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.AdsView_Info {
  width: 100%;
  height: 100px;
  /* background-color: salmon; */
}
.AdsView_Info_top {
  display: inline-block;
  width: 200px;
  height: 65px;
  vertical-align: top;
  /* background-color: turquoise; */
}
.Info_logo {
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 1px solid white;
  position: relative;
  left: 30px;
  top: 7px;
}
.Info_logo img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.Info_text {
  display: inline-block;
  width: 120px;
  height: 100%;
  vertical-align: top;
  /* background-color: violet; */
  float: right;
  position: relative;
  top: 5px;
}
.Info_text a:hover {
  color: #e1251b;
  text-decoration: none;
}
.t1 {
  width: 120px;
  height: 33px;
  display: inline-block;
  /* background-color: green; */
  text-align: center;
  position: relative;
  top: -12px;
  left: -15px;
}
.text1 {
  font-family: 微软雅黑;
  font-size: 12px;
  color: #777777;
}
.text2 {
  font-family: 微软雅黑;
  font-size: 12px;
}
.Info_text span {
  height: 16px;
  width: 10px;
}
.AdsView_Info_other {
  height: 26px;
  width: 100%;
  /* background-color: rgb(184, 176, 176); */
  display: inline-block;
  float: right;
}
el-button {
  display: inline-block;
  float: left;
  position: relative;
  left: 10px;
}
#button1 {
  background-color: #e1251b;
  border: #e1251b;
  color: #ffffff;
  position: relative;
  left: 18px;
}
#button1:hover {
  background-color: #ca1107;
}
#button2 {
  background-color: #363634;
  border: #363634;
  color: #e5d730;
  position: relative;
  left: 10px;
}
#button2:hover {
  background-color: #e1251b;
  border: #e1251b;
  color: #ffffff;
}
</style>
