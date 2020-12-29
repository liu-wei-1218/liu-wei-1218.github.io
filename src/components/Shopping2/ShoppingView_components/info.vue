<template>
  <div class="info">
    <a @click="exit">退出</a>
    <a @click="withdraw">注销</a>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },
  methods: {
    exit() {
      this.$store.commit("exit");
    },
    withdraw() {
      this.$confirm("确认注销吗？该操作不可逆！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.deleteuser(this.$store.state.now_user);
        this.exit();
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      });
      // .catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '已取消删除'
      //   });
      // })
    },
    deleteuser(user) {
      let arr = JSON.parse(window.localStorage.getItem("JD_users"));
    //   console.log(user);
      let len = arr.length;
    //   console.log(arr);
      let i;
      for (i = 0; i < len; i++) {
        if (arr[i].username === user.username) {
          arr.splice(i, 1);
          console.log(arr);
          window.localStorage.setItem("JD_users",JSON.stringify(arr));
          return true;
        }
      }
      console.log("没找到");
      return false;
    },
  },
};
</script>

<style scope>
.info {
  width: 40px;
  height: 50px;
  text-align: center;
  line-height: 30px;
}
.info a {
  text-decoration: none;
}
.info a:hover {
  color: red;
}
</style>
