<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>CGV/CGU</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <p>thomas ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non risus nec orci fermentum tristique.</p>
      </ion-content>
      <ion-footer>
        <ion-toolbar>
          <ion-title>© 2024 Mon Application PWA</ion-title>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonFooter } from '@ionic/vue';
  
  export default {
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonButtons,
      IonMenuButton,
      IonTitle,
      IonContent,
      IonFooter
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici votre CSS personnalisé */
  </style>
  