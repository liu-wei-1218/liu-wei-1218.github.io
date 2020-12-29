<template>
  <div class="shop_car_singleinfo">
    <div class="shop_car_singleinfo_content">
      <div class="shop_car_singleinfo_checkbox">
        <input type="checkbox" class="checkboxes" :checked="setValue()" @click="change_flag()" />
      </div>

      <div class="shop_car_singleinfo_content_contain">
        <img :src="getsingleinfo_url()" />
        <div class="shop_car_singleinfo_t1">
          <span>{{ getsingleinfo_title() }}</span>
        </div>
        <div class="shop_car_singleinfo_t2">
          <div class="shop_car_singleinfo_t2_content">
            <span>{{ getsingleinfo_color() }}</span>
            <span>{{ getsingleinfo_size() }}</span>
            <span>{{ getsingleinfo_CLQ() }}处理器</span>
          </div>
        </div>
        <div class="shop_car_singleinfo_t3">
          <span>{{ getsingleinfo_price() }}</span>
        </div>
        <div class="shop_car_singleinfo_t4">
          <el-button @click="num_sub()">-</el-button>
          <el-input style="width: 45%" :value="geisingleinfo_num()"></el-input>
          <el-button @click="num_add()">+</el-button>
        </div>
        <div class="shop_car_singleinfo_t5">
          <span @click="moveout()">移除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["good_id"],

  methods: {
    getsingleinfo_url() {
      return "/static/pics/good" + this.good_id + "/1.jpg";
    },
    //拿到当前商品的数量
    geisingleinfo_num() {
      let i;
      let arr = this.$store.state.now_user.shopcar;
      for (i = 0; i < arr.length; i++) {
        if (arr[i].id === this.good_id) {
          return arr[i].num;
        }
      }
    },
    getsingleinfo_title() {
      return this.$store.state.goods[this.good_id].good_name;
    },
    getsingleinfo_color() {
      return this.$store.state.goods[this.good_id].color;
    },
    getsingleinfo_size() {
      return this.$store.state.goods[this.good_id].size;
    },
    getsingleinfo_CLQ() {
      return this.$store.state.goods[this.good_id].CLQ;
    },
    getsingleinfo_price() {
      return this.$store.state.goods[this.good_id].price;
    },
    change_data() {
      let i = 0;
      let shopcar = this.$store.state.now_user.shopcar;
      for (i = 0; i < shopcar.length; i++) {
        if (shopcar[i].id === this.good_id) {
          shopcar[i] = { id: this.good_id, num: this.num, flag: 0 };
        }
      }
      this.$store.commit("flesh_shopcar", shopcar);
      let arr = JSON.parse(window.localStorage.getItem("JD_users"));
      for (i = 0; i < arr.length; i++) {
        if (this.$store.state.now_user.username === arr[i].username) {
          arr[i] = this.$store.state.now_user;
        }
      }
      window.localStorage.setItem("JD_users", JSON.stringify(arr));
    },
    num_sub() {
      {
        let i;
        let arr = this.$store.state.now_user.shopcar;
        for (i = 0; i < arr.length; i++) {
          if (arr[i].id === this.good_id) {
            if (arr[i].num > 1) {
              // console.log(arr[i].num);
              this.$store.commit("num_sub", i);
            } else {
              this.$message({
                showClose: true,
                message: "最少购买一件哦~",
              });
            }
          }
        }
        let users = JSON.parse(window.localStorage.getItem("JD_users"));
        // console.log(users);
        let j;
        for (j = 0; j < users.length; j++) {
          if (users[j].username === this.$store.state.now_user.username) {
            // console.log("找到了")
            users[j] = this.$store.state.now_user;
          }
        }
        window.localStorage.setItem("JD_users", JSON.stringify(users));
      }
    },
    num_add() {
      let i;
      let arr = this.$store.state.now_user.shopcar;
      for (i = 0; i < arr.length; i++) {
        if (arr[i].id === this.good_id) {
          this.$store.commit("num_add", i);
        }
      }
      // console.log(this.$store.state.now_user);
      let users = JSON.parse(window.localStorage.getItem("JD_users"));
      let j;
      for (j = 0; j < users.length; j++) {
        if (users[j].username === this.$store.state.now_user.username) {
          users[j] = this.$store.state.now_user;
        }
      }
      window.localStorage.setItem("JD_users", JSON.stringify(users));
    },
    // 移除
    moveout() {
      let shopcar = this.$store.state.now_user.shopcar; //拿到该用户的购物车数组
      let i;
      for (i = 0; i < shopcar.length; i++) {
        if (shopcar[i].id === this.good_id) {
          shopcar.splice(i, 1);
        }
      }
      this.$store.commit("flesh_shopcar", shopcar); //更新当前用户购物车
      let users = JSON.parse(
        JSON.parse(JSON.stringify(window.localStorage.getItem("JD_users")))
      );
      let j;
      for (j = 0; j < users.length; j++) {
        if (users[j].username === this.$store.state.now_user.username) {
          users[j] = JSON.parse(JSON.stringify(this.$store.state.now_user));
        }
      }
      window.localStorage.setItem("JD_users", JSON.stringify(users));
    },
    change_flag() {
      let shopcar = this.$store.state.now_user.shopcar;
      let i;
      for(i=0;i<shopcar.length;i++){
        if(shopcar[i].id===this.good_id){
          this.$store.commit("change_flag",i);
          // console.log(this.$store.state.now_user.shopcar[i]);
        }
      }
      let users = JSON.parse(window.localStorage.getItem("JD_users"));
      for(i=0;i<users.length;i++){
        if(users[i].username===this.$store.state.now_user.username){
          users[i]=this.$store.state.now_user;
        }
      }
      window.localStorage.setItem("JD_users",JSON.stringify(users));
    },
    setValue() {
      let shopcar = this.$store.state.now_user.shopcar;
      let i;
      for(i=0;i<shopcar.length;i++){
        if(shopcar[i].id===this.good_id){
          if(this.$store.state.now_user.shopcar[i].flag===1){
            return 1;
          }else{
            return 0;
          }
        }
      }
      
    }
  },
};
</script>

