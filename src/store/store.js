// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)


// export const store = new Vuex.Store({
// 	// 设置属性
// 	state:{
// 		isLogin:false,
// 	},
// 	// 获取属性状态
// 	getters:{
// 		isLogin:state => state.isLogin,
// 	},
// 	// 设置属性状态
// 	mutations:{
// 		// 报存登录状态
// 		userStatus(state, flag){
// 			state.isLogin = flag
// 		},
// 	},
// 	//应用mutations
// 	actions:{
// 		// 获取登录状态
// 		userLogin({commit},flag){
// 			commit("userStatus", flag)
// 		}
// 	}
// })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  //定义状态
  state: {
    isLogin:false,
  },
  // 获取属性状态
	getters:{
		isLogin:state => state.isLogin,
	},
	// 设置属性状态
	mutations:{
		// 报存登录状态
		userStatus(state, flag){
			state.isLogin = flag
		},
		// userStatus (state,user){
		// 	if (user){
		// 	    state.isLogin = true
		// 	} else if (user == null){
		// 	    //登出的时候，清空sessionStorage里的东西
		// 	    sessionStorage.setItem("userName",null);
		// 	    state.isLogin = false;
		// 	}
		// }

	},
	//应用mutations
	actions:{
		// 获取登录状态
		userLogin({commit},flag){
			commit("userStatus", flag)
		}
	}
})

export default store
 


