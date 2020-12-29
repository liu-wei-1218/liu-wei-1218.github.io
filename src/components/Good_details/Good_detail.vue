<template>
  <div class="whole_details">
    <div class="good_detail_top">
      <div class="good_top_left">
        <span><a href="#">电脑、办公</a></span>
        <span class="el-icon-arrow-right"></span>
        <span><a href="#">电子产品</a></span>
        <span class="el-icon-arrow-right"></span>
        <span
          ><a href="#">{{ getgood_title() }}</a></span
        >
      </div>
      <div class="good_top_right">
        <div class="good_top_right_left">
          <span class="pointer">{{ getshopname() }}</span>
          <el-rate
            :value="getShopValue()"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            style="font-size: 18px"
          >
          </el-rate>
        </div>
        <div class="good_top_right_right">
          <a href="#"
            ><img src="/static/客服.png" alt="" /> <span>联系客服</span></a
          >&nbsp;&nbsp;&nbsp;
          <a href="#"
            ><img src="/static/五角星.png" alt="" /> <span>关注店铺</span></a
          >
        </div>
      </div>
    </div>
    <div class="good_middle">
      <div class="good_middle_glass">
        <div id="good_middle_glass_pic" style="width: 350px; height: 350px;">
          <vue-photo-zoom-pro
            :url="get_goodloopurl(get_now_pic())"
          ></vue-photo-zoom-pro>
        </div>
        <ul class="good_list" style="width: 350px">
          <li v-for="index in 5" :key="index">
            <img
              class="good_list_img"
              :id="now_pic == index ? 'active' : ''"
              @mouseenter="change_now_pic(index)"
              :src="get_goodloopurl(index)"
            />
          </li>
        </ul>
        <div class="good_middle_bottom">
          <img src="/static/关注.png" /><a
            href="#"
            class="good_middle_bottom_text"
            >关注</a
          >&nbsp; <img src="/static/分享.png" /><a
            href="#"
            class="good_middle_bottom_text"
            >分享</a
          >&nbsp; <img src="/static/对比.png" /><a
            href="#"
            class="good_middle_bottom_text"
            >对比</a
          >&nbsp;
          <a href="#"> <span id="jubao">举报</span></a>
        </div>
      </div>
      <div class="good_info">
        <div class="good_info_title">
          <span>{{ get_good_info_title() }}</span>
        </div>
        <div class="good_info_description">
          <span
            >2020超级新品！设计{{
              get_good_info_type()
            }}，更年轻时尚！电竞4G独显，指纹识别！</span
          >
        </div>
        <div class="good_info_miaosha">
          <div class="good_info_miaosha_c1">
            <div class="good_info_miaosha_c1_left">
              <img src="/static/秒杀.png" />&nbsp;&nbsp;京东秒杀
            </div>
            <div class="good_info_miaosha_c1_right">
              距离结束
              <span
                id="good_info_miaosha_c1_right_t_h"
                class="good_info_miaosha_c1_right_time_text3"
                >{{ this.t_h }}</span
              >
              :
              <span
                id="good_info_miaosha_c1_right_t_m"
                class="good_info_miaosha_c1_right_time_text3"
                >{{ this.t_m }}</span
              >
              :
              <span
                id="good_info_miaosha_c1_right_t_s"
                class="good_info_miaosha_c1_right_time_text3"
                >{{ this.t_s }}</span
              >
            </div>
          </div>
          <div class="good_info_miaosha_c2">
            <div class="good_info_miaosha_c2_left">
              <span class="get_good_info_text">秒 杀 价</span>
              <span class="red">￥</span
              ><span class="red get_good_info_price">{{
                get_good_info_price()
              }}</span>
              <a href="#"
                ><span
                  class="get_good_info_link"
                  style="position: relative; top: 5px"
                  >降价通知</span
                ></a
              >
            </div>
            <div class="good_info_miaosha_c2_right">
              累计评价<span class="get_good_info_link">100+</span>
            </div>
          </div>
          <div class="good_info_miaosha_c3">
            <span class="get_good_info_text">促&nbsp;&nbsp;&nbsp;&nbsp;销</span
            >&nbsp;
            <span style="border: 1px solid red; color: red">赠品</span>&nbsp;
            <img src="/static/赠品1.jpg" /><span
              class="good_info_miaosha_c3_send"
              >×1</span
            >&nbsp; <img src="/static/赠品2.jpg" /><span
              class="good_info_miaosha_c3_send"
              >×1</span
            >&nbsp;
            <span class="get_good_info_text"
              >(条件：购买1件及以上，赠完即止)</span
            >
          </div>
          <div class="good_info_miaosha_c4">
            <span style="border: 1px solid red; color: red">限购</span>&nbsp;
            <span style="font-size: 12px; color: #666666"
              >该商品购买1-10件时享受单件价￥{{
                get_good_info_price()
              }}.00,超出数量以结算价为准</span
            >
          </div>
        </div>
        <div class="good_send">
          <div class="good_send_c1">
            <span class="grey">增值业务</span>
            <img id="good_send_c1_img_recircle" src="/static/循环1.png" />
            <span class="good_send_recircle"> 高价回收，极速到账 </span>
          </div>
          <div class="good_send_c2">
            <span class="grey">配&nbsp; 送&nbsp;至</span
            ><input
              type="text"
              id="good_send_input"
              :value="get_nowuser_address()"
              readonly
            />
            <span class="grey">有货&nbsp;&nbsp;</span>
            <span class="grey">支持&nbsp;&nbsp;</span>
            <span class="blue">极速审核</span><span class="division">|</span>
            <span class="blue">送货上门</span><span class="division">|</span>
            <span class="blue">货到付款</span><span class="division">|</span>
            <span class="blue">运费险</span><br />
            <span class="grey" style="margin-left: 50px"
              >免运费<img src="/static/问号.png"
            /></span>
          </div>
          <div class="good_send_c3">
            <span class="grey">由</span>
            <span style="color: #e4393c"
              >&nbsp;{{ get_good_info_shopname() }}&nbsp;</span
            >
            <span class="grey">从当地发货，并提供售后服务</span>
          </div>
        </div>
        <div class="enter_shopcar">
          <button
            class="btn btn-default"
            style="height: 40px"
            :disabled="listner"
            @click="sub_num()"
          >
            -
          </button>
          <div class="num">
            {{ this.num }}
          </div>

          <button
            class="btn btn-default"
            style="height: 40px"
            @click="add_num()"
          >
            +
          </button>
          <div id="gift">
            <img src="/static/礼物.png" />
          </div>
          <div class="enter_button white" @click="enter_shopcar()">
            加入购物车
          </div>
          <div class="tips">
            <span class="grey tips_text pointer"
              >温馨提示&nbsp;&nbsp;&nbsp;&nbsp;·支持7天无理由退货(激活后不支持)</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="goods_recommend">
      <div class="goods_recommend_top">
        <div class="shopper_recom white pointer">店长推荐</div>
      </div>
      <div class="goods_recommend_pic">
        <ul class="goods_recommend_pic_list">
          <li><img @click="jump(1)" :src="get_recommend_picurl(1)" /></li>
          <li><img @click="jump(2)" :src="get_recommend_picurl(2)" /></li>
          <li><img @click="jump(3)" :src="get_recommend_picurl(3)" /></li>
          <li><img @click="jump(4)" :src="get_recommend_picurl(4)" /></li>
          <li><img @click="jump(5)" :src="get_recommend_picurl(5)" /></li>
          <li><img @click="jump(6)" :src="get_recommend_picurl(6)" /></li>
        </ul>
        <div class="goods_recommend_pic_price">
          <span class="goods_recommend_pic_price_t red"
            >￥{{ get_recommend_pic_price(1) }}</span
          >
          <span class="goods_recommend_pic_price_t red"
            >￥{{ get_recommend_pic_price(2) }}</span
          >
          <span class="goods_recommend_pic_price_t red"
            >￥{{ get_recommend_pic_price(3) }}</span
          >
          <span class="goods_recommend_pic_price_t red"
            >￥{{ get_recommend_pic_price(4) }}</span
          >
          <span class="goods_recommend_pic_price_t red"
            >￥{{ get_recommend_pic_price(5) }}</span
          >
          <span class="goods_recommend_pic_price_t red"
            >￥{{ get_recommend_pic_price(6) }}</span
          >
        </div>
      </div>
      <div class="goods_details_info">
        <div class="goods_details_info_left">
          <div class="goods_details_info_left_top pointer">
            {{ getshopname() }}
            <img src="/static/客服.png" />
          </div>
          <div class="goods_details_info_left_middle">
            &nbsp;&nbsp;店铺星级&nbsp;&nbsp;
            <el-rate
              :value="getShopValue()"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate
            ><br />
            &nbsp;&nbsp;<span class="grey"
              >商品评价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            ><span class="red">{{ getShopValue() }}</span
            ><br />
            &nbsp;&nbsp;<span class="grey"
              >物流履约&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            ><span class="red">{{ getSendValue() }}</span
            ><br />
            &nbsp;&nbsp;<span class="grey"
              >售后服务&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            ><span class="red">{{ getAfterValue() }}</span
            ><br />
          </div>
          <div class="goods_details_info_left_bottom">
            <div class="goods_details_info_left_bottom_content">
              <img src="/static/房子.png" />
              <span><a href="#">进店逛逛</a></span>
            </div>
            <div class="goods_details_info_left_bottom_content">
              <img src="/static/五角星.png" />
              <span><a href="#">关注店铺</a></span>
            </div>
          </div>
        </div>
        <div class="goods_details_info_right">
          <div class="goods_details_info_right_top">
            <div class="goods_details_info_right_top_c1 white pointer">
              商品介绍
            </div>
            <div
              class="goods_details_info_right_top_c2 white"
              @click="enter_shopcar()"
            >
              加入购物车
            </div>
          </div>
          <div class="goods_details_info_right_bottom grey">
            <div class="goods_details_info_right_bottom_top">
              <span>品牌：{{ getgood_title() }} </span>
            </div>
            <div class="goods_details_info_right_bottom_bottom grey">
              <table class="goods_details_info_right_bottom_bottom_table grey">
                <tr>
                  <td width="200px">
                    商品名称:{{ this.choosenGoods.good_name }}
                  </td>
                  <td>商品编号:{{ this.choosenGoods.shop_num }}</td>
                  <td>店铺:{{ this.choosenGoods.shop_name }}</td>
                  <td>商品毛重:{{ this.choosenGoods.weight }}</td>
                </tr>
                <tr>
                  <td>显卡类别:{{ this.choosenGoods.XK }}</td>
                  <td>分辨率:{{ this.choosenGoods.FBL }}</td>
                  <td>类型:{{ this.choosenGoods.type }}</td>
                  <td>厚度:{{ this.choosenGoods.height }}</td>
                </tr>
                <tr>
                  <td>屏幕尺寸:{{ this.choosenGoods.size }}</td>
                  <td>内存容量:{{ this.choosenGoods.in_size }}</td>
                  <td>处理器:{{ this.choosenGoods.CLQ }}</td>
                  <td>待机时长:{{ this.choosenGoods.time }}</td>
                </tr>
                <tr>
                  <td>颜色:{{ this.choosenGoods.color }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="evaluate">
        <div class="evaluteTop">
          <div class="evaluteTopText white pointer">商品评价</div>
        </div>
        <div class="evaluteMiddle">
          <div
            v-show="getEvaluteNum() === 0 ? true : false"
            class="evaluteMiddleNoevaluates"
          >
            当前暂无用户发表评价，快来评价吧
          </div>
          <div
            v-show="getEvaluteNum() > 0 ? true : false"
            v-for="(item, index) in getEvalute()"
            :key="index"
            class="evaluteMiddleEvaluates"
          >
            <div class="usersEvaluteContain">
              <div class="usersEvaluteContainName">
                <span>{{ item.name }}</span>
              </div>
              <div class="usersEvaluteContainConnent">
                <span>{{ item.content }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="evaluteBottom">
          <input
            id="evaluteInput"
            style="width: 800px; height: 60px"
            :disabled="false"
          />
          <div class="evaluteBottomConfirm" @click="evalute()">发表评价</div>
        </div>
      </div>
      <div class="good_after white">
        <After></After>
      </div>
    </div>
  </div>
</template>

<script>
import After from "./after.vue";
export default {
  props: [],
  components: {
    After
  },
  data() {
    return {
      choosenGoods: "",
      detail_id: this.$route.params.id, //获取到传过来的参数
      now_pic: 1,
      num: 1,
      t_h: "00",
      t_m: "00",
      t_s: "00",
      move_time: 0,
      evalutes: ""
    };
  },
  methods: {
    getAfterValue() {
      return this.choosenGoods.shop_score - 0.5;
    },
    getSendValue() {
      return this.choosenGoods.shop_score - 1;
    },
    getShopValue() {
      return this.choosenGoods.shop_score;
    },
    getgood_title() {
      return this.choosenGoods.good_name;
    },
    getshopname() {
      return this.choosenGoods.shop_name;
    },
    get_goodloopurl(item) {
      return "/static/pics/good" + this.detail_id + "/" + item + ".jpg";
    },
    change_now_pic(index) {
      this.now_pic = index;
    },
    get_now_pic() {
      let id = parseInt(this.now_pic);
      return id;
    },
    get_good_info_title() {
      return this.choosenGoods.title;
    },
    get_good_info_type() {
      return this.choosenGoods.type;
    },
    get_good_info_price() {
      return this.choosenGoods.price;
    },
    get_nowuser_address() {
      if (this.$store.state.now_user === "") {
        return "江苏省苏州市常熟市";
      } else {
        return this.$store.state.now_user.address;
      }
    },
    get_good_info_shopname() {
      return this.choosenGoods.shop_name;
    },
    add_num() {
      this.num++;
    },
    sub_num() {
      this.num--;
    },
    enter_shopcar() {
      let move_obj = document.getElementById("gift");
      this.move_time = 0;
      move_obj.style.left = 150 + "px";
      move_obj.style.top = 350 + "px";
      if (this.$store.state.now_user == "") {
        this.$router.push("/LoginPage");
        this.$message({
          message: "请先登陆",
          type: "warning"
        });
      } else {
        let index = -1;
        let arr = JSON.parse(window.localStorage.getItem("JD_users"));
        let i, j;
        for (i = 0; i < arr.length; i++) {
          if (arr[i].username === this.$store.state.now_user.username) {
            index = i;
          }
        }
        for (j = 0; j < this.$store.state.now_user.shopcar.length; j++) {
          if (this.$store.state.now_user.shopcar[j].id === this.detail_id) {
            //如果在购物车里已经有这个了
            // console.log("购物车已经有这个宝贝了");
            let num_obj = { c1: j, c2: this.num }; //commit传多个参数要以对象的方式
            this.$store.commit("change_num", num_obj);
            let now_shopcar = JSON.parse(
              JSON.stringify(this.$store.state.now_user.shopcar)
            );
            arr[index].shopcar = now_shopcar;
            window.localStorage.setItem("JD_users", JSON.stringify(arr));
            move_obj.style.display = "inline-block";
            var time = setInterval(() => {
              this.move_gift();
              this.move_time++;
              if (this.move_time >= 30) {
                move_obj.style.display = "none";
                clearInterval(time);
              }
            }, 50);
            return true;
          }
        }
        //没有返回说明购物车中没有这个商品
        let shopcar_good = {
          id: this.detail_id,
          num: this.num,
          flag: 0
        };
        this.$store.commit("addnew_good", shopcar_good);
        arr[index] = this.$store.state.now_user;
        window.localStorage.setItem("JD_users", JSON.stringify(arr));

        move_obj.style.display = "inline-block";
        time = setInterval(() => {
          this.move_gift();
          this.move_time++;
          if (this.move_time >= 30) {
            move_obj.style.display = "none";
            clearInterval(time);
          }
        }, 50);
      }
    },
    get_recommend_picurl(item) {
      let id = parseInt(this.detail_id);
      let t = (item + id) % 50;
      if (t == 0) {
        t++;
      }
      return "static/pics/good" + t + "/1.jpg";
    },
    get_recommend_pic_price(item) {
      let id = parseInt(this.detail_id);
      let t = (item + id) % 50;
      if (t == 0) {
        t++;
      }
      if (this.choosenGoods != "") {
        return this.choosenGoods.price;
      }
    },
    get_recommend_url(item) {
      let id = parseInt(this.detail_id);
      let t = (item + id) % 50;
      if (t == 0) {
        t++;
      }
      return "/GoodsDetail/" + t;
    },
    jump(item) {
      let id = parseInt(this.detail_id);
      let t = (item + id) % 50;
      if (t == 0) {
        t++;
      }
      this.$route.params.id = t;
      this.$router.push("/GoodsDetail/" + t);
    },
    getRTime() {
      var EndTime = new Date("2020/12/25 18:00:00"); //截止时间
      var NowTime = new Date();
      var t = EndTime.getTime() - NowTime.getTime();

      //累减
      var d = Math.floor(t / 1000 / 60 / 60 / 24);
      t -= d * (1000 * 60 * 60 * 24);
      var h = Math.floor(t / 1000 / 60 / 60);
      t -= h * 60 * 60 * 1000;
      var m = Math.floor(t / 1000 / 60);
      t -= m * 60 * 1000;
      var s = Math.floor(t / 1000);
      if (h < 10) {
        h = "0" + h;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
      this.t_h = h;
      this.t_m = m;
      this.t_s = s;
    },
    move_gift() {
      let obj = document.getElementById("gift");
      let nowleft = obj.offsetLeft;
      let nowtop = obj.offsetTop;
      obj.style.left = nowleft + 10 + "px";
      obj.style.top = nowtop - 17 + "px";
    },
    getEvaluteNum() {
        return this.evalutes.length;
    },
    getEvalute() {
      if (this.evalutes != "") {
        return this.evalutes;
      }
    },
    evalute() {
      if (this.$store.state.now_user === "") {
        this.$message.error("请先登录哦~");
        this.$router.push("/LoginPage");
      } else {
        let text = document.getElementById("evaluteInput").value;
        let eva = { name: this.$store.state.now_user.username, content: text };
        let ind = this.detail_id - 1;
        let obj = { index: ind, evalute: eva };
        this.evalutes.push(obj.evalute);
        document.getElementById("evaluteInput").value = "";
      }
    },
    init() {
        this.axios.get("/static/goodlist.json").then(res => {
        this.choosenGoods = res.data.goods[this.$route.params.id - 1];
        this.evalutes = this.choosenGoods.evalute;
      });
    }
  },
  created() {
    this.init();
  },
  mounted() {
    setInterval(this.getRTime, 1000);
  },
  computed: {
    listner() {
      return this.num <= 1 ? true : false;
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.move {
  margin-right: 100px;
}
.whole_details {
  width: 1920px;
  height: 1000px;
  background-color: #ffffff;
}
/* -------------------------------Top---------------------------- */
.good_detail_top {
  width: 1920px;
  height: 40px;
  background-color: #f2f2f2;
  display: inline-block;
}
.good_detail_top a {
  color: #777777;
}
.good_top_left {
  float: left;
  width: 1056px;
  height: 100%;
  display: inline-block;
  opacity: 0.7;
  font-size: 12px;
  /* vertical-align: top; */
  line-height: 40px;
  text-align: center;
}
.good_top_right {
  float: right;
  width: 864px;
  height: 100%;
  display: inline-block;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
}
.good_top_right_left {
  display: inline-block;
  width: 400px;
  height: 100%;
  float: left;
  text-align: right;
  font-size: 15px;
}
.good_top_right_right {
  display: inline-block;
  width: 464px;
  height: 100%;
  float: right;
  /* background-color: deepskyblue; */
  font-size: 14px;
  text-align: left;
}
a {
  text-decoration: none;
}
.top a:hover {
  color: #e1251b;
}
.el-rate {
  height: 40px;
  display: inline-block;
  width: 200px;
  /* vertical-align: top; */
  line-height: 12px;
  position: relative;
  left: -20px;
  text-align: center;
}
.el-rate__item {
  position: relative;
  top: 5px;
}
.el-rate__text {
  position: relative;
  top: 5px;
}
/* -------------------------------Middle---------------------------- */
.good_middle {
  width: 1920px;
  height: 500px;
  display: inline-block;
  /* background-color: lavender; */
  /* float: top; */
  vertical-align: top;
}
.good_middle_glass {
  display: inline-block;
  width: 350px;
  height: 460px;
  background-color: lightcyan;
  position: relative;
  left: 400px;
}

.good_middle_glass img {
  width: 350px;
  height: 350px;
  /* margin-bottom: 15px; */
  vertical-align: top;
  /* float:top; */
}
#good_loop {
  position: relative;
  /* top: -58px; */
  margin-bottom: 15px;
  border: 1px solid rgba(242, 242, 242, 0.5);
}
.good_middle_bottom {
  width: 100%;
  height: 60px;
  /* background-color: #e1251b; */
  display: inline-block;
}
.good_list ul {
  display: inline-block;
  width: 350px;
  padding: 0px;
  margin: auto;
  height: 40px;
}
.good_middle ul {
  margin: auto;
  text-align: center;
  position: relative;
  left: -10px;
}
.good_middle li {
  list-style: none;
  float: left;
  margin: 15px 5px;
}

.good_list .good_list_img {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
}
#active {
  border: 2px solid red;
}
.mouse-cover-canvas {
  position: relative;
  left: -300px !important;
  top: 150px !important;
  border: 1px solid red;
}
.mouse-cover {
  position: relative;
  left: -300px !important;
  top: 150px !important;
  border: 1px solid red;
}
.good_middle_bottom {
  display: inline-block;
  width: 100%;
  height: 35px;
  /* background-color: royalblue; */
  line-height: 35px;
  text-indent: 10px;
  text-align: left;
  font-size: 12px;
}
.good_middle_bottom a {
  text-decoration: none;
}
.good_middle_bottom a:hover {
  color: red;
}
.good_middle_bottom_text {
  position: relative;
  color: #777777;
}
.good_middle_bottom img {
  position: relative;
  top: 10px;
  width: 16px;
  height: 16px;
}
#jubao {
  position: relative;
  left: 150px;
  color: #777777;
}
/* ---------------------good_info------------------- */
.good_info {
  display: inline-block;
  width: 500px;
  height: 458px;
  background-color: #ffffff;
  /* background-color: royalblue; */
  position: absolute;
  left: 765px;
}
.good_info_title {
  width: 100%;
  height: 50px;
  /* background-color: tomato; */
  display: inline-block;
  color: #666;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  text-indent: 20px;
}
.good_info_description {
  width: 100%;
  height: 24px;
  /* background-color: violet; */
  font-size: 12px;
  color: #ff1169;
  line-height: 24px;
  /* text-indent: 20px; */
}
.good_info_miaosha {
  width: 100%;
  height: 150px;
  background-color: #f3f3f3;
}
.good_info_miaosha_c1 {
  width: 100%;
  height: 35px;
  background-color: #ff1169;
  color: #f2f2f2;
}
.good_info_miaosha_c1_left img {
  width: 24px;
  height: 24px;
  display: inline-block;
  line-height: 35px;
}
.good_info_miaosha_c1_left {
  width: 350px;
  height: 100%;
  display: inline-block;
  line-height: 35px;
  /* background-color: chartreuse; */
  text-indent: 10px;
  font-size: 15px;
  border: 0px;
}
.good_info_miaosha_c1_right {
  width: 150px;
  height: 100%;
  /* background-color: blue; */
  display: inline-block;
  vertical-align: top;
  border: 0px;
  float: right;
  line-height: 35px;
  font-size: 12px;
}
.good_info_miaosha_c1_right span {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background-color: black;
  border-radius: 10%;
  text-align: center;
  line-height: 20px;
}
.good_info_miaosha_c2 {
  /* background-color: cornflowerblue; */
  width: 100%;
  height: 40px;
}
.good_info_miaosha_c2_left {
  width: 420px;
  display: inline-block;
  height: 100%;
  /* background-color: cyan; */
  line-height: 40px;
  text-indent: 5px;
  vertical-align: top;
}
.good_info_miaosha_c2_left span {
  height: 100%;
  display: inline-block;
  vertical-align: top;
}
.get_good_info_link {
  font-size: 6px;
  color: #005aa0;
}
.get_good_info_text {
  font-size: 6px;
  color: #777777;
}
.red {
  color: red;
}
.get_good_info_price {
  font-size: 22px;
}
.good_info_miaosha_c2_right {
  display: inline-block;
  height: 100%;
  width: 80px;
  /* background-color: #ff1169; */
  float: right;
  border-left: 1px solid rgb(226, 226, 226);
  text-align: center;
  font-weight: 600;
}
.good_info_miaosha_c3 {
  width: 100%;
  height: 50px;
  display: inline-block;
  /* background-color: lightskyblue; */
  line-height: 50px;
  text-indent: 12px;
}
.good_info_miaosha_c3 img {
  display: inline-block;
  vertical-align: middle;
}
.good_info_miaosha_c3_send {
  font-size: 10px;
  color: #df3033;
}
.good_info_miaosha_c4 {
  width: 100%;
  height: 30px;
  display: inline-block;
  /* background-color: salmon; */
  line-height: 30px;
  text-indent: 59px;
}
.good_send {
  width: 100%;
  height: 130px;
  /* background-color: skyblue; */
  display: inline-block;
}
.good_send_c1 {
  width: 100%;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  background-color: white;
  font-size: 12px;
}
.good_send_recircle {
  width: 120px;
  text-align: center;
  height: 20px;
  display: inline-block;
  line-height: 20px;
  border-radius: 35%;
  color: #13227a;
  border: 1px solid rgba(19, 34, 122, 0.3);
}
#good_send_c1_img_recircle {
  margin-left: 6px;
  position: relative;
  /* left: 1px; */
}
#good_send_input {
  outline: none;
  font-size: 12px;
  color: #777777;
  border: 1px solid #999999;
  vertical-align: top;
}
.good_send_c2 {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  height: 44px;
  /* background-color: aqua; */
  font-size: 12px;
  line-height: 20px;
}
.grey {
  color: #999999;
}
.blue {
  color: #13227a;
}
.division {
  color: #999999;
  opacity: 0.5;
  margin-left: 5px;
  margin-right: 5px;
}
.good_send_c3 {
  width: 100%;
  height: 25px;
  display: inline-block;
  /* background-color: pink; */
  font-size: 12px;
  line-height: 20px;
  vertical-align: top;
  text-indent: 50px;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
}
/* ---------------------------加入购物车------------------------- */
.enter_shopcar {
  width: 100%;
  height: 81px;
  /* background-color:blueviolet; */
  vertical-align: top;
  display: inline-block;
  text-indent: 0px;
}
#gift {
  display: none;
  position: absolute;
  left: 150px;
  height: 0px;
}
.num {
  width: 50px;
  height: 40px;
  display: inline-block;
  border: 1px solid rgb(227, 229, 235);
  vertical-align: top;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
}
.white {
  color: #ffffff;
}
.enter_button {
  vertical-align: top;
  display: inline-block;
  width: 130px;
  height: 40px;
  background-color: rgb(223, 48, 51);
  line-height: 40px;
  text-align: center;
  font-weight: 600;
  position: relative;
  left: 60px;
  cursor: pointer;
}
.tips {
  width: 100%;
  height: 40px;
  /* background-color: aqua; */
  display: inline-block;
  vertical-align: top;
}
.tips_text {
  display: inline-block;
  line-height: 40px;
  text-indent: 10px;
}
/* -----------------------------goods_recommend-------------------------- */
.goods_recommend {
  width: 1200px;
  height: 0px;
  /* background-color: aqua; */
  position: absolute;
  left: 320px;
}
.goods_recommend_top {
  width: 100%;
  height: 40px;
  display: inline-block;
  background-color: #f7f7f7;
}
.shopper_recom {
  width: 105px;
  height: 100%;
  background-color: rgb(228, 57, 60);
  line-height: 40px;
  text-align: center;
}
.goods_recommend_pic {
  width: 100%;
  height: 161px;
  display: inline-block;
  /* background-color: royalblue; */
}
.goods_recommend_pic ul {
  display: inline-block;
  padding: 0px;
  margin: auto;
  list-style: none;
}
.goods_recommend_pic li {
  float: left;
  margin: 0px 40px 0px 0px;
}
.goods_recommend_pic_list img {
  width: 160px;
  height: 160px;
  display: inline-block;
  cursor: pointer;
}
/* --------------------------goods_details_info-------------------------- */
.goods_details_info {
  width: 1200px;
  height: 400px;
  display: inline-block;
  /* background-color: pink; */
  vertical-align: top;
  position: relative;
  top: 50px;
}
.goods_details_info_left {
  display: inline-block;
  width: 230px;
  height: 170px;
  background-color: #ffffff;
  vertical-align: top;
  float: left;
}
.goods_details_info_left_top {
  width: 100%;
  height: 30px;
  background-color: rgb(247, 247, 247);
  display: inline-block;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
  color: #666;
}
.goods_details_info_left_middle .el-rate {
  display: inline-block;
  width: 160px;
  height: 30px;
  position: absolute;
  left: 70px;
}
.goods_recommend_pic_price {
  width: 100%;
  height: 40px;
  display: inline-block;
  /* background-color: seagreen; */
  /* vertical-align: top; */
  line-height: 32px;
  float: top;
}
.goods_recommend_pic_price_t {
  display: inline-block;
  width: 100px;
  /* background-color: salmon; */
  margin: 0px 46px;
  text-align: center;
  height: 30px;
  line-height: 24px;
  position: relative;
  left: -10px;
  /* font-size: px; */
}
.goods_details_info_left_middle {
  width: 100%;
  height: 90px;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(227, 229, 235);
}
.goods_details_info_left_bottom {
  width: 100%;
  height: 50px;
  /* background-color: sandybrown; */
  display: inline-block;
  text-align: center;
  line-height: 50px;
}
.goods_details_info_left_bottom_content {
  display: inline-block;
  width: 94px;
  height: 40px;
  background-color: rgb(247, 247, 247);
  margin: 0px 6px;
  line-height: 40px;
}
/* -------------------------goods_details_info_right------------- */
.goods_details_info_right {
  width: 970px;
  height: 210px;
  display: inline-block;
  float: left;
  background-color: rgb(248, 248, 248);
}
.goods_details_info_right_top {
  width: 100%;
  height: 40px;
  /* background-color: salmon; */
  border-bottom: 1px solid rgb(228, 57, 60);
}
.goods_details_info_right_top_c1 {
  width: 110px;
  height: 100%;
  background-color: rgb(228, 57, 60);
  line-height: 40px;
  text-align: center;
  border: 0px;
  display: inline-block;
}
.goods_details_info_right_top_c2 {
  width: 100px;
  height: 80%;
  line-height: 32px;
  display: inline-block;
  float: right;
  background-color: rgb(228, 57, 60);
  vertical-align: middle;
  margin: 4px 10px 0px 0px;
  text-align: center;
  cursor: pointer;
}
/* ---------------------goods_details_info_right_bottom------------ */
.goods_details_info_right_bottom_top {
  display: inline-block;
  width: 100%;
  height: 50px;
  /* background-color: violet; */
  line-height: 50px;
  text-indent: 50px;
  font-size: 14px;
}
.goods_details_info_right_bottom_bottom {
  width: 100%;
  height: 100px;
  /* background-color: turquoise; */
  display: inline-block;
}
.goods_details_info_right_bottom_bottom_table {
  font-size: 12px;
  width: 80%;
  height: 100%;
  /* border: 1px solid black; */
  margin: auto;
  position: relative;
  left: -50px;
}
/* --------------------------商品评价------------------------------ */
.evaluate {
  width: 970px;
  height: 500px;
  display: inline-block;
  position: relative;
  left: 230px;
  background-color: #f8f8f8;
}
.evaluteTop {
  width: 100%;
  height: 40px;
  /* background-color: cornflowerblue; */
  border-bottom: 1px solid rgb(228, 57, 60);
}
.evaluteTopText {
  width: 110px;
  height: 100%;
  line-height: 40px;
  background-color: rgb(228, 57, 60);
  text-align: center;
}
.evaluteMiddle {
  width: 100%;
  height: 400px;
  background-color: #f8f8f8;
  overflow: auto;
}
.evaluteMiddleNoevaluates {
  width: 100%;
  line-height: 40px;
  color: #777777;
  font-size: 20px;
}
.evaluteMiddleEvaluates {
  width: 100%;
  line-height: 40px;
  color: #777777;
  font-size: 16px;
}
.evaluteBottom {
  width: 100%;
  height: 60px;
  background-color: #f0f0f0;
  vertical-align: top;
  line-height: 60px;
}
.evaluteBottomConfirm {
  display: inline-block;
  width: 100px;
  height: 50px;
  background-color: navajowhite;
  text-align: center;
  line-height: 50px;
  margin: 0px 10px 0px 40px;
  border-radius: 10%;
  cursor: pointer;
}
.usersEvaluteContain {
  width: 100%;
  height: 150px;
  /* background-color: navajowhite; */
  border-bottom: 1px solid lightgray;
}
.usersEvaluteContainName {
  height: 40px;
  width: 100%;
  text-indent: 15px;
  background-color: mintcream;
}
.usersEvaluteContainConnent {
  width: 95%;
  height: 110px;
  float: right;
  /* background-color: palegreen; */
}
/* --------------------------good_after-------------------------- */
.good_after {
  width: 1200px;
  height: 810px;
  /* background-color: skyblue; */
  display: inline-block;
  position: relative;
  top: 350px;
}
</style>
