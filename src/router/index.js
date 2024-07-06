import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import NewsPage from '../views/NewsPage.vue';
import NewsDetailPage from '../views/NewsDetailPage.vue';
import ContactPage from '../views/ContactPage.vue';
import SignupPage from '../views/SignupPage.vue';
import LoginPage from '../views/LoginPage.vue';
import SubscriptionPage from '../views/SubscriptionPage.vue';
import PayCardPage from '../views/PayCardPage.vue';
import UserProfilePage from '../views/UserProfilePage.vue';
import LegalPage from '../views/LegalPage.vue';
import TermsPage from '../views/TermsPage.vue';
import PrivacyPage from '../views/PrivacyPage.vue';
import ModelsPage from '../views/ModelsPage.vue';
import SuccessPage from '../views/SuccessPage.vue';
import UnsuccessPage from '../views/UnsuccessPage.vue';
import { authStore } from '../stores';

const routes = [
  { 
    path: '/',
    component: HomePage 
  },
  { 
    path: '/news',
    component: NewsPage 
  },
  { 
    path: '/news/:id', 
    component: NewsDetailPage 
  },
  { 
    path: '/contact', 
    component: ContactPage 
  },
  // login & signup accessible que si on est pas connecté
  { 
    path: '/signup',
    component: SignupPage,
    meta: { requiresAuth: false }
  },
  { 
    path: '/login', 
    component: LoginPage,
    meta: { requiresAuth: false }
  },
  { 
    path: '/subscription', 
    component: SubscriptionPage 
  },
  // faut etre connecte car state a true 
  {
    path: '/subscription/payment',
    component: PayCardPage,
    meta: { requiresAuth: true }
  },
  { 
    path: '/user-profile', 
    meta: { requiresAuth: true },
    component: UserProfilePage
  },
  { 
    path: '/legal', 
    component: LegalPage 
  },
  { 
    path: '/terms', 
    component: TermsPage 
  },
  { 
    path: '/privacy', 
    component: PrivacyPage 
  },
  { 
    path: '/models', 
    component: ModelsPage 
  },
  {
    path:'/successpay',
    component: SuccessPage,
    meta: { requiresAuth: true }
  },
  {
    path:'/unsuccesspay',
    component: UnsuccessPage,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// appel du middleware qui va renvoyez vers login si non connecte

//beforeEach qui permet d'etre appeller en premier 
router.beforeEach((to, from, next) => {
  const store = authStore();
  // appel de mon action checkAuth
  store.checkAuth();
  // vérifie si l'utilisateur est connecté
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    // si l'utilisateur n'est pas connecté et la route nécessite une authentification
    next('/login');
  } else if (!to.meta.requiresAuth && store.isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    // si l'utilisateur est connecté et essaie d'accéder à la page de connexion ou d'inscription
    next('/user-profile');
  } else {
    // si aucune des conditions ci-dessus n'est remplie
    next();
  }
});

export default router;
