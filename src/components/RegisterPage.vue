<template>
  <div>
    <div class="tips">
      <el-dialog
        title="京东用户注册协议和隐私政策"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose"
      >
        <span class="dialog_text">欢迎注册成为京东用户!在您注册过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意《尤其是以粗体或下划线标识的条款，因为这些条款可能会明确您应履行的务或对您的权利有所限制》。</span>
          <br />
        <span class="dialog_text">【请您注意】如果您不同意以下协议全部或任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息，阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容，并表明您同意我们可以依据协议内容来处理您的个人信息，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方(详情查看<a href="#">《订单共享与安全》</a>)。如您对以下协议内容有任何疑问，您可随时通过《京东隐私政策》中的联系方式联系我们。</span><br/>
        <br/>
        <span class="dialog_text">如您在使用我们的产品或服务中与其他用户发生争议的，依您与其他用户达成的协议处理。</span><br/><br/><br/>
        <span class="dialog_text"><a href="#">《京东用户注册协议》</a></span>
        <ul class="dialog_text">
          <li>一、服务条款的确认及接受</li>
          <li>二、服务须知</li>
          <li>三、订单</li>
          <li>四、配送和交付</li>
          <li>五、用户个人信息保护及授权</li>
          <li>六、用户行为规范</li>
          <li>七、本网站使用规范</li>
          <li>八、违约责任</li>
          <li>九、所有权及知识产权</li>
          <li>十、法律管辖适用及其他</li>
        </ul>
        <span slot="footer" class="dialog-footer">
          <el-button id="tips_btn" @click="dialogVisible = false">同意并继续</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="Register_top">
      <img src="static\icon-03.png" alt="欢迎注册" />
      <div class="Register_top_text">欢迎注册</div>
      <div class="Register_top_text2">
        <span>已有账号？</span>
        <span
          ><router-link to="/LoginPage" class="please_Register"
            >请登录</router-link
          ></span
        >
      </div>
    </div>
    <div class="Register_Mid">
      <regos_block></regos_block>
    </div>
    <div class="Register_bottom">
      <end_Info></end_Info>
    </div>
  </div>
</template>

<script>
import regos_block from "./Register/regis_block";
import end_Info from "./end_Info";
export default {
  props: [],
  data() {
    return {
      dialogVisible:true,
    };
  },
  methods: {
    handleClose() {
      this.$router.push("/Home");
    },
        init () {
      this.axios.get("/static/goodlist.json").then((res)=>{
        this.$store.commit("initData",res.data.goods);
      })
    }
  },
    created() {
    this.init();
  },
  components: {
    regos_block,
    end_Info,
  },
};
</script>

<style scope>
* {
  margin: 0px;
}
.Register_top {
  width: 1920px;
  height: 100px;
  /* background-color: coral; */
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
}
.Register_top img {
  width: 200px;
  margin: auto;
  position: relative;
  top: 5px;
  left: 450px;
  /* border:1px solid darkmagenta; */
}
.Register_view {
  width: 1920px;
  height: 680px;
  /* background-color: cyan; */
}
.Register_top_text {
  display: inline-block;
  color: #333333;
  font-size: 24px;
  position: relative;
  left: 480px;
  top: 8px;
  line-height: 80px;
  vertical-align: top;
}
.Register_top_text2 {
  display: inline-block;
  height: 30px;
  width: 140px;
  /* background-color: darkorchid; */
  position: relative;
  left: 980px;
  vertical-align: bottom;
  font-size: 16px;
  line-height: 30px;
  color: #777777;
}
.please_Register {
  color: red;
}
.please_Register:hover {
  color: red;
}
/* ---------------------------------注册部分------------------------------- */
.Register_Mid {
  display: inline-block;
  width: 1920px;
  height: 420px;
  text-align: center;
  /* background-color: tomato; */
}
/* ---------------------------------注册底部------------------------------- */
.Register_bottom {
  /* background-color: turquoise; */
  display: inline-block;
  width: 1920px;
  height: 100px;
  text-align: center;
  vertical-align: top;
  padding: 250px;
}
#tips_btn{
  width: 200px;
  background-color: #E1251B;
  color: #ffffff;
  position: relative;
  left: -500px;
}
.tips a{
  color: #E1251B;
}
.dialog_text{
  font-size: 16px;
  font-weight: 600;
}
</style>
