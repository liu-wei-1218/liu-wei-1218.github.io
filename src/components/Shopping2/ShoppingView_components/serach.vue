<template>
  <div class="search_comp">
    <!-- 存放logo的div -->
    <div class="img_logo">
      <img id="jd_icon" src="/static/pics/icon-01.png" />
    </div>
    <!-- 搜索框及其外部 -->
    <div id="search_whole">
      <div class="search_area1">
        <input id="search_input_text" />
        <div class="camera pointer">
          <i style="font-size: 20px" class="el-icon-camera"></i>
        </div>
        <div class="search_pic" @click="searchForGoods()">
          <a href="#"
            ><img
              id="search01"
              src="/static/pics/search01.png"
              style="margin: 5px 17px"
          /></a>
        </div>
      </div>
      <el-dropdown id="shop_car_down" trigger="click">
        <div class="shop_car" style="text-align: center" @click="show_shopcar()">
          <div class="shop_car_num" style="font-size: 12px">{{ get_now_shopnum() }}</div>
          <img id="shop_car_img" src="/static/pics/shopping_car.png" />
          &nbsp;&nbsp;&nbsp;
          <span class="shop_car_text" style="font-size: 12px">我的购物车</span>
        </div>
        <el-dropdown-menu slot="dropdown" show-timeout="3000">
          <Shopcar></Shopcar>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="search_bottom">
        <div class="container">
          <el-carousel indicator-position="none" :interval="5000" arrow="never">
            <el-carousel-item
              style="
                height: 20px;
                width: 70px;
                line-height: 20px;
                font-size: 12px;
                color: red;
              "
            >
              跑步治愈购
            </el-carousel-item>
            <a href="#"
              ><el-carousel-item
                style="
                  height: 20px;
                  width: 70px;
                  line-height: 20px;
                  font-size: 12px;
                  color: red;
                "
                >生鲜大狂欢</el-carousel-item
              ></a
            >
            <a href="#"
              ><el-carousel-item
                style="
                  height: 20px;
                  width: 70px;
                  line-height: 20px;
                  font-size: 12px;
                  color: red;
                "
                >家电双十二</el-carousel-item
              ></a
            >
            <a href="#"
              ><el-carousel-item
                style="
                  height: 20px;
                  width: 70px;
                  line-height: 20px;
                  font-size: 12px;
                  color: red;
                "
                >工业年末庆</el-carousel-item
              ></a
            >
          </el-carousel>
        </div>
        <div class="search_othertext">
          <ul>
            <a href="#"><li class="search_othertext_li search_t1">1元抢</li></a>
            <a href="#"
              ><li class="search_othertext_li search_t2">爆款5折</li></a
            >
            <a href="#"
              ><li class="search_othertext_li search_t3">进口日</li></a
            >
            <a href="#"
              ><li class="search_othertext_li search_t4">0元限量</li></a
            >
            <a href="#"
              ><li class="search_othertext_li search_t5">电脑5折</li></a
            >
            <a href="#"
              ><li class="search_othertext_li search_t6">母婴好物</li></a
            >
            <a href="#"
              ><li class="search_othertext_li search_t7">家电双12</li></a
            >
            <a href="#"
              ><li class="search_othertext_li search_t8">潮流服饰</li></a
            >
          </ul>
        </div>
      </div>
      <div class="area1_bottom">
        <ul class="area1_bottom_group">
          <strong
            ><a href="#"><li class="fore1">秒杀</li></a></strong
          >
          <strong
            ><a href="#"><li class="fore2">优惠券</li></a></strong
          >
          <a href="#"><li class="fore3 fore">PLUS会员</li></a>
          <a href="#"><li class="fore4 fore">品牌闪购</li></a>
          <a href="#"><li class="fore5 fore">拍卖</li></a>
          <a href="#"><li class="fore6 fore">京东家电</li></a>
          <a href="#"><li class="fore7 fore">京东超市</li></a>
          <a href="#"><li class="fore8 fore">京东生鲜</li></a>
          <a href="#"><li class="fore9 fore">京东国际</li></a>
          <a href="#"><li class="fore10 fore">京东金融</li></a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Shopcar from "./shopcar.vue";
export default {
  props: [],
  data() {
    return {};
  },
  components: {
    Shopcar,
  },
  methods: {
    get_now_shopnum() {
      if (this.$store.state.now_user == "") {
        // console.log("当前用户为空");
        return 0;
      } else {
        // console.log(
        //   "当前用户的购物车数量为：" + this.$store.state.now_user.shopcar.length
        // );
        return this.$store.state.now_user.shopcar.length;
      }
    },
    show_shopcar(){
      if(this.$store.state.now_user==""){
        this.$message.error("请先登录哦~");
        this.$router.push("/LoginPage");
        return true;
      }
    },
    searchForGoods() {
      let searchString = document.getElementById("search_input_text").value;
      let i,j=0;
      let result = new Array()
      for(i=0;i<50;i++){
        let title =this.$store.state.goods[i].title;
        if(title.search(searchString)!=-1){
          result[j++]=i+1;
        }
      }
      this.$store.commit("setSelectResult",result);
      this.$router.push("/SearchPage");
    }
  },
};
</script>

