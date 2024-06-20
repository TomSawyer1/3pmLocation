<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu 3PM</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <router-link to="/NewPage">
          <ion-label>Acceuil</ion-label>
        </router-link>
        </ion-item>
        <ion-item>
          <router-link to="/bmwm3">
            <ion-label>BMW M3</ion-label>
          </router-link>
        </ion-item>
        <ion-item>
          <router-link to="/NosModels">
          <ion-label>Nos Models</ion-label>
        </router-link>
      </ion-item>
        <ion-item>
          <router-link to="/abonnements">
          <ion-label>Abonnements</ion-label>
        </router-link>
        </ion-item>
        <ion-item>
          <router-link to="connexion">
          <ion-label>Connexion / Inscription</ion-label>
        </router-link>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>3PM</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Tap the button in the toolbar to open the menu.</ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonHeader,
  IonPage,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonButtons,
  IonContent,
  IonMenu,
  IonTitle,
  IonToolbar,
  
} from '@ionic/vue';

import { RouterLink } from 'vue-router';

import {
  //ellipsisHorizontal,
  //ellipsisVertical, 
} from 'ionicons/icons';

//import { getMessages } from '@/data/messages';
//import { ref } from 'vue';

//const messages = ref(getMessages());

/*const refresh = (ev) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};*/
</script>

<style scoped>
ion-menu {
  --ion-toolbar-background: #3880ff;
}

ion-content {
  --padding-start: 16px;
  --padding-end: 16px;
}
</style>
