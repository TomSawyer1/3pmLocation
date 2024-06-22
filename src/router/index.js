import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import NewsPage from '../views/NewsPage.vue';
import NewsDetailPage from '../views/NewsDetailPage.vue';
import ContactPage from '../views/ContactPage.vue';
import SignupPage from '../views/SignupPage.vue';
import LoginPage from '../views/LoginPage.vue';
import SubscriptionPage from '../views/SubscriptionPage.vue';
import UserProfilePage from '../views/UserProfilePage.vue';
import LegalPage from '../views/LegalPage.vue';
import TermsPage from '../views/TermsPage.vue';
import PrivacyPage from '../views/PrivacyPage.vue';
import ModelsPage from '../views/ModelsPage.vue';

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
  { 
    path: '/signup',
    component: SignupPage 
  },
  { 
    path: '/login', 
    component: LoginPage 
  },
  { 
    path: '/subscription', 
    component: SubscriptionPage 
  },
  { 
    path: '/user-profile', 
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
  } // Nouvelle route ajoutée ici
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
