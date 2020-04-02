import Vue from 'vue'
import Router from 'vue-router'
import vant from "@/components/vant/vant"
import myImage from "@/components/elementImage/eleImage"
import myScroll from "@/components/vant/myScroll"
import cityScroll from "@/components/vant/cityScroll"
import cityScroll1 from "@/components/vant/cityScroll1"
import autio from "@/components/vant/autio"
import vuex from "@/components/vant/vuex"

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: "/", 
      redirect: "/basic" 
    },
    {
      path:"/basic",
      name:"/basic",
      component:()=> import('@/components/basic/basic'),
    },
    {
      path:"/vant",
      name:"vant",
      component:vant,
      meta:{isLogin:true,title:"vant"},
      children:[
        {path:"myImage",name:"myImage",component:myImage},
        {path:"myScroll",name:"myScroll",component:myScroll},
        {path:"cityScroll",name:"cityScroll",component:cityScroll},
        {path:"cityScroll1",name:"cityScroll1",component:cityScroll1},
        {path:"vuex",name:"vuex",component:vuex},
        {path:"autio",
        name:"autio",
        component:autio,
        children:[
          {path:"autio1",name:"autio1",component:()=>import ("@/components/vant/autio1")},
          {path:"autio2",name:"autio2",component:()=>import ("@/components/vant/autio2")},
        ]
      },
      ]
    },
    {
      path:"/elementUI",
      name:"elementUI",
      meta:{isLogin:true,title:"ElementUI"},
      component:()=> import('@/components/elementUI/elementUI'),
    },
    {
      path:"/myRouter",
      name:"myRouter",
      component:()=> import('@/components/myRouter/myRouter'),
      children:[
        {path:"myRouter1",name:"myRouter1",component:()=> import('@/components/myRouter/myRouter1')},
        {path:"myRouter2",name:"myRouter2",component:()=> import('@/components/myRouter/myRouter2')},
        {path:"myRouter3/:user/:age/:sex",name:"myRouter3",component:()=> import('@/components/myRouter/myRouter3')},
        {path:"myRouter4",name:"myRouter4",component:()=> import('@/components/myRouter/myRouter4')},
      ]
    },
    {
      path:"/login",
      name:"login",
      component:()=> import('@/components/login/login'),
    },
  ]
})
