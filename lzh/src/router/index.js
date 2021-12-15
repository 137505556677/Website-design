import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Main from '../view/Main.vue'
import Y_main from '../view/yidong/y_main.vue'
import About from '../view/About.vue'
import Xwcontent from '@/view/neinong/xwcontent'
import Gkcontent from '@/view/neinong/gkcontent'
import Jxcontent from '@/view/neinong/jxcontent'
import Yxwcontent from '@/view/neinong/yxwcontent'

import Ymxinwen from '../view/yidong/ymxinwen.vue'
import Survey from '../view/survey.vue'
import Ymsurvey from '@/view/yidong/ymsurvey'
import Scientific from '../view/scientific.vue'
import Ykeyan from '@/view/yidong/y_keyan'
import fencai from '../view/fengcai.vue'
import Yjiaoshi from '../view/yidong/yjiaoshi.vue'



var router = new VueRouter({
	routes: [
		{ path: '/', component: Main, name: 'main', meta:{title:'首页'} },
		{ path: '/main', component: Main, name: 'main', meta:{title:'首页'} },
		{ path: '/y_main', component: Y_main, name: 'y_main', meta: {title: '茂名职业技术学院-计算机工程系'}},
		{ path: '/ymxinwen', component: Ymxinwen, name: 'ymxinwen', meta: {title: '茂名职业技术学院-计算机工程系'}},
		{ path: '/about', component: About, name: 'about', meta:{title:'计算机工程系'} },
		{ path: '/xwcontent', component: Xwcontent, name: 'xwcontent', meta:{title:'计算机工程系'} },
		{ path: '/gkcontent', component: Gkcontent, name: 'gkcontent', meta:{title:'计算机工程系'} },
		{ path: '/jxcontent', component: Jxcontent, name: 'jxcontent', meta:{title:'计算机工程系'} },
		
		{ path: '/yxwcontent', component: Yxwcontent, name: 'yxwcontent', meta:{title:'计算机工程系'} },
		{ path: '/survey', component: Survey, name: 'survey', meta:{title:'计算机工程系'} },
		{ path: '/ymsurvey', component: Ymsurvey, name: 'ymsurvey', meta: {title: '茂名职业技术学院-计算机工程系'}},
		{ path: '/scientific', component: Scientific, name: 'scientific', meta:{title:'计算机工程系'} },
		{ path: '/ykeyan', component: Ykeyan, name: 'ykeyan', meta: {title: '茂名职业技术学院-计算机工程系'}},
		{ path: '/yjiaoshi', component: Yjiaoshi, name: 'yjiaoshi', meta: {title: '茂名职业技术学院-计算机工程系'}},
		{ path: '/fencai', component: fencai, name: 'fencai', meta:{title:'计算机工程系'} }
	],
})
router.beforeEach((to,from,next)=> {
	if(to.meta.title){
		document.title = to.meta.title
	}
	next()
})
export default router