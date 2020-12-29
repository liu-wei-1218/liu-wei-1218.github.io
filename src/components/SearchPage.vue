<template>
  <div>
    <div v-show="getSelectResultLength === 0 ? true : false" class="notFind">
      <div class="notFindTop">你要找的商品飞走了..</div>
      <div class="notFindMiddle">
        <span>404</span>
      </div>
    </div>
    <div v-show="getSelectResultLength > 0">
      <ShoppingView></ShoppingView>
      <div class="showSelectGoodsContain">
        <div class="showSelectGoods">
          <div class="showSelectGoodsTop" style="text-align: left">
            <span>为你找到了这些宝贝哦</span>
          </div>
          <div class="showSelectGoodsMiddle">
            <Single
              v-for="item in getSelectResultLength"
              :key="item"
              :good_id="getID(item)"
            ></Single>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Single from "./Shopping2/Ads/single.vue";
import ShoppingView from "./Shopping2/ShoppingView_components/ShoppingView";
export default {
  props: [],
  data() {
    return {
      selectResult: this.$store.state.selectResult
    };
  },
  methods: {
    getID(item) {
      return this.selectResult[item];
    },
  },

  computed: {
    getSelectResultLength() {
      return this.selectResult.length;
    }
  },
  components: {
    ShoppingView,
    Single
  }
};
</script>

<style scope>
.showSelectGoodsContain {
  width: 1920px;
  height: 700px;
  background-color: bisque;
  /* text-align: center; */
  margin: auto;
}
.showSelectGoods {
  width: 1400px;
  height: 700px;
  display: inline-block;
  background-color: bisque;
  position: relative;
  left: 200px;
  overflow: auto;
}
.showSelectGoodsTop {
  width: 100%;
  height: 70px;
  display: inline-block;
  background-color: bisque;
  font-size: 20px;
  line-height: 70px;
  text-indent: 30px;
}
.showSelectGoodsMiddle img {
  float: left;
}
.notFind {
  width: 1920px;
  height: 920px;
  background-size: 100%;
  background-image: url("/static/404.jpg");
  color: aliceblue;
}
.notFindTop {
  font-size: 50px;
  position: relative;
  left: 300px;
  top: 200px;
}
.notFindMiddle {
  font-size: 100px;
  position: relative;
  left: 340px;
  top: 200px;
}
</style>
