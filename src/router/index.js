import {createRouter, createWebHistory } from 'vue-router'


const routers=[
    {
        path:"/",
        name:"Home",
        component:()=>import('../components/Home.vue')
    },
    {
        path:"/skills",
        name:"skills",
        component:()=>import('../components/About.vue')
    },
    {
        path:"/contact",
        name:"Contact",
        component:()=>import('../components/Contact.vue')
    },

    {
        path:"/resume",
        name:"Resume",
        component:()=>import('../components/Resume.vue')
    },

    {
        path:"/projects",
        name:"projects",
        component:()=>import('../components/Works.vue')
    },
    // catchall 404
    {
	    path:"/:catchAll(.*)",
	    name:"NotFound",
        component:()=>import('../components/Home.vue')
    }
];

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:routers
});

export default router;