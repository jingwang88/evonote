import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "./components/App.vue"

Vue.config.debug = true;
Vue.config.devtools = true;
Vue.use(VueRouter);

const routes = [

];
const router = new VueRouter({
	routes
});
/*var vm = new Vue({
	router
}).$mount('#app');*/

var vm = new Vue({
	el: "#app",
	components: {
		app: App
	}
});
