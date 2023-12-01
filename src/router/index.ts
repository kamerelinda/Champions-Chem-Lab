import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/Home/HomeView.vue";
import VirtualGamesView from "@/views/Nav Pages/VirtualGamesView.vue";
import AssignmentsView from "@/views/Nav Pages/AssignmentsView.vue";
import CommunitiesView from "@/views/Nav Pages/CommunitiesView.vue";
import VideoLessonsView from "@/views/Nav Pages/VideoLessonsView.vue";
import PuzzleGamesView from "@/views/Nav Pages/PuzzleGamesView.vue";
import HomePageView from "@/views/Home/HomePageView.vue";
import AdminLoginView from "@/views/Admin Login/AdminLoginView.vue";
import AdminRegistrationView from "@/views/Admin SignUp/AdminRegistrationView.vue";
import AdminActivateView from "@/views/Admin SignUp/AdminActivateView.vue";
import AdminBuildClassView from "@/views/Admin SignUp/AdminBuildClassView.vue";
import StudentLoginView from "@/views/Student Login/StudentLoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'admin signup',
      component: AdminRegistrationView
    },
    {
      path: '/signup/build_classroom',
      name: 'build my class',
      component: AdminBuildClassView
    },
    {
      path: '/signup/activate_plan',
      name: 'activation',
      component: AdminActivateView
    },
    {
      path: '/admin_login',
      name: 'admin login',
      component: AdminLoginView
    },
    {
      path: '/student_login',
      name: 'student login',
      component: StudentLoginView
    },
    {
      path: '/homepage',
      name: 'registered home',
      component: HomePageView
    },
    {
      path: '/',
      name: 'home1',
      component: HomeView
    },

    {
      path: '/3d_games',
      name: 'gaming',
      component: VirtualGamesView
    },
    {
      path: '/puzzle_games',
      name: 'puzzles',
      component: PuzzleGamesView
    },
    {
      path: '/video_lessons',
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
