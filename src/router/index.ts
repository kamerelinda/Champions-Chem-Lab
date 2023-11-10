import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import VirtualGamesView from "@/views/VirtualGamesView.vue";
import AssignmentsView from "@/views/AssignmentsView.vue";
import CommunitiesView from "@/views/CommunitiesView.vue";
import VideoLessonsView from "@/views/VideoLessonsView.vue";
import PuzzleGamesView from "@/views/PuzzleGamesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home1',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/3dgames',
      name: 'gaming',
      component: VirtualGamesView
    },
    {
      path: '/puzzlegames',
      name: 'puzzles',
      component: PuzzleGamesView
    },
    {
      path: '/videolessons',
      name: 'training videos',
      component: VideoLessonsView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunitiesView
    },
    {
      path: '/assignments',
      name: 'homework',
      component: AssignmentsView
    },

  ]
})

export default router
