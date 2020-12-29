<template>
  <div class="account inline-block">
    <div class="blank inline-block">
      <span v-show="judge.username_empty">请输入用户名</span>
      <span v-show="judge.password_empty">请输入密码</span>
      <span v-show="judge.both_empty">请输入用户名和密码</span>
      <span v-show="judge.user_noexist">用户不存在,请先注册</span>
      <span v-show="judge.password_wrong">密码错误</span>
    </div>
    <div class="text1 inline-block">
      <div class="text1_left inline-block">
        <img src="static/人.png" />
      </div>
      <input
        type="text"
        style="border: none"
        class="text text1_right input1"
        id="username"
        placeholder="邮箱/用户名/登陆手机"
      />
    </div>
    <div class="text2 inline-block">
      <div class="text1_left inline-block">
        <img src="static/锁.png" />
      </div>
      <input
        type="password"
        style="border: none"
        class="text text1_right"
        id="password"
        placeholder="密码"
      />
    </div>
    <div class="go">
      <button @click="login_confirm">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      judge: {
        username_empty: false,
        password_empty: false,
        both_empty: false,
        user_noexist: false,
        password_wrong: false,
      },
      user: {},
    };
  },
  methods: {
    init_judge() {
      this.judge = {
        username_empty: false,
        password_empty: false,
        both_empty: false,
        user_noexist: false,
        password_wrong: false,
      };
    },
    login_confirm() {
      this.init_judge();
      let content_username = document.getElementById("username").value;
      let content_password = document.getElementById("password").value;
      if (content_username == "" && content_password == "") {
        this.judge.both_empty = true;
      } else if (content_username == "") {
        this.judge.username_empty = true;
      } else if (content_password == "") {
        this.judge.password_empty = true;
      } else {
        let res = this.hasAccount(content_username, content_password);
        if (res === 2) {
          // console.log("登陆成功！");
          this.$store.commit("setnowuser", this.user);
          // eslint-disable-next-line no-undef
          swal({
            title: "温馨提示",
            text: "登录成功",
            icon: "success",
            button: "前往界面",
            timer: 2000,
          }).then(() => {
            this.$router.push("/Home");
          });
        } else if (res === 1) {
          this.judge.password_wrong = true;
        } else {
          this.judge.user_noexist = true;
        }
      }
    },
    //检查是否有该账号
    hasAccount(name, pas) {
      let arr = JSON.parse(window.localStorage.getItem("JD_users"));
      if(arr==null){
        return 0;
      }
      let i;
      for (i = 0; i < arr.length; i++) {
        if (arr[i].username === name) {
          if (arr[i].password === pas) {
            this.user = arr[i];
            return 2;
          }
          return 1;
        }
      }
      return 0;
    },
  },
};
</script>

<style scope>
.account {
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
}
.blank {
  float: top;
  height: 20px;
  width: 100%;
  /* background-color: #777777; */
  line-height: 40px;
  text-align: left;
  text-indent: 20px;
  color: #e4393c;
  vertical-align: top;
}
.inline-block {
  display: inline-block;
}
.text1 {
  width: 304px;
  height: 40px;
  /* vertical-align: top; */
  padding: 0px;
  /* position: fixed; */
  margin: 10px;
}
.text2 {
  width: 304px;
  height: 40px;
  margin: 18px;
  position: relative;
  left: 0px;
}
.text1_left {
  float: left;
  width: 40px;
  height: 100%;
  background-color: lightgray;
  text-align: center;
  line-height: 35px;
  vertical-align: top;
}
.text1_right {
  width: 264px;
  height: 100%;
  text-indent: 5px;
  color: #777777;
  opacity: 0.7;
}
/* .input1{
  position: relative;
  left: 20px;
  top: -38px;
} */
.text {
  border: 0px;
  caret-color: grey;
  outline: 0px;
}
.go {
  width: 304px;
  height: 35px;
  background-color: lightseagreen;
  margin: auto;
  position: relative;
  top: 10px;
  color: #ffffff;
  size: 18px;
}
.go button {
  width: 100%;
  height: 100%;
  border: #e4393c;
  outline: none;
  background-color: #e4393c;
}
.go button:hover {
  outline: 1px solid #e4393c;
}
</style>
