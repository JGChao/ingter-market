import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
		host:'http://integral_shop.mimokeji.cn/',
		imghost:'http://integral_shop.mimokeji.cn/uploads/',
		// 商品信息
		goodsinfo:{
			goods_id:0,
			goods_price:0,
		},
		// 一级分类id
		category_id:'',
	},
    mutations: {
		// 一级分类id
		incategoryid(state,category_id){
			state.category_id = category_id;
		}
		
	},
    actions: {
		commitcategoryid({commit},category_id){
			commit('incategoryid',category_id)
		}
	}
})
export default store;
