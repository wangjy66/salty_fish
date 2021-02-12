import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/content/home')
const Upload = () => import('../components/content/upload')
const Cargo = () => import('../components/content/cargo')
const Mine = () => import('../components/content/mine')
const BeSelling = () => import('../components/content/content_children/be_selling')
const Bought = () => import('../components/content/content_children/bought')
const Comment = () => import('../components/content/content_children/comment')
const Conversaion = () => import('../components/content/content_children/conversation')
const ConversationList = () => import('../components/content/content_children/conversation_list')
const Good = () => import('../components/content/content_children/good')
const History = () => import('../components/content/content_children/history')
const Pay = () => import('../components/content/content_children/pay')
const SetMine = () => import('../components/content/content_children/set_mine')
const Sold = () => import('../components/content/content_children/sold')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/upload',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    component: Home, // 首页//跳转到good
    meta: {
      title: '首页'
    }
  },
  {
    path: '/upload', // 上传闲置
    component: Upload,
    meta: {
      title: '上传闲置'
    }
  },
  {
    path: '/cargo', // 购物车//可以结算或者点击进入good
    component: Cargo,
    meta: {
      title: '购物车'
    }

  },
  {
    path: '/pay', // 购买物品的结算页面
    component: Pay,
    meta: {
      title: '支付'
    }
  },
  {
    path: '/good', // 商品展示页面
    component: Good,
    meta: {
      title: '商品'
    }
  },
  {
    path: '/conversation', // 与卖家对话
    component: Conversaion,
    meta: {
      title: '私聊'
    }
  },
  {
    path: '/mine/:userId', // userID动态获取//我的
    component: Mine,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/be_selling', // 出售中的物品列表//跳转到good/返回
    component: BeSelling,
    meta: {
      title: '出售中商品'
    }
  },
  {
    path: '/bought', // 已购买的物品列表//跳转到good/返回
    component: Bought,
    meta: {
      title: '已购买商品'
    }
  },
  {
    path: '/comment', // 评论列表//返回
    component: Comment,
    meta: {
      title: '收到的评论'
    }
  },
  {
    path: '/conversation_list', // 会话列表//跳转到与卖家对话页面/返回
    component: ConversationList,
    meta: {
      title: '会话列表'
    }
  },
  {
    path: '/history', // 浏览历史//跳转到good/返回
    component: History,
    meta: {
      title: '浏览历史'
    }
  },
  {
    path: '/set_mine', // 设置我的信息//返回
    component: SetMine,
    meta: {
      title: '我的信息设置'
    }
  },
  {
    path: '/sold', // 已卖出商品//跳转到good/返回
    component: Sold,
    meta: {
      title: '已出售商品'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active' // 控制处于活跃时加上的class的名字
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
// 还有一个afterEach不用next（）
export default router
