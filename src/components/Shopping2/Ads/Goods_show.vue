<template>
 <div class="contain">
     <div class="foryou">
         <img src="/static/推荐.png">
         <span class="foryou_text pointer">为你推荐</span>
         <img src="/static/推荐.png">
     </div>
     <single v-for="item in 50" :key="item" :good_id=item></single>
 </div>
</template>

<script>
import single from "./single"
export default {
 components:{
     single
 },
 data() {
 return {

 };
 },
 methods: {

 },
};
</script>

<style scoped>
.foryou{
    width: 100%;
    height: 70px;
    line-height: 60px;
    /* background-color: darksalmon; */
}
.foryou img{
    cursor: pointer;
}
.contain{
    display: inline-block;
    width: 1184px;
    height:3300px;
    /* border: 1px solid black; */
    /* background-color: springgreen; */
    position: relative;
    left: -13px;
}
.foryou_text{
    font-size: 18px;
}
</style>

