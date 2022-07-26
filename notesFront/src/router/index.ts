import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth",
      children: [
        {
          path: "sign-up",
          name: "sign-up",
          component: () => import("../views/Auth/SignUpView.vue"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("../views/Auth/SignInView.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      children: [
        {
          path: "/tasks",
          children: [
            {
              path: "/",
              name: "tasks",
              component: () => import("../views/Task/ListTaskView.vue"),
            },
            {
              path: "/create",
              name: "create-task",
              component: () => import("../views/Task/CreateTaskView.vue"),
            },
            {
              path: "/edit/:id",
              name: "edit-task",
              component: () => import("../views/Task/EditTaskView.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
