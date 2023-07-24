import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../components/pages/SignUp.vue";
import LoginUser from "../components/pages/LoginUser.vue";
import NavBar from "../components/nav/NavBar.vue";
import PageNotFound from "../components/pages/PageNotFound.vue";
import CreatePost from "../components/pages/CreatePost.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: NavBar },
    { path: "/signup", component: SignUp },
    { path: "/post", component: CreatePost },
    { path: "/login", component: LoginUser },
    { path: "/:notfound", component: PageNotFound },
  ],
});


export default router
