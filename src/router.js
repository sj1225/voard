import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'LayoutDefault',
        component: ()=> import('@/components/layouts/LayoutDefault.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: ()=> import('@/Home.vue'),
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;