import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'LayoutDefault',
        component: ()=> import('@/view/layout/LayoutDefault.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: ()=> import('@/view/page/Home.vue'),
            },
            {
                path: '/home',
                name: 'home',
                component: ()=> import('@/view/page/Home.vue'),
            },
            {
                path: '/detail',
                name: 'detail',
                component: ()=> import('@/view/page/Detail.vue'),
            },
            {
                path: '/post',
                name: 'post',
                component: ()=> import('@/view/page/Post.vue'),
            },
        ]
    },
    {
        path: '/notFound',
        name: 'notFound',
        component: ()=> import('@/view/page/notFound.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/notFound',
    },
    {
        path: '*',
        redirect: '/notFound',
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;