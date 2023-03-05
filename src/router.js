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
                path: '/detail',
                name: 'detail',
                component: ()=> import('@/view/page/Detail.vue'),
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;