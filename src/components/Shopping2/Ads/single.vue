<template>
  <div class="single_container">
    <div class="single">
      <div class="single_img">
        <router-link :to="todetails(good_id)">
          <img :src="geturl(good_id)"/>
        </router-link>
      </div>
      <div class="single_text">
        <router-link :to="todetails(good_id)"
          ><span id="tt" style="font-size: 14px;line-height: 20px;">{{
            gettitle(good_id)
          }}</span></router-link
        >
      </div>
      <div class="single_price" style="line-height: 20px">
        <span class="content">￥</span>
        <span class="content pointer" style="font-size: 18px">{{
          getprice(good_id)
        }}</span>
        <span class="content">.00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["good_id"],
  methods: {
    geturl(good_id) {
      return "static/pics/good" + good_id + "/1.jpg";
    },
    gettitle(good_id) {
      if (this.$store.state.goods.length > 0) {
        let id = parseInt(good_id)-1;
        let arr = this.$store.state.goods;
        return arr[id].title.slice(0,32);
      }
    },
    getprice(good_id) {
      if (this.$store.state.goods.length > 0) {
        let id = parseInt(good_id)-1;
        return this.$store.state.goods[id].price;
      }
    },
    todetails(good_id) {
        return "/GoodsDetail/" + good_id;
    }
  }
};
</script>

<style scope>
.pointer{
  cursor: pointer;
}
.single_container {
  width: 236px;
  height: 310px;
  display: inline-block;
}
.single {
  width: 230px;
  height: 310px;
  display: inline-block;
  float: left;
  /* background-color: thistle; */
  /* border: 1px solid blue; */
  text-align: center;
}
.single_img {
  display: inline-block;
  width: 210px;
  height: 220px;
  /* background-color: coral; */
}
.single_img img {
  width: 210px;
  height: 220px;
}
.single_text {
  display: inline-block;
  width: 210px;
  height: 40px;
  /* background-color: cyan; */
  /* text-indent: 20px; */
  text-align: center;

  padding: 0px;
}
.single_text span {
  float: left;
  align: left;
  display: inline-block;
  padding: 0px;
  position: relative;
  left: 0px;
  height: 40px;
}
.single_price {
  display: inline-block;
  width: 210px;
  height: 44px;
  /* background-color: darkorange; */
  padding: 0px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
}
.content {
  position: relative;
  left: -35px;
  color: #e1251b;
}
</style>
