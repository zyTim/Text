import router from "./routers"
import ElementUI from 'element-ui';
import {Message} from 'element-ui'

router.beforeEach((to,from,next)=>{
  document.title=to.meta.title;
  if(to.matched.some(route=>route.meta.isLogin)){
    if(localStorage.token){ //是否登录
      next();
    }else{
      Message({
        message:"请先登录",
        center:true,
        duration:1500
      });
      setTimeout(() => {
        next({
          path:"/login",
          query:{redirect:to.fullPath}//登录后将回到登录之前的路由
        })
      });
    }
  }else{
    next();
  }
})

export default router