<template>
  <div class="Info">
    <div class="Info_text1">
      <ul>
        <li><a href="#" class="text">关于我们</a></li>
        <span>|</span>
        <li><a href="#" class="text">联系我们</a></li>
        <span>|</span>
        <li><a href="#" class="text">人才招聘</a></li>
        <span>|</span>
        <li><a href="#" class="text">商家入住</a></li>
        <span>|</span>
        <li><a href="#" class="text">广告服务</a></li>
        <span>|</span>
        <li><a href="#" class="text">手机京东</a></li>
        <span>|</span>
        <li><a href="#" class="text">友情链接</a></li>
        <span>|</span>
        <li><a href="#" class="text">销售联盟</a></li>
        <span>|</span>
        <li><a href="#" class="text">京东社区</a></li>
        <span>|</span>
        <li><a href="#" class="text">京东公益</a></li>
        <span>|</span>
        <li><a href="#" class="text">English Site</a></li>
      </ul><br />
      <span class="text">
          Copyright © 2004-2020 京东JD.com 版权所有
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scope>
.Info {
  font-family: 宋体;
  font-size: 12px;
  padding: 20px;
  width: 990px;
  height: 100px;
  background-color: white;
  display: inline-block;
  vertical-align: top;
  border-top: 1px solid rgba(153, 153, 153, 0.3);
}
.Info_text1{
  margin: auto;
  display: inline-block;
  width: 950px;
  height: 100px;
  /* border:1px solid red; */
}
.Info_text1 ul {
  display: inline-block;
  list-style: none;
  cursor: pointer;
  width: 100%;
  height: 20px;
}
.Info_text1 li {
  display: inline-block;
}
.Info_text1 a {
  color: #666666;
}
.Info_text1 a:hover {
  color: red;
}
</style>
