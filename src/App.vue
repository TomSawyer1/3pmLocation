<template>
  <ion-app>
    <!-- Menu Burger -->
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :scroll-y="false">
        <ion-list>
          <ion-item router-link="/" detail @click="closeMenu">Accueil</ion-item>
          <ion-item router-link="/news" detail @click="closeMenu">Actualités</ion-item>
          <ion-item router-link="/models" detail @click="closeMenu">Nos Models</ion-item>
          <ion-item router-link="/subscription" detail @click="closeMenu">Abonnement</ion-item>
          <ion-item router-link="/signup" v-if="!isAuthenticated" detail @click="closeMenu">Inscription</ion-item>
          <ion-item router-link="/login" v-if="!isAuthenticated" detail @click="closeMenu">Connexion</ion-item>
          <ion-item router-link="/user-profile" v-if="isAuthenticated" detail @click="closeMenu">Mon Compte</ion-item>
          <ion-item v-if="isAuthenticated" detail @click="logout">Déconnexion</ion-item>
          <ion-item router-link="/contact" detail @click="closeMenu">Contact</ion-item>
          <ion-item router-link="/legal" detail @click="closeMenu">Mentions Légales</ion-item>
          <ion-item router-link="/terms" detail @click="closeMenu">CGV/CGU</ion-item>
          <ion-item router-link="/privacy" detail @click="closeMenu">Politique de Confidentialité</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet id="main-content"></ion-router-outlet>

    <!-- Footer (Optionnel) -->
    <!--<ion-footer collapse="fade">
      <ion-toolbar>
        <ion-title>© 2024 BMW 3PM Location</ion-title>
      </ion-toolbar>
    </ion-footer> -->
  </ion-app>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { authStore } from './stores'; // Assurez-vous que le chemin est correct
import { 
  IonApp,
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonMenuButton, 
  IonContent, 
  IonList, 
  IonItem, 
  IonRouterOutlet, 
  IonFooter, 
  menuController 
} from '@ionic/vue';

const router = useRouter();
const store = authStore();
const isAuthenticated = computed(() => store.isAuthenticated);

const closeMenu = () => {
  menuController.close();
};

const logout = () => {
  store.logout();
  closeMenu();
  router.push('/login');
};

onMounted(() => {
  store.checkAuth();
});
</script>

<style>
body {
  /* --ion-background-color: #18181b;
   --ion-text-color: #ffffff; */
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

ion-toolbar {
  --background: rgb(0,96,166);
  --background: linear-gradient(118deg, rgba(0,96,166,1) 7%, rgba(156,0,0,1) 12%, rgba(0,0,0,1) 18%);
  --color: #ffffff;
}

ion-title {
  color: var(--ion-text-color);
  font-size: 1.2em; /* Taille de police pour les titres */
}

ion-menu-button,
ion-back-button {
  color: var(--ion-text-color);
}

.custom-button{
  width: 200px;
  border-radius: 20px;
}
</style>
