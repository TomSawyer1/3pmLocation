<template>
    <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>3PM</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-card>
      <ion-card-header>
        <ion-card-title class="ion-text-center">Connexion</ion-card-title>
      </ion-card-header>
  
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Adresse Email</ion-label>
          <ion-input type="email" v-model="email"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>
  
        <ion-button expand="full" @click="login">Se connecter</ion-button>

      </ion-card-content>
    </ion-card>
    </ion-page>
  </template>
  
  <script setup>
    import { 
        IonCard, 
        IonCardHeader, 
        IonCardTitle, 
        IonCardContent, 
        IonItem, 
        IonLabel, 
        IonInput, 
        IonButton, 
    } from '@ionic/vue';

    import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const login = () => {
    // Logique de connexion à implémenter ici
    console.log('Email:', email.value);
    console.log('Mot de passe:', password.value);
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la ion-card de connexion */
  ion-card {
    max-width: 400px;
    margin: auto;
    margin-top: 20px;
  }
  </style>
  