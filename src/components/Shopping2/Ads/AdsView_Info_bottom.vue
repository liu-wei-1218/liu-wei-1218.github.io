<template>
  <div class="Info_bottom">
    <!--容器-->
    <div class="Info_news">
      <!--快报-->
      <table>
        <thead>
          <tr height="30px">
            <td width="77%">
              <strong
                ><span class="JD_news" style="font-size: 14px"
                  >&nbsp;&nbsp;京东快报</span
                ></strong
              >
            </td>
            <td>
              <span class="more pointer">更多<i class="el-icon-arrow-right"></i></span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr height="22px">
            <td colspan="2">
              <span class="spec pointer" style="height: 20px; width: 28px">热门</span
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="tex pointer">15.6英寸英特尔酷睿i7设计..</span>
            </td>
          </tr>
          <tr height="22px">
            <td colspan="2">
              <span class="spec pointer">推荐</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="tex pointer">MacBook Air 13.3 Retina..</span>
            </td>
          </tr>
          <tr height="22px">
            <td colspan="2">
              <span class="spec pointer">推荐</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="tex pointer">小米10pro 双模5G游戏触..</span>
            </td>
          </tr>
          <tr height="22px">
            <td colspan="2">
              <span class="spec pointer">推荐</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="tex pointer">华硕(ASUS) 飞行堡垒8全支..</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="Info_other">
      <table border="0px">
        <tr>
          <td width="33%" class="pointer"><img src="/static/话费.png" /></td>
          <td  class="pointer"><img src="static\飞机 .png" alt="" /></td>
          <td class="pointer"><img src="/static/酒店.png" alt="" /></td>
        </tr>
        <tr>
          <td class="pointer">话费</td>
          <td class="pointer">机票</td>
          <td class="pointer">酒店</td>
        </tr>
        <tr>
          <td class="pointer"><img src="static\游戏 .png" alt="" /></td>
          <td class="pointer"><img src="/static/加油.png" alt="" /></td>
          <td class="pointer"><img src="/static/火车.png" alt="" /></td>
        </tr>
        <tr>
          <td class="pointer">游戏</td>
          <td class="pointer">加油卡</td>
          <td class="pointer">火车票</td>
        </tr>
        <tr>
          <td class="pointer"><img src="/static/人群.png" alt="" /></td>
          <td class="pointer"><img src="/static/理财收益.png" alt="" /></td>
          <td class="pointer"><img src="/static/纸张3.png" alt="" /></td>
        </tr>
        <tr>
          <td class="pointer">众筹</td>
          <td class="pointer">理财</td>
          <td class="pointer">白条</td>
        </tr>
        <tr>
          <td class="pointer"><img src="/static/电影.png" /></td>
          <td class="pointer"><img src="/static/企业.png" /></td>
          <td class="pointer"><img src="static\礼品卡 .png" /></td>
        </tr>
        <tr>
          <td class="pointer">电影票</td>
          <td class="pointer">企业购</td>
          <td class="pointer">礼品卡</td>
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

<style scope>
.Info_bottom {
  display: inline-block;
  width: 100%;
  height: 350px;
  /* background-color:lightskyblue */
  font-size: 6px;
}
.Info_news {
  display: inline-block;
  /* float: top; */
  width: 100%;
  height: 120px;
}
.Info_news table {
  border-top: 1px solid rgba(119, 119, 119, 0.2);
  border-bottom: 1px solid rgba(119, 119, 119, 0.2);
}
/* .Info_other img{
  cursor: pointer;
} */
.pointer{
  cursor: pointer;
}
.JD_news {
  color: #333333;
}
table {
  width: 100%;
  border-collapse: collapse;
}
.more {
  font-size: 12px;
  color: #777777;
}
.spec {
  background-color: #e1251b14;
  color: #e1251b;
  position: relative;
  left: 5px;
}
.tex {
  color: #777777;
}
.Info_other {
  height: 227px;
  /* background-color: salmon; */
}

.Info_other table{
    text-align: center;
    color: #333333;
}
.Info_other table tr{
    height: 22px;
}

</style>
