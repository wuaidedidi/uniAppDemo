import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {

		}
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true
			state.userInfo = provider
			uni.setStorage({
				key: "userInfo",
				value: provider
			})
			console.log(userInfo)
		},
		logout(state) {
			state.hasLogin = false
			state.userInfo = {}
			uni.removeStorage({
				key: "userInfo"
			})
		}
	},
	actions: {

	}

})
