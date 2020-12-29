<template>
  <div class="user_Info">
    <el-dropdown size="medium" placement="top" trigger="hover">
        <el-dropdown-menu id="factory_buy_menu" slot="dropdown">
          <!-- 下拉组件 -->
          <Info></Info></el-dropdown-menu
        ><span style="font-size: 14px">欢迎你,{{ user.username }}</span>
        <i class="el-icon-arrow-down el-icon--right" />
    </el-dropdown>
  </div>
</template>

<script>
import Info from "./info.vue";
export default {
  components: {
    Info,
  },
  props: [],
  data() {
    return {
      user: this.$store.state.now_user,
    };
  },
  methods: {},
};
</script>

<style scope>
.user_Info {
  width: 100%;
  height: 100%;
  /* background-color: springgreen; */
  line-height: 30px;
  text-align: right;
}
</style>
