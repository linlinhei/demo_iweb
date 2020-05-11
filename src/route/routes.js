//引入组件
import Home from "../pages/Home.vue";
import Teacher from "../pages/Teacher.vue";
import Address from "../pages/Address.vue";
import Course from "../pages/Course.vue";
import CourseDetail from "../pages/CourseDetail.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";
import Cart from "../pages/Cart.vue";
import OrderConfirm from "../pages/OrderConfirm.vue";
import Center from "../pages/user/Center.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/user_center",
    name: "user_center",
    component: Center,
  },
  {
    path: "/order_confirm",
    name: "order_confirm",
    component: OrderConfirm,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/course_detail",
    name: "course_detail",
    component: CourseDetail,
  },
  {
    path: "/course",
    name: "course",
    component: Course,
  },
  {
    path: "/teacher",
    name: "teacher",
    component: Teacher,
  },
  {
    path: "/address",
    name: "address",
    component: Address,
  },
];
