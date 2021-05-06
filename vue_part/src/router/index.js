import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App"
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import PageFive from "../views/PageFive";
import PageThree from "../views/PageThree";
import Index from "../views/Index";
import Book_Adder from "../views/Book_Adder";
import Book_Manager from "../views/Book_Manager";
import Book_Update from "../views/Book_Update";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: "nav1",
  //   component: Index,
  //   redirect: "/PageOne",     //什么都不点的时候直接打开PageOne
  //   children: [
  //     {
  //       path: "/PageOne",
  //       name: "Page1",
  //       component: PageOne
  //     },
  //     {
  //       path: "/PageTwo",
  //       name: "Page2",
  //       component: PageTwo
  //     }
  //   ]
  // },
  // {
  //   path: '/navigation',
  //   name: "nav2",
  //   component: Index,
  //   children: [
  //     {
  //       path: "/PageThree",
  //       name: "Page3",
  //       component: PageThree
  //     },
  //     {
  //       path: "/PageFive",
  //       name: "Page5",
  //       component: PageFive
  //     }
  //   ]
  // }

  {
    path: '/',
    name: "Manage Book",
    show: true,
    component: Index,
    redirect: "/Book_Manager",     //什么都不点的时候直接打开PageOne
    children: [
      {
        path: "/Book_Manager",
        name: "Search Book",
        component: Book_Manager
      },
      {
        path: "/Book_Adder",
        name: "Add Book",
        component: Book_Adder
      }
    ]
  },
  {
    path: '/Update',
    component: Book_Update,
    show: false
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
