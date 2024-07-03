<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Paiement Réussi</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title class="ion-text-center">Paiement Réussi</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="success-message">
              <ion-icon name="checkmark-circle-outline" size="large" class="success-icon"></ion-icon>
              <p>Votre paiement a été effectué avec succès.</p>
            </div>
            <ion-button expand="full" router-link="/">Retour à l'accueil</ion-button>
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
  .success-message {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .success-icon {
    color: green;
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  ion-card-title {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  </style>
  