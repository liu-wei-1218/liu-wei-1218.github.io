import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
    mutations: {
        initData(state,arr){
            state.goods = arr;
        },
        setnowuser(state,user){
            state.now_user=user;
        },
        exit(state) {
            state.now_user="";
        },
        flesh_shopcar(state,arr){
            state.now_user.shopcar=arr;
        },
        change_num(state,obj){
            state.now_user.shopcar[obj.c1].num += obj.c2;
        },
        addnew_good(state,good){
            state.now_user.shopcar.push(good);
        },
        num_sub(state,index){
            state.now_user.shopcar[index].num--;
        },
        num_add(state,index) {
            state.now_user.shopcar[index].num++;
        },
        change_flag(state,index) {
            state.now_user.shopcar[index].flag=1-state.now_user.shopcar[index].flag;
        },
        setSelectResult(state,arr){
            state.selectResult=arr;
        },
        evalute(state,obj){
            state.goods[obj.index].evalute.push(obj.evalute);
        },
        changeShowIndex(state,index){
            state.showindex=index;
        }

    },
    state: {
        showindex:0,
        selectResult:[],
        now_user:"",
        // loop1:["static/pics/good11/1.jpg","static/pics/good13/4.jpg","static/pics/good25/3.jpg","static/pics/good10/1.jpg","static/pics/good26/1.jpg","static/pics/good3/1.jpg"],
        goods: []
    },
})
export default store;