<style scope>
.shop_car_singleinfo_checkbox {
  height: 120px;
  display: inline-block;
  background-color: #f2f2f2;
  width: 5%;
  text-align: center;
  line-height: 120px;
  float: left;
}
.shop_car_singleinfo {
  display: inline-block;
  width: 100%;
  height: 120px;
  /* background-color: lightskyblue; */
  vertical-align: top;
}
.shop_car_singleinfo_content_contain {
  width: 95%;
  height: 120;
  display: inline-block;
  float: right;
  vertical-align: top;
}
.shop_car_singleinfo img {
  width: 120px;
  height: 120px;
  display: inline-block;
  margin-left: 15px;
  float: left;
}
.shop_car_singleinfo_t1 {
  display: inline-block;
  height: 120px;
  width: 150px;
  /* background-color: azure; */
  text-align: center;
  vertical-align: top;
  line-height: 120px;
  float: left;
}
.shop_car_singleinfo_t2 {
  display: inline-block;
  height: 120px;
  width: 150px;
  /* background-color: azure; */
  text-align: center;
  vertical-align: top;
  float: left;
}
.shop_car_singleinfo_t2_content {
  height: 30%;
  width: 100%;
  /* background-color: cadetblue; */
  margin-top: 40px;
}
.shop_car_singleinfo_t3 {
  width: 60px;
  vertical-align: top;
  height: 120px;
  display: inline-block;
  /* background-color: coral; */
  line-height: 120px;
  text-align: center;
  float: left;
}
.shop_car_singleinfo_t4 {
  width: 200px;
  height: 120px;
  display: inline-block;
  /* background-color: lightcyan; */
  float: left;
  line-height: 120px;
}
.shop_car_singleinfo_t5 {
  width: 68px;
  line-height: 120px;
  text-align: center;
  height: 120px;
  vertical-align: top;
  /* background-color: lightgoldenrodyellow; */
  display: inline-block;
  /* position: absolute; */
}
</style>
