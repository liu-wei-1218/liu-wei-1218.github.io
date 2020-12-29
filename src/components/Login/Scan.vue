<template>
 <div class="scan">
     <div class="scan_pic">
         <img src="static/二维码.png" alt="">
     </div>
     <div class="scan_text">
         打开<a><span style="color:red;font-size:14px">手机京东</span></a>&nbsp;&nbsp;&nbsp;扫描二维码
     </div>
 </div>
</template>

<script>
export default {
 props: [],
 data() {
 return {

 };
 },
 methods: {

 },
};
</script>

<style scope>
.scan{
    display: inline-block;
    height: 235px;
    width: 100%; 
    /* background-color: cyan; */
}
.scan_pic{
    display: inline-block;
    background-color: #ffffff;
    width: 170px;
    height: 170px;
    text-align: center;
    line-height: 170px;
    margin: 17px;
}
.scan_text{
    font-size: 12px;
    color: #666666;
}
.scan_text a{
    text-decoration: none;
    cursor: pointer;
}
</style>
