// import Vue dependencies
import Vue from "vue";
import VueRouter from "vue-router"; // +1

// import components
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Stocks from "./views/Stocks";

Vue.use(VueRouter);

// export router
const routes = [{
    // ???
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "portfolio",
    path: "/portfolio",
    component: Portfolio
  },
  {
    name: "stocks",
    path: "/stocks",
    component: Stocks
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;