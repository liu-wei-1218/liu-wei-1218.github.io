<template>
 <div class="has_login_info">
    <span>欢迎你,{{get_nowuser_name()}}</span>
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
     get_nowuser_name() {
         return this.$store.state.now_user.username;
     }
 },
};
</script>

<style scope>
.has_login_info{
    width: 100%;
    height: 100%;
    display: inline-block;
    /* background-color: beige; */
    line-height: 40px;
    text-indent: 5px;
}
</style>
