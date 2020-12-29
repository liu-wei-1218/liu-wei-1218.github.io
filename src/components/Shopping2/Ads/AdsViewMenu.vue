<template>
  <div class="AdsViewMenuContain">
    <div class="AdsViewMenuContain1" v-show="judgeshow(1)" @mousemove="show_hiddenarea(1)">
      <single v-for="item in 4" :key="item" :good_id="getGoodId1(item)"></single>
    </div>
    <!-- -------------------------------------------------菜单2------------------------------------ -->
    <div
      class="AdsViewMenuContain1"
      v-show="judgeshow(2)"
      @mousemove="show_hiddenarea(2)"
    >
      <single
        v-for="item in 5"
        :key="item"
        :good_id="getGoodId2(item)"
      ></single>
    </div>
    <!-- ----------------------------------------------------------菜单3-------------------------------------------- -->
    <div
      class="AdsViewMenuContain1"
      v-show="judgeshow(3)"
      @mousemove="show_hiddenarea(3)"
    >
      <single
        v-for="item in 5"
        :key="item"
        :good_id="getGoodId3(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单4------------------ -->
    <div
      v-show="judgeshow(4)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(4)"
    >
      <single
        v-for="item in 6"
        :key="item"
        :good_id="getGoodId4(item)"
      ></single>
    </div>
    <!-- --------------------菜单5-------------------- -->
    <div
      v-show="judgeshow(5)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(5)"
    >
      <single
        v-for="item in 6"
        :key="item"
        :good_id="getGoodId5(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单6------------------ -->
    <div
      v-show="judgeshow(6)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(6)"
    >
      <single
        v-for="item in 6"
        :key="item"
        :good_id="getGoodId6(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单7------------------ -->
    <div
      v-show="judgeshow(7)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(7)"
    >
      <single
        v-for="item in 4"
        :key="item"
        :good_id="getGoodId7(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单8------------------ -->
    <div
      v-show="judgeshow(8)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(8)"
    >
      <single
        v-for="item in 5"
        :key="item"
        :good_id="getGoodId8(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单9------------------ -->
    <div
      v-show="judgeshow(9)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(9)"
    >
      <single
        v-for="item in 4"
        :key="item"
        :good_id="getGoodId9(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单10------------------ -->
    <div
      v-show="judgeshow(10)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(10)"
    >
      <single
        v-for="item in 5"
        :key="item"
        :good_id="getGoodId10(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单11------------------ -->
    <div
      v-show="judgeshow(11)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(11)"
    >
      <single
        v-for="item in 5"
        :key="item"
        :good_id="getGoodId11(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单12------------------ -->
    <div
      v-show="judgeshow(12)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(12)"
    >
      <single
        v-for="item in 6"
        :key="item"
        :good_id="getGoodId12(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单13------------------ -->
    <div
      v-show="judgeshow(13)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(13)"
    >
      <single
        v-for="item in 4"
        :key="item"
        :good_id="getGoodId13(item)"
      ></single>
    </div>
    <!-- --------------------------------------------------菜单14------------------ -->
    <div
      v-show="judgeshow(14)"
      class="AdsViewMenuContain1"
      @mousemove="show_hiddenarea(14)"
    >
      <single
        v-for="item in 4"
        :key="item"
        :good_id="getGoodId14(item)"
      ></single>
    </div>
  </div>
</template>

<script>
import single from "./single";
export default {
  methods: {
    judgeshow(index) {
      if (this.$store.state.showindex === index) {
        return true;
      }
    },
    show_hiddenarea(index) {
      this.$store.commit("changeShowIndex", index);
    },
    getGoodId1(item) {
      return (parseInt(item) * 3+5);
    },
    getGoodId2(item) {
      return (parseInt(item) * 3+10);
    },
    getGoodId3(item) {
      return (parseInt(item) * 3+15);
    },
    getGoodId4(item) {
      return (parseInt(item) * 3+20);
    },
    getGoodId5(item) {
      return (parseInt(item) * 4+10);
    },
    getGoodId6(item) {
      return (parseInt(item) * 4+15);
    },
    getGoodId7(item) {
      return (parseInt(item) * 5-2);
    },
    getGoodId8(item) {
      return (parseInt(item) * 5+8);
    },
    getGoodId9(item) {
      return (parseInt(item) * 6+2);
    },
    getGoodId10(item) {
      return (parseInt(item) * 6-4);
    },
    getGoodId11(item) {
      return (parseInt(item) * 6+7);
    },
    getGoodId12(item) {
      return (parseInt(item) * 8-4);
    },
    getGoodId13(item) {
      return (parseInt(item) * 8-3);
    },
    getGoodId14(item) {
      return (parseInt(item) * 7-2);
    }
  },
  components: {
    single
  }
};
</script>

<style scope>
a {
  text-decoration: none;
}
.AdsViewMenuContain {
  width: 100%;
  height: 100%;
}
.AdsViewMenuContain1 {
  margin-top: 5px;
  width: 100%;
  height: 95%;
  font-size: 14px;

  /* background-color: lightsteelblue; */
}
.AdsViewMenuContainTopTitle {
  color: #ffffff;
  line-height: 30px;
  display: inline-block;
  width: 100px;
  height: 30px;
  background-color: #333333;
  vertical-align: top;
  text-align: center;
}
.AdsViewMenuContainContent {
  height: 425px;
  width: 100%;
  /* background-color: limegreen; */
}
.AdsViewMenuContainContentTable {
  width: 100%;
  height: 100%;
  outline: none;
}
.AdsViewMenuContainContentTableLeft {
  text-align: right;
  font-weight: 600;
}
.AdsViewMenuContainContentTableRight {
  color: #666666;
  line-height: 20px;
}
</style>
