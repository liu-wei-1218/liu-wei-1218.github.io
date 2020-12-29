<template>
  <div class="regis_block">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="Username"
        prop="username"
        :rules="[
          {
            required: true,
            message: '用户名不能为空',
            trigger: ['blur', 'change'],
          },
          { min: 2, max: 20, message: '用户名长度介于2-20之间' },
        ]"
      >
        <el-input v-model="ruleForm.username" id="reg_username"></el-input>
      </el-form-item>
      <el-form-item
        label="Password"
        prop="password"
        :rules="[
          {
            required: true,
            message: '密码不能为空',
            trigger: ['blur', 'change'],
          },
          { min: 6, max: 20, message: '密码长度介于6-20之间' },
        ]"
      >
        <el-input
          type="password"
          v-model="ruleForm.password"
          id="reg_password"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="Phone"
        prop="phone"
        :rules="[
          {
            required: true,
            message: '请输入手机号码',
            trigger: ['blur', 'change'],
          },
          { min: 11, max: 11, message: '号码长度为11位' },
        ]"
      >
        <el-input v-model="ruleForm.phone" id="reg_phone"></el-input>
      </el-form-item>
      <el-form-item
        label="Email"
        prop="email"
        :rules="[
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: ['blur', 'change'],
          },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="ruleForm.email" id="reg_email"></el-input>
      </el-form-item>
            <el-form-item
        label="Address"
        prop="address"
        :rules="[
          {
            required: true,
            message: '请输入地址',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="ruleForm.address" id="reg_address"></el-input>
      </el-form-item>
      <button class="btn" id="reg_btn" @click="submit">提交</button>
    </el-form>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        phone: "",
        email: "",
        address:"",
      },
      newuser: {
        username: "",
        password: "",
        phone: "",
        email: "",
        address:"",
        shopcar: [],
      },
      emptyArray: [],
    };
  },
  methods: {
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$confirm("准备好了吗", "注册", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "info",
          }).then(() => {
            if(!this.IsSame(document.getElementById("reg_username").value)){
                this.$message({
                type: "error",
                message: "用户名已被注册",
              });
              return false;
            }
            this.$message({
              type: "success",
              message: "注册成功!",
            });
            this.newuser.username = document.getElementById(
              "reg_username"
            ).value;
            this.newuser.password = document.getElementById(
              "reg_password"
            ).value;
            this.newuser.phone = document.getElementById("reg_phone").value;
            this.newuser.email = document.getElementById("reg_email").value;
            this.newuser.address = document.getElementById("reg_address").value;
            if (window.localStorage.getItem("JD_users") == null) {
              window.localStorage.setItem(
                "JD_users",
                JSON.stringify(this.emptyArray)
              );
            //   window.localStorage.setItem("JD_users", JSON.stringify(arr));
            }
            let arr = JSON.parse(window.localStorage.getItem("JD_users"));
            arr.push(this.newuser);
            window.localStorage.setItem("JD_users", JSON.stringify(arr));
            this.$store.commit("setnowuser",this.newuser);
            this.$router.push("/Home");
          });
        } else {
          return false;
        }
      });
    },
    IsSame(name){
      let arr= JSON.parse(window.localStorage.getItem("JD_users"));
      if(arr==null){
        return true;
      }else{
        let i;
        for(i=0;i<arr.length;i++){
          if(arr[i].username===name){
            return false;
          }
        }
        return true;
      }
    }
  },
};
</script>

<style scope>
.regis_block{
    display: inline-block;
    width: 500px;
    height: 500px;
    /* background-color: violet; */
    vertical-align:top;
    margin: 50px 200px 0px 0px;
}
#reg_btn{
  height: 35px;
  width: 380px;
  color: #ffffff;
  background-color: #E2231A;
  position: relative;
  left: 60px;
}
</style>
