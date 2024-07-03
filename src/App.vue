<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>3PM Location</ion-title>
      </ion-toolbar>
    </ion-header>

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
          <ion-item router-link="/signup" detail @click="closeMenu">Inscription</ion-item>
          <ion-item router-link="/login" detail @click="closeMenu">Connexion</ion-item>
          <ion-item router-link="/user-profile" detail @click="closeMenu">Mon Compte</ion-item>
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

<script>
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

export default {
  components: {
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
    IonFooter
  },
  methods: {
    closeMenu() {
      menuController.close();
    }
  }
};
</script>

<style>
body {
  --ion-background-color: #18181b;
  --ion-text-color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

ion-toolbar {
  --background: #1f1f23;
  --color: #ffffff;
}


ion-menu-button,
ion-back-button {
  color: #ffffff;
}


</style> 
