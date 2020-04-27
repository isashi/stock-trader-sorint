import Vue from "vue";
import App from "./App.vue";
import router from "./routes.js";
import store from "./store/store.js";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.http.options.root = "https://stock-trader-cd807.firebaseio.com/";

Vue.filter("currency", (value) => {
	return "€" + value.toLocaleString();
});

new Vue({
	router, // ==> router: router
	store, // ==> store: store
	render: (h) => h(App),
}).$mount("#app");
