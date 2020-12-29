<template>
  <div>
    <div class="factory_buy">
      <table>
        <tr>
          <td><a href="#">企业购</a></td>
          <td><a href="#">商用场景馆</a></td>
        </tr>
        <tr>
          <td><a href="#">工业品</a></td>
          <td><a href="#">丰富多商城</a></td>
        </tr>
        <tr>
          <td><a href="#">礼品卡</a></td>
          <td><a href="#">微信企业购</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.factory_buy{
  width: 150px;
  height: 100px;
}
a {
  text-decoration: none;
  padding: 0px 5px;
  color: #777777;
}
a:hover{
  color: red;
}
* {
  font-size: 6px;
  font-family: 微软雅黑;
  margin: 0;
}
</style>
