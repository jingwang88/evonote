import Vue from "../node_modules/vue/dist/vue.min.js";
import App from "./components/App.vue";

Vue.config.debug = true;

var vm = new Vue({
	el: "#app",
	render: h => h(App)
});
