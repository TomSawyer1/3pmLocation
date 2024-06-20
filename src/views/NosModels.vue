<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Nos Models</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding" scroll-y="true">
        <ion-card>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <ion-card-header>
            <ion-card-title>BMW M3 E90</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
  
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>
  
        <ion-card>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <ion-card-header>
            <ion-card-title>BMW M3 F80</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
  
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>
  
        <ion-card>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <ion-card-header>
            <ion-card-title>BMW M3 G80</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
  
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
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
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
  } from '@ionic/vue';
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant Card */
  
  ion-card {
    margin-bottom: 20px; /* Espacement entre chaque ion-card */
  }
  </style>
  