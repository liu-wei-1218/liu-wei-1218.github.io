<template>
  <div>
    <div class="tophead">
      <div class="top_info">
        <please_login v-if="!haslogin()"></please_login>
        <has_login v-if="haslogin()"></has_login>
      </div>
      <ul>
        <li><a>我的订单 </a></li>
        <li class="hover_special el-dropdown-link">
          <el-dropdown size="small" placement="top-end" trigger="hover">
            <span class="el-dropdown-link">
              <a>我的京东</a><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>待处理订单</el-dropdown-item>
              <el-dropdown-item>返修退换货</el-dropdown-item>
              <el-dropdown-item>降价商品</el-dropdown-item>
              <el-dropdown-item divided>我的京豆</el-dropdown-item>
              <el-dropdown-item>我的白条</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li><a>&nbsp;京东会员</a></li>
        <li class="hover_special">
          <el-dropdown size="medium" placement="top" trigger="hover">
            <a>
              <el-dropdown-menu id="factory_buy_menu" slot="dropdown">
                <!-- 下拉组件 -->
                <SV_factory_buy></SV_factory_buy> </el-dropdown-menu
              >企业采购<i class="el-icon-arrow-down el-icon--right" /></a
          ></el-dropdown>
        </li>
        <li><a> 客户服务 </a></li>
        <li class="hover_special">
          <el-dropdown size="medium" placement="top" trigger="hover"><a>
              <el-dropdown-menu id="factory_buy_menu" slot="dropdown">
                <!-- 下拉组件 -->
                <Map></Map>
              </el-dropdown-menu>
              网站导航<i class="el-icon-arrow-down el-icon--right" />
              </a>
          </el-dropdown>
        </li>
        <li><a>手机京东</a></li>
      </ul>
    </div>
    <div class="search">
      <Search></Search>
    </div>
  </div>
</template>
<script>
import Search from "./serach"
import please_login from "./please_login";
import has_login from "./has_login";
import SV_factory_buy from "../ShoppingView_components/SV_factory_buy";
import Map from "../ShoppingView_components/Map";
export default {
  components: {
    SV_factory_buy,
    Map,
    please_login,
    has_login,
    Search
  },
  data() {
    return {
      user:this.$store.state.now_user,
    }
  },
  methods: {
    haslogin(){
      if(this.$store.state.now_user==""){
        return false;
      }else{
        return true;
      }
    }
  },
};
</script>

<style scope>
* {
  /* margin: 0; */
  /* font-size: 6px; */
  font-family: 微软雅黑;
}
.top_info {
  display: inline-block;
  width: 800px;
  height: 30px;
  /* background-color: skyblue; */
  vertical-align: top;
  font-size: 12px;
}
.tophead {
  /* font-size: 6px; */
  font-family: 微软雅黑;
  background-color: #d7d7d7;
  width: 1920px;
  height: 30px;
  color: #777777;
  /* display: inline-block; */
  /* border: 1px solid red; */
}
.tophead ul {
  display: inline-block;
  list-style: none;
  /* float: left;  */
  left: 1152px;
  cursor: pointer;
  /* border: 1px solid red; */
}
.tophead li {
  display: inline;
  line-height: 30px;
  float: left;
  width: 83px;
  height: 28px;
}
.tophead li:hover {
  color: #e1251b;
}
.el-dropdown-link {
  font-size: 6px;
  font-family: 微软雅黑;
}

.hover_special:hover {
  font-size: 6px;
  font-family: 微软雅黑;
  background-color: white;
}
.tophead a {
  text-decoration: none;
  padding: 0px 5px;
  color: #777777;
  font-size: 14px;
  line-height: 28px;
}
.tophead a:hover {
  color: #e1251b;
}
.el-icon-arrow-down {
  font-size: 12px;
}

#factory_buy_menu {
  position: relative;
  top: -50%;
}

/* ----------------------------------------------------Serach-------------------------------------- */
.search {
  display: inline-block;
  width: 1920px;
  height: 140px;
  /* background-color: skyblue; */
  border-bottom: 1px solid#d7d7d7;
}
</style>
