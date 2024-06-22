<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>BMW 3PM Location</ion-title>
      </ion-toolbar>
    </ion-header>
  //menu burger
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
          <ion-item router-link="/contact" detail @click="closeMenu">Contact</ion-item>
          <ion-item router-link="/signup" detail @click="closeMenu">Inscription</ion-item>
          <ion-item router-link="/login" detail @click="closeMenu">Connexion</ion-item>
          <ion-item router-link="/subscription" detail @click="closeMenu">Abonnement</ion-item>
          <ion-item router-link="/user-profile" detail @click="closeMenu">Mon Compte</ion-item>
          <ion-item router-link="/legal" detail @click="closeMenu">Mentions Légales</ion-item>
          <ion-item router-link="/terms" detail @click="closeMenu">CGV/CGU</ion-item>
          <ion-item router-link="/privacy" detail @click="closeMenu">Politique de Confidentialité</ion-item>
          <ion-item router-link="/models" detail @click="closeMenu">Nos Models</ion-item>
        </ion-list>

        
      </ion-content>
      
    </ion-menu>

    <ion-router-outlet id="main-content"></ion-router-outlet>
//footer
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

<style >
body {
  --ion-background-color: #18181b;
  --ion-text-color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

ion-toolbar {
  --background: #1f1f23;
  --color: #ffffff;
}

ion-content {
  --background: #18181b;
}

/*ion-card {
  background: #23232a;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

ion-card:hover {
  transform: translateY(-5px);
}

ion-card-title {
  font-size: 1.4em;
  font-weight: bold;
}

ion-card-subtitle {
  color: #888888;
}

ion-card-content {
  font-size: 1em;
}
*/
ion-menu-button,
ion-back-button {
  color: #ffffff;
}

/*ion-footer{
  background-color: black;
}*/
</style>
