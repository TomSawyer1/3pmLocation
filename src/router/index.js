import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import NewPage from '../views/NewPage.vue';
import BmwM3 from '../views/BmwM3.vue';
import NosModels from '../views/NosModels.vue';
import Abonnements from '../views/Abonnements.vue';
import Connexion from '../views/Connexion.vue'; // Importation de la page Connexion
import Inscription from '../views/Inscription.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/newpage',
    name: 'NewPage',
    component: NewPage
  },
  {
    path: '/bmwm3',
    name: 'BmwM3',
    component: BmwM3
  },
  {
    path: '/nosmodels',
    name: 'NosModels',
    component: NosModels
  },
  {
    path: '/abonnements',
    name: 'Abonnements',
    component: Abonnements
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
