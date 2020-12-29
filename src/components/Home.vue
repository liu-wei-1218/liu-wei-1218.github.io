<template>
  <div>
    <ShoppingView></ShoppingView>
    <AdsView></AdsView>
  </div>
</template>

<script>
import ShoppingView from "./Shopping2/ShoppingView_components/ShoppingView"
import AdsView from "./Shopping2/Ads/AdsView"
export default {
  name: "P1",
  components:{
    ShoppingView,
    AdsView
  },
  created() {
    this.init();
  },
  methods:{
    init () {
      this.axios.get("/static/goodlist.json").then((res)=>{
        this.$store.commit("initData",res.data.goods);
      })
    }
  }
}
</script>