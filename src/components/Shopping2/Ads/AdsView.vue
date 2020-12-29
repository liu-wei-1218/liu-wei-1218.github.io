<template>
  <div class="AdsContain">
    <div class="Ads_top">
      <div class="Ads_top_menu">
        <ul>
          <li @mouseover="show_hiddenarea(1)" @mouseleave="hidden_hiddenarea">
            <a href="#">&nbsp;&nbsp;&nbsp;家用电器</a>
          </li>
          <li @mouseover="show_hiddenarea(2)" @mouseleave="hidden_hiddenarea">
            <a href="#">&nbsp;&nbsp;&nbsp;手机</a>
            <span>/</span>
            <a href="#">运营商</a>
            <span>/</span>
            <a href="#">数码</a>
          </li>
          <li @mouseover="show_hiddenarea(3)" @mouseleave="hidden_hiddenarea">
            <a href="#">&nbsp;&nbsp;&nbsp;电脑</a>
            <span>/</span>
            <a href="">办公</a>
          </li>
          <li @mouseover="show_hiddenarea(4)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;家居</a>
            <span>/</span>
            <a href="">家具</a>
            <span>/</span>
            <a href="">家装</a>
            <span>/</span>
            <a href="">厨具</a>
          </li>
          <li @mouseover="show_hiddenarea(5)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;男装</a>
            <span>/</span>
            <a href="">女装</a>
            <span>/</span>
            <a href="">童装</a>
            <span>/</span>
            <a href="">内衣</a>
          </li>
          <li @mouseover="show_hiddenarea(6)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;美妆</a>
            <span>/</span>
            <a href="">个护清洁</a>
            <span>/</span>
            <a href="">宠物</a>
          </li>
          <li @mouseover="show_hiddenarea(7)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;女鞋</a>
            <span>/</span>
            <a href="">箱包</a>
            <span>/</span>
            <a href="">钟表</a>
            <span>/</span>
            <a href="">珠宝</a>
          </li>
          <li @mouseover="show_hiddenarea(8)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;男鞋</a>
            <span>/</span>
            <a href="">运动</a>
            <span>/</span>
            <a href="">户外</a>
          </li>
          <li @mouseover="show_hiddenarea(9)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;房产</a>
            <span>/</span>
            <a href="">汽车</a>
            <span>/</span>
            <a href="">汽车用品</a>
          </li>
          <li @mouseover="show_hiddenarea(10)" @mouseleave="hidden_hiddenarea">
            <a href="#">&nbsp;&nbsp;&nbsp;母婴</a>
            <span>/</span>
            <a href="#">玩具乐器</a>
          </li>
          <li @mouseover="show_hiddenarea(11)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;食品</a>
            <span>/</span>
            <a href="">酒类</a>
            <span>/</span>
            <a href="">生鲜</a>
            <span>/</span>
            <a href="">特产</a>
          </li>
          <li @mouseover="show_hiddenarea(12)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;艺术</a>
            <span>/</span>
            <a href="">礼品鲜花</a>
            <span>/</span>
            <a href="">农资绿植</a>
          </li>
          <li @mouseover="show_hiddenarea(13)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;机票</a>
            <span>/</span>
            <a href="">酒店</a>
            <span>/</span>
            <a href="">旅游</a>
            <span>/</span>
            <a href="">生活</a>
          </li>
          <li @mouseover="show_hiddenarea(14)" @mouseleave="hidden_hiddenarea">
            <a href="">&nbsp;&nbsp;&nbsp;理财</a>
            <span>/</span>
            <a href="">众筹</a>
            <span>/</span>
            <a href="">白条</a>
            <span>/</span>
            <a href="">保险</a>
          </li>
        </ul>
        <div
          v-show="this.show_flag"
          @mouseover="show_hiddenarea"
          @mouseleave="hidden_hiddenarea"
          class="menu_show"
        >
          <AdsViewMenu></AdsViewMenu>
        </div>
      </div>

      <!-- 大轮播 -->
      <div class="Ads_mid_loop" indicator-position="outside">
        <el-carousel height="450px" :interval="5000">
          <el-carousel-item v-for="(item, index) in getloop_obj" :key="index">
            <router-link :to="get_large_loopitem(item)">
              <img :src="get_large_loop(item)" />
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 轮播组 -->
      <div class="Ads_right_loop_group">
        <div class="el-carousel__container" arrow="nerver">
          <el-carousel
            height="450px"
            :interval="5000"
            indicator-position="none"
          >
            <el-carousel-item
              v-for="(item, index) in getloop_group_1"
              :key="index"
            >
              <router-link :to="getitem1(item)">
                <img
                  style="width: 145px; height: 145px"
                  :src="getloop_url1_1(item)"
              /></router-link>
              <router-link :to="getitem2(item)">
                <img
                  style="
                    width: 145px;
                    height: 145px;
                    position: relative;
                    top: 7px;
                  "
                  :src="getloop_url1_2(item)"
              /></router-link>
              <router-link :to="getitem3(item)">
                <img
                  style="
                    width: 145px;
                    height: 145px;
                    position: relative;
                    top: 10px;
                  "
                  :src="getloop_url1_3(item)"
              /></router-link>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 信息栏 -->
      <div class="Ads_Info">
        <AdsView_Info_top></AdsView_Info_top>
        <AdsView_Info_bottom></AdsView_Info_bottom>
      </div>
    </div>
    <div class="Ads_mid">
      <div class="loop1">
        <div class="time pointer">
          <div class="time_text1">京东秒杀</div>
          <div class="lightning"><img src="static/lightning.png" /></div>
          <div class="time_text2">
            <span style="font-size: 16px">18:00点场</span> 倒计时
          </div>
          <div class="time2">
            <span id="t_h" class="time_text3">{{ t_h }}</span>
            <span class="time_text3">:</span>
            <span id="t_m" class="time_text3">{{ t_m }}</span>
            <span class="time_text3">:</span>
            <span id="t_s" class="time_text3">{{ t_s }}</span>
          </div>
        </div>
        <div class="loop1_mid">
          <div class="el-carousel__container" arrow="nerver">
            <el-carousel
              height="280px"
              indicator-position="none"
              :autoplay="false"
            >
              <el-carousel-item v-for="(item, index) in 4" :key="index">
                <div class="loop1_mid_1">
                  <router-link :to="getloop_url2_1_item(item)"
                    ><img :src="getloop_url2_1(item)"
                  /></router-link>
                  <div class="price_kill">
                    <div class="kill_title">{{ gettitle1(item) }}</div>
                    <div class="noname">
                      <div class="price-miaosha pointer">
                        ￥<span class="miaosha_text">{{
                          getprice1(item)
                        }}</span>
                      </div>
                      <div class="c1"></div>
                      <div class="c2"></div>
                      <div class="price-miaosha_bf pointer">
                        ￥{{ getBeforePrice(getprice1(item), item) }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="loop1_mid_1">
                  <router-link :to="getloop_url2_2_item(item)">
                    <img :src="getloop_url2_2(item)"
                  /></router-link>
                  <div class="price_kill">
                    <div class="kill_title">{{ gettitle2(item) }}</div>
                    <div class="noname">
                      <div class="price-miaosha pointer">
                        ￥<span class="miaosha_text ">{{
                          getprice2(item)
                        }}</span>
                      </div>
                      <div class="c1"></div>
                      <div class="c2"></div>
                      <div class="price-miaosha_bf pointer">
                        ￥{{ getBeforePrice(getprice2(item), item) }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="loop1_mid_1">
                  <router-link :to="getloop_url2_3_item(item)">
                    <img :src="getloop_url2_3(item)"
                  /></router-link>
                  <div class="price_kill">
                    <div class="kill_title">{{ gettitle3(item) }}</div>
                    <div class="noname">
                      <div class="price-miaosha pointer">
                        ￥<span class="miaosha_text">{{
                          getprice3(item)
                        }}</span>
                      </div>
                      <div class="c1"></div>
                      <div class="c2"></div>
                      <div class="price-miaosha_bf pointer">
                        ￥{{ getBeforePrice(getprice3(item), item) }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="loop1_mid_1">
                  <router-link :to="getloop_url2_4_item(item)">
                    <img :src="getloop_url2_4(item)"
                  /></router-link>
                  <div class="price_kill">
                    <div class="kill_title">{{ gettitle4(item) }}</div>
                    <div class="noname">
                      <div class="price-miaosha pointer">
                        ￥<span class="miaosha_text">{{
                          getprice4(item)
                        }}</span>
                      </div>
                      <div class="c1"></div>
                      <div class="c2"></div>
                      <div class="price-miaosha_bf pointer">
                        ￥{{ getBeforePrice(getprice4(item), item) }}
                      </div>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="loop1_right">
          <div class="el-carousel__container" arrow="nerver">
            <el-carousel
              height="270px"
              :interval="5000"
              indicator-position="none"
              style="left: -8px"
            >
              <el-carousel-item
                v-for="(item, index) in getloop_group_1"
                :key="index"
              >
                <router-link :to="geturl(item)">
                  <img
                    style="
                      width: 165px;
                      height: 190px;
                      position: relative;
                      top: 10px;
                    "
                    :src="getloop_url_right(item)"
                /></router-link>
                <div class="loop1_right_bottom">
                  <span> 全场最高减1000元！ </span>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="goods_show">
      <Goods_show></Goods_show>
    </div>
    <div class="goods_bottom1">
      <div class="goods_bottom_c1"></div>
    </div>
    <div class="goods_bottom2">
      <div class="goods_bottom_c2"></div>
    </div>
  </div>
</template>

<script>
import AdsViewMenu from "./AdsViewMenu";
import AdsView_Info_top from "./AdsView_Info_top";
import AdsView_Info_bottom from "./AdsView_Info_bottom";
import Goods_show from "./Goods_show";
export default {
  data() {
    return {
      show_flag: false,
      t_h: "00",
      t_m: "00",
      t_s: "00"
    };
  },
  components: {
    AdsView_Info_top,
    AdsView_Info_bottom,
    Goods_show,
    AdsViewMenu
  },
  methods: {
    show_hiddenarea(index) {
      this.show_flag = true;
      this.$store.commit("changeShowIndex", index);
    },
    hidden_hiddenarea() {
      this.show_flag = false;
    },
    getBeforePrice(price, item) {
      return price + item * 139;
    },
    getRTime() {
      var EndTime = new Date("2020/12/25 18:00:00"); //截止时间
      var NowTime = new Date();
      var t = EndTime.getTime() - NowTime.getTime();
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

    get_large_loop(item) {
      let index = item.good_id + 3;
      return "/static/pics/good" + index + "/1.jpg";
    },
    get_large_loopitem(item) {
      let index = item.good_id + 3;
      return "/GoodsDetail/" + index;
    },
    getloop_url1_1(item) {
      let index = item.good_id + 8;
      return "/static/pics/good" + index + "/1.jpg";
    },
    getitem1(item) {
      let index = item.good_id + 8;
      return "/GoodsDetail/" + index;
    },
    // -------------------------1--------

    getloop_url1_2(item) {
      let index = item.good_id + 10;
      return "/static/pics/good" + index + "/2.jpg";
    },
    getitem2(item) {
      let index = item.good_id + 10;
      return "/GoodsDetail/" + index;
    },
    // ----------------------2--------
    getloop_url1_3(item) {
      let index = item.good_id + 12;
      return "/static/pics/good" + index + "/2.jpg";
    },
    getitem3(item) {
      let index = item.good_id + 12;
      return "/GoodsDetail/" + index;
    },
    geturl(item) {
      let index = item.good_id + 17;
      return "/GoodsDetail/" + index;
    },
    getloop_url_right(item) {
      let index = item.good_id + 17;
      return "/static/pics/good" + index + "/1.jpg";
    },
    // ----------------------3--------
    // -------------------------------------------------------------
    getloop_url2_1(item) {
      return "/static/pics/good" + (item * 5 + 2) + "/1.jpg";
    },
    getloop_url2_1_item(item) {
      item = parseInt(item);
      return "/GoodsDetail/" + (item * 5 + 2);
    },
    gettitle1(item) {
      if (this.$store.state.goods.length > 0) {
        let title = this.$store.state.goods[item * 5 + 2].title;
        return title.substr(0, 12) + "..";
      }
    },
    getprice1(item) {
      if (this.$store.state.goods.length > 0) {
        return this.$store.state.goods[item * 5 + 2].price;
      }
    },

    getloop_url2_2(item) {
      return "/static/pics/good" + (item * 5 + 3) + "/1.jpg";
    },
    getloop_url2_2_item(item) {
      item = parseInt(item);
      return "/GoodsDetail/" + (item * 5 + 3);
    },
    gettitle2(item) {
      if (this.$store.state.goods.length > 0) {
        let title = this.$store.state.goods[item * 5 + 3].title;
        return title.substr(0, 12) + "..";
      }
    },
    getprice2(item) {
      if (this.$store.state.goods.length > 0) {
        return this.$store.state.goods[item * 5 + 3].price;
      }
    },

    getloop_url2_3(item) {
      item = parseInt(item);
      return "/static/pics/good" + (item * 5 + 4) + "/2.jpg";
    },
    getloop_url2_3_item(item) {
      item = parseInt(item);
      return "/GoodsDetail/" + (item * 5 + 4);
    },
    gettitle3(item) {
      if (this.$store.state.goods.length > 0) {
        let title = this.$store.state.goods[item * 5 + 4].title;
        return title.substr(0, 12) + "..";
      }
    },
    getprice3(item) {
      if (this.$store.state.goods.length > 0) {
        return this.$store.state.goods[item * 5 + 4].price;
      }
    },

    getloop_url2_4(item) {
      item = parseInt(item);
      return "/static/pics/good" + (item * 5 + 5) + "/1.jpg";
    },
    getloop_url2_4_item(item) {
      item = parseInt(item);
      return "/GoodsDetail/" + (item * 5 + 5);
    },
    gettitle4(item) {
      if (this.$store.state.goods.length > 0) {
        let title = this.$store.state.goods[item * 5 + 5].title;
        return title.substr(0, 12) + "..";
      }
    },
    getprice4(item) {
      if (this.$store.state.goods.length > 0) {
        return this.$store.state.goods[item * 5 + 5].price;
      }
    }
  },
  computed: {
    getloop_obj() {
      return this.$store.state.goods.slice(0, 5);
    },
    getloop_group_1() {
      return this.$store.state.goods.slice(0, 5);
    },
    judgeShow() {
      if (this.show_flag === 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  mounted() {
    setInterval(this.getRTime, 1000);
  }
};
</script>

<style scope>
.AdsContain {
  width: 1920px;
  background-color: #f0f0f0;
}
a {
  text-decoration: none;
  color: #333333;
  font-size: 14px;
  line-height: 32px;
}
/* -----------------------------------菜单--------------------------------- */
.Ads_top {
  width: 1920px;
  height: 480px;
  /* border: 1px solid red; */
  background: url(/static/pics/Ads_top_background.png);
  background-color: #f6f6f6;
}
.Ads_top_menu {
  display: inline-block;
  width: 190px;
  height: 450px;
  /* border: 1px solid slategrey; */
  position: relative;
  left: 355px;
  top: 5px;
  background-color: white;
}
.Ads_top_menu a {
  text-decoration: none;
}
.Ads_top_menu a:hover {
  color: red;
}
.Ads_top_menu ul {
  padding: 5px 0px 0px 0px;
  list-style: none;
}
.Ads_top_menu li {
  padding: 0px;
  width: 190px;
  height: 32px;
}
.Ads_top_menu li:hover {
  background-color: lightgrey;
}
.menu_show {
  width: 750px;
  height: 620px;
  position: absolute;
  left: 190px;
  top: 0px;
  background-color: #ffffff;
  display: inline-block;
  z-index: 999;
}
/* --------------------------------轮播---------------------------------- */
.Ads_right_loop img {
  float: top;
}
.Ads_mid_loop {
  display: inline-block;
  width: 590px;
  height: 450px;
  position: relative;
  left: 360px;
  top: 14px;
}
.Ads_mid_loop el-carousel-item {
  height: 590px;
}
.Ads_mid_loop img {
  width: 590px;
  height: 450px;
}
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 0px;
  /* height: 450px; */
  margin: 0;
}
.Ads_mid_loop .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.Ads_mid_loop .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.Ads_right_loop_group {
  width: 160px;
  height: 453px;
  display: inline-block;
  position: relative;
  left: 377px;
  top: 14px;
}
.el-carousel__container {
  position: relative;
  left: 4px;
  height: 100px;
}
/* 轮播active状态时的大小 */
.Ads_right_loop_group div.el-carousel__container {
  width: 160px;
  height: 170px;
}
.Ads_right_loop_group div.el-carousel__item {
  width: 160px;
  height: 170px;
}
.Ads_right_loop_group div.el-carousel__item.is-active.is-animating {
  width: 160px;
  height: 450px;
}
.Ads_right_loop_group img:hover {
  opacity: 0.7;
}
/* ---------------------------------信息栏---------------------------- */
.Ads_Info {
  width: 200px;
  height: 445px;
  display: inline-block;
  float: right;
  /* border: 1px solid red; */
  position: relative;
  right: 376px;
  top: 13px;
  background-color: white;
}
/* --------------------------------Ads_mid---------------------- */
.Ads_mid {
  width: 1920px;
  height: 303px;
  /* border: 1px solid red; */
  display: inline-block;
  /* float: left; */
}
.loop1 {
  display: inline-block;
  float: left;
  position: relative;
  left: 18.6%;
  width: 1175px;
  height: 300px;
  /* border: 1px solid red; */
  /* background-color: cornflowerblue; */
}
.pointer{
  cursor: pointer;
}
.time {
  display: inline-block;
  float: left;
  width: 200px;
  height: 100%;
  background-color: #e83632;
}
.time_text1 {
  height: 80px;
  width: 100%;
  /* background-color: salmon; */
  line-height: 80px;
  text-align: center;
  font-size: 31px;
  font-family: 微软雅黑;
  color: #ffffff;
}
.lightning {
  width: 100%;
  position: relative;
  left: 30%;
}
.time_text2 {
  height: 50px;
  width: 100%;
  /* background-color:springgreen; */
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}
.time_text3 {
  color: #ffffff;
  font-family: 微软雅黑;
  font-size: 20px;
}
#t_h {
  display: inline-block;
  height: 30px;
  width: 30px;
  background-color: #2f3430;
  line-height: 30px;
  text-align: center;
}
#t_m {
  display: inline-block;
  height: 30px;
  width: 30px;
  background-color: #2f3430;
  line-height: 30px;
  text-align: center;
}
#t_s {
  display: inline-block;
  height: 30px;
  width: 30px;
  background-color: #2f3430;
  line-height: 30px;
  text-align: center;
}
.time2 {
  width: 100%;
  height: 30px;
  text-align: center;
}
/*-----------------------------------loop_mid--------------------*/
.loop1_mid {
  vertical-align: top;
  display: inline-block;
  width: 770px;
  height: 100%;
  /* background-color: aqua; */
  position: relative;
  /* top: -18px; */
}
.loop1_mid_1 {
  display: inline-block;
  float: left;
  width: 188px;
  height: 280px;
  /* border: 1px solid black; */
  text-align: center;
  padding: 20px;
  font-size: 12px;
}
.loop1_mid_1 img {
  width: 140px;
  height: 140px;
  overflow-y: hidden;
}
.loop1_mid el-carousel-item {
  display: inline-block;
  /* background-color: brown; */
  height: 280px;
}
.el-carousel-item ::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}
.loop1_mid el-carousel-item img {
  height: 250px;
}
.el-carousel__item is-active is-animating {
  /* height: 250px; */
}
.price_kill {
  margin: auto;
  width: 160px;
  height: 67px;
  /* border: 1px solid burlywood; */
  position: relative;
  top: 20px;
}
.kill_title {
  cursor: pointer;
  line-height: 16px;
  width: 100%;
  height: 16px;
  display: inline-block;
  /* padding: 10px; */
  line-height: 16px;
  /* background-color: chartreuse; */
}
.price-miaosha {
  height: 33px;
  width: 45%;
  float: left;
  text-align: center;
  line-height: 34px;
  font-size: 12px;
  background-color: #d41815;
  display: inline-block;
  color: #ffffff;
}
.price-miaosha_bf {
  float: right;
  width: 45%;
  height: 34px;
  line-height: 34px;
  text-decoration: line-through;
  font-size: 12px;
  color: #777777;
  display: inline-block;
  position: relative;
  top: -34px;
}
.miaosha_text {
  font-size: 16px;
}
.c1 {
  display: inline-block;
  float: left;
  width: 0;
  height: 0;
  border-top: 17px solid #d41815;
  border-right: 10px solid transparent;
  border-bottom: 17px solid transparent;
  border-left: 10px solid #d41815;
}
.c2 {
  display: inline-block;
  float: left;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-right: 10px solid #ffffff;
  border-bottom: 15px solid #ffffff;
  border-left: 10px solid transparent;
  position: relative;
  left: -17px;
}
.noname {
  width: 100%;
  height: 34px;
  border: 1px solid #d41815;
  position: relative;
  top: 12px;
  left: -7px;
}
.loop1_mid div.el-carousel__item.is-active.is-animating {
  /* width: 770px; */
}
.loop1_mid div.el-carousel__container {
  height: 280px;
  width: 770px;
}
.loop1_right {
  width: 195px;
  height: 100%;
  display: inline-block;
  /* background-color: brown; */
  text-align: center;
}
.loop1_right img {
  margin: auto;
  position: relative;
  top: 50px;
}
.loop1_right_bottom {
  width: 100%;
  height: 50px;
  /* background-color: aquamarine; */
  display: inline-block;
  position: relative;
  /* top: -60px; */
  margin: auto;
  line-height: 50px;
  font-weight: 600;
  color: #e83632;
}
/* ------------------------------商品展示-------------------------------------- */
.goods_show {
  width: 1920px;
  display: inline-block;
  /* background-color:skyblue; */
  height: 1000px;
  text-align: center;
  position: relative;
}
.goods_bottom1 {
  width: 1920px;
  height: 80px;
  display: inline-block;
  background-color: #f4f4f4;
  vertical-align: top;
}
.goods_bottom_c1 {
  width: 1200px;
  height: 100%;
  margin: auto;
  background-color: chartreuse;
  background: url("/static/bottom_pic.png");
  vertical-align: top;
}
.goods_bottom2 {
  width: 1920px;
  height: 800px;
  display: inline-block;
  background-color: #f4f4f4;
  vertical-align: top;
  margin: auto;
}
.goods_bottom_c2 {
  background-color: aqua;
  vertical-align: top;
  width: 1200px;
  height: 100%;
  margin: auto;
  background: url("/static/bottom_pic3.png");
}
</style>
