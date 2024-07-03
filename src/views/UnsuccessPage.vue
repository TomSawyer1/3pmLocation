<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Paiement Échoué</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title class="ion-text-center">Paiement Échoué</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="error-message">
              <ion-icon name="close-circle-outline" size="large" class="error-icon"></ion-icon>
              <p>Votre paiement n'a pas pu être traité.</p>
            </div>
            <ion-button expand="full" router-link="/payment">Réessayer le Paiement</ion-button>
            <ion-button expand="full" fill="outline" router-link="/">Retour à l'accueil</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
  } from '@ionic/vue';
  </script>
  
  <style scoped>
  .error-message {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .error-icon {
    color: red;
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  ion-card-title {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  </style>
  