<template>
  <div class="shop_car_view">
    <div v-if="calc_shopcar_len() == 0 ? true : false" class="emptycontain">
      <div class="emptycontain_content">
        <img src="/static/空购物车.png" />
        <span>购物车空空的哦~去看看心仪的商品吧~</span><br />
        <span><router-link to="/Home">去购物></router-link></span>
      </div>
    </div>
    <div
      v-if="calc_shopcar_len() > 0 ? true : false"
      class="shop_car_view_contain"
    >
      <div class="shop_car_view_contain_top">
        <input type="checkbox" v-model="AllFlag" @click="selectAll()" />全选
      </div>
      <div class="shop_car_view_contain_middle">
        <div
          v-for="(item, index) in calc_shopcar_len()"
          :key="index"
          class="shop_car_view_innercontain"
        >
          <Shop_car_info :good_id="getshop_id(item)"></Shop_car_info>
        </div>
      </div>
      <div class="shop_car_view_contain_bottom">
        <div class="shop_car_view_contain_bottom_selectnum">
          <span>已选中{{ getSelectNum() }}件商品</span>
        </div>
        <div class="shop_car_view_contain_bottom_total_price">
          <span style="font-size: 16px">总价：</span
          ><span style="font-size: 20px; color: red">{{
            getTotalPrice()
          }}</span>
        </div>
        <div
          class="shop_car_view_contain_bottom_pay"
          v-if="getSelectNum() > 0 ? true : false"
        >
          <button class="btn" id="go_pay" @click="pay()">去支付</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shop_car_info from "./shop_car_info";
export default {
  props: [],
  data() {
    return {
      now_user: this.$store.state.now_user,
      AllFlag: false,
    };
  },
  methods: {
    calc_shopcar_len() {
      if (this.$store.state.now_user === "") {
        return 0;
      } else {
        //  console.log(this.now_user.shopcar.length);
        return this.$store.state.now_user.shopcar.length;
      }
    },
    deleteGood(id) {
      if(this.$store.state.now_user===""){
        return false
      }
      let shopcar = this.$store.state.now_user.shopcar;
      let i;
      for(i=0;i<shopcar.length;i++){
        if(shopcar[i].id===id){
          shopcar.splice(i,1)
          // console.log("删除成功");
          this.$store.commit("flesh_shopcar",shopcar)
        }
      }
      let users = JSON.parse(window.localStorage.getItem("JD_users"));
      for(i=0;i<users.length;i++){
        if(users[i].username===this.$store.state.now_user.username){
          users[i]=this.$store.state.now_user;
        }
      }
      window.localStorage.setItem("JD_users",JSON.stringify(users))
    },
    pay() {
      // eslint-disable-next-line no-undef
      swal({
        title: "正在支付..",
        icon: "info",
        // button: "取消",
        timer: 3000,
      }).then(() => {
        // eslint-disable-next-line no-undef
        swal({
          text: "支付成功！",
          icon: "success",
        });
        let shopcar = this.$store.state.now_user.shopcar;
        let i;
        let len = shopcar.length;
        for (i = 0; i < len; i++) {
          if (shopcar[i].flag === 1) {
            this.deleteGood(shopcar[i].id);
            i--;
          }
        }
      });
    },
    getshop_id(item) {
      return this.$store.state.now_user.shopcar[item - 1].id;
    },
    getTotalPrice() {
      let totalPrice = 0;
      let shopcar = this.$store.state.now_user.shopcar;
      let i;
      // console.log(shopcar);
      for (i = 0; i < shopcar.length; i++) {
        // console.log(this.$store.state.goods[parseInt(shopcar[i].id)]);
        let singlePrice = this.$store.state.goods[parseInt(shopcar[i].id)]
          .price;
        totalPrice += shopcar[i].num * shopcar[i].flag * singlePrice;
      }
      if (totalPrice > 0) {
        return "￥" + totalPrice;
      } else {
        return totalPrice;
      }
    },
    selectAll() {
      let shopcar = this.$store.state.now_user.shopcar;
      let i;
      if (this.AllFlag === false) {
        for (i = 0; i < shopcar.length; i++) {
          shopcar[i].flag = 1;
        }
      } else {
        for (i = 0; i < shopcar.length; i++) {
          shopcar[i].flag = 0;
        }
      }
    },
    getSelectNum() {
      let shopcar = this.$store.state.now_user.shopcar;
      let i;
      let SelectNum = 0;
      for (i = 0; i < shopcar.length; i++) {
        if (shopcar[i].flag === 1) {
          SelectNum++;
        }
      }
      return SelectNum;
    },
  },
  components: {
    Shop_car_info,
  },
};
</script>

<style scope>
.shop_car_view {
  width: 1000px;
  height: 600px;
}
.shop_car_view_contain {
  width: 910px;
  height: 600px;
  background-color: #f2f2f2;
  margin: auto;

  /* z-index: 999; */
}
.shop_car_view_innercontain {
  width: 90%;
  margin-bottom: 15px;
  height: 140px;
  margin: auto;
  background-color: #f2f2f2;
}
.emptycontain {
  position: absolute;
  margin: auto;
  width: 80%;
  height: 80%;
  /* background-color: lightsteelblue; */
}
.shop_car_view_contain_top {
  line-height: 40px;
  width: 100%;
  height: 40px;
  background-color: #ececec;
  display: inline-block;
  text-indent: 60px;
}
.emptycontain_content {
  width: 100%;
  height: 35%;
  /* background-color: mediumseagreen; */
  margin-top: 120px;
  line-height: 114px;
  text-align: center;
  font-size: 18px;
  position: relative;
  left: 50px;
}
.emptycontain_content a {
  font-size: 18px;
  color: #4b69c9;
  text-decoration: none;
  position: relative;
  top: -80px;
  left: -50px;
}
.emptycontain_content img {
  position: relative;
  top: 20px;
}
.shop_car_view_contain_middle {
  width: 100%;
  height: 500px;
  overflow: auto;
  display: inline-block;
  vertical-align: top;
  /* background-color: rgb(218, 198, 201); */
}
.shop_car_view_contain_bottom {
  width: 100%;
  height: 60px;
  display: inline-block;
  vertical-align: top;
  background-color: lightyellow;
}

.shop_car_view_contain_bottom_total_price {
  display: inline-block;
  height: 100%;
  width: 260px;
  /* background-color: mediumpurple; */
  float: left;
  /* background-color: aqua; */
  line-height: 60px;
  text-align: center;
  /* font-size: 18px; */
}
.shop_car_view_contain_bottom_pay {
  display: inline-block;
  height: 60px;
  width: 150px;
  /* background-color: mediumturquoise; */
  float: right;
  line-height: 60px;
  text-align: center;
}
#go_pay {
  width: 100px;
  height: 50px;
  background-color: #e64347;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
}
.shop_car_view_contain_bottom_selectnum {
  width: 500px;
  /* background-color: lightskyblue; */
  display: inline-block;
  height: 100%;
  float: left;
  line-height: 60px;
  text-indent: 30px;
}
</style>
