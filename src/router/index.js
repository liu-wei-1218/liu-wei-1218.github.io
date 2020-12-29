import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home.vue"
import LoginPage from "@/components/LoginPage.vue"
import RegisterPage from "@/components/RegisterPage.vue"
import GoodsDetail from "@/components/GoodsDetail.vue"
import SearchPage from "@/components/SearchPage.vue"
Vue.use(Router)

export default new Router({
  routes : [
    {path: "/",redirect:"/Home"},
    {path: "/Home",component: Home}, 
    {path: "/LoginPage",component: LoginPage},
    {path: "/RegisterPage",component: RegisterPage},
    {path: "/GoodsDetail/:id",component: GoodsDetail},
    {path: "/SearchPage",component: SearchPage},]
})
