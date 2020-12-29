<template>
 <div>
     <ShoppingView></ShoppingView>
     <Good_details></Good_details>
 </div>
</template>

<script>
import ShoppingView from "./Shopping2/ShoppingView_components/ShoppingView";
import Good_details from "./Good_details/Good_detail";
export default {
components:{
    ShoppingView,
    Good_details
},
 props: [],
 data() {
 return {
     id:this.$route.params.id,
 };
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
};
</script>

<style scope>

</style>