<style scope>
.search_comp {
  width: 1920px;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
}
#jd_icon {
  width: 130px;
  height: 130px;
  position: relative;
  left: 15%;
}

#search_input_text {
  width: 492px;
  height: 33px;
  position: relative;
  top: 0px;
  border: 2px solid red;
  /* outline: none; */
  /* background-color: aqua; */
  caret-color: grey;
  text-shadow: none;
  border: 0px;
  padding: 0px;
  text-indent: 15px; /*设置缩进*/
}

#search_input_text:focus {
  width: 492px;
  height: 33px;
  position: relative;
  top: 0px;
  /* border: 2px solid red; */
  /* outline: none; */
  caret-color: grey;
  text-shadow: none;
  outline: none;
  padding: 0px;
}

.camera {
  width: 20px;
  height: 20px;
  color: #777777;
  position: relative;
  left: 460px;
  top: -26px;
  opacity: 0.7;
}
.camera:hover {
  color: #e1251b;
}
#search_whole {
  display: inline-block;
  width: 750px;
  height: 130px;
  /* background-color: aqua; */
  position: relative;
  left: 420px;
}
.search_area1 {
  /* float: left; */
  display: inline-block;
  width: 556px;
  height: 38px;
  border: 2px solid red;
  position: relative;
  left: 50px;
  top: 25px;
  /* background-color: blueviolet; */
}
.search_t1 {
  width: 44px;
}
.search_t2 {
  width: 54px;
}
.search_t3 {
  width: 42px;
}
.search_t4 {
  width: 54px;
}
.search_t5 {
  width: 54px;
}
.search_t6 {
  width: 55px;
}
.search_t7 {
  width: 58px;
}
.search_t8 {
  width: 55px;
}

.img_logo {
  float: left;
  display: inline-block;
  width: 140px;
  height: 140px;
  position: relative;
  left: 370px;
  top: 7px;
}
.img_logo img{
  cursor: pointer;
}
.search_pic {
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: red;
  position: relative;
  left: 492px;
  top: -53px;
}
.shop_car {
  display: inline-block;
  width: 120px;
  height: 38px;
  /* background-color: lightgray; */
  position: relative;
  left: 50px;
  top: -25px;
  border: 0.5px lightgray solid;
  color: #e1251b;
}
#shop_car_img {
  padding-top: 6px;
  padding-left: 0px;
  position: relative;
  top: -5px;
  left: -2px;
}
.shop_car_num {
  float: left;
  width: 15px;
  height: 15px;
  display: inline-block;
  background-color: #e1251b;
  border-radius: 80%;
  position: relative;
  left: 25px;
  color: white;
}
.shop_car_text {
  line-height: 40px;
  position: relative;
  left: -5px;
}
#shop_car_down {
  display: inline-block;
}
.search_bottom {
  display: inline-block;
  width: 554px;
  height: 20px;
  /* background-color: khaki; */
  position: relative;
  top: -30px;
  left: 50px;
}
.container {
  display: inline-block;
  height: 20px;
  width: 70px;
  /* background-color: aqua; */
  line-height: 20px;
  padding: 0px;
  font-size: 12;
  overflow: hidden;
  vertical-align: top;
  position: relative;
  top: 5px;
}
.container a {
  height: 20px;
  width: 70px;
  text-decoration: none;
  color: red;
}

.search_othertext {
  display: inline-block;
  width: 472px;
  height: 20px;
  margin: 0px;
  padding: 0px;
  position: relative;
  top: 5px;
}
.search_othertext:hover {
  color: #e1251b;
}
.search_othertext ul {
  text-align: center;
  display: inline-block;
  width: 472px;
  height: 20px;
  padding: 0px;
}
.search_othertext_li {
  display: inline-block;
  float: left;
  padding: 0px;
  line-height: 20px;
  height: 20px;
  color: #777777;
  font-size: 12px;
}

.search_othertext_li:hover {
  color: #e1251b;
}
.area1_bottom {
  width: 740px;
  height: 40px;
  display: inline-block;
  /* background-color: rosybrown; */
  position: relative;
  /* left: -40px; */
  top: -30px;
}
.area1_bottom_group {
  text-align: center;
  padding: 0px;
  display: inline;
  width: 100%;
  height: 100%;
  float: left;
  list-style: none;
}
.area1_bottom li {
  display: inline-block;
  height: 100%;
  line-height: 40px;
}
.fore {
  float: left;
  color: #333333;
  font-size: 14px;
}
.fore1 {
  float: left;
  color: #e1251b;
  width: 52px;
  font-size: 14px;
  line-height: 40px;
}
.fore2 {
  float: left;
  color: #e1251b;
  font-size: 14px;
  width: 67px;
  line-height: 40px;
}
.fore:hover {
  color: #e1251b;
}
.fore3 {
  width: 88px;
}
.fore4 {
  width: 82px;
}
.fore5 {
  width: 52px;
}
.fore6 {
  width: 82px;
}
.fore7 {
  width: 82px;
}
.fore8 {
  width: 82px;
}
.fore9 {
  width: 82px;
}
.fore10 {
  width: 71px;
}
</style>
