<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>New Page</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <!-- Contenu de la nouvelle page -->
        Welcome to the New Page!
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import {
    IonHeader,
    IonPage,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonContent,
  } from '@ionic/vue';
  </script>
  
  <style scoped>
  /* Styles spécifiques à la nouvelle page */
  </style>
  