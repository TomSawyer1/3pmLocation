<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Politique de Confidentialité</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non risus nec orci fermentum tristique.</p>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/vue';
  
  export default {
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonButtons,
      IonMenuButton,
      IonTitle,
      IonContent
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici votre CSS personnalisé */
  </style>
  