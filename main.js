import App from './App'
import store from "store"
import Json from "./Json"

// #ifndef VUE3
import Vue, {
	resolveComponent
} from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

const msg = (title, duration = 500, mask = false, icon = "none") => {
	uni.showToast({
		title: title,
		duration: duration,
		mask: mask,
		icon: icon
	})
};

const json = type => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type])
		}, 500)
	})
}
const prepage = () => {
	let pages = getCurrentPages()
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage
	// #endif
	return prePage.$vm
}

Vue.prototype.$fire = new Vue()
Vue.prototype.$store = store
Vue.prototype.$api = {
	msg,
	json,
	prepage
}

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
