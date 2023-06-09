import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import AccountView from "../views/AccountView.vue";
import ProfileSection from "../views/account/ProfileSection.vue";
import EditProfile from "../views/account/EditProfile.vue";
import AddSong from "../views/account/AddSong.vue";
import DeleteSong from "../views/account/DeleteSong.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },

  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },

  {
    path: "/account",
    component: AccountView,
    children: [
      {
        path: "profile",
        name: "ProfileSection",
        component: ProfileSection,
      },
      {
        path: "edit-profile",
        name: "EditProfile",
        component: EditProfile,
      },
      {
        path: "add-song",
        name: "Add Song",
        component: AddSong,
      },
      {
        path: "delete-song",
        name: "Delete Song",
        component: DeleteSong,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
