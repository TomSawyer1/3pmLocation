<template>
    <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>3PM</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-card>
      <ion-card-header>
        <ion-card-title class="ion-text-center">Inscription</ion-card-title>
      </ion-card-header>
  
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input type="text" v-model="name"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-label position="floating">Adresse Email</ion-label>
          <ion-input type="email" v-model="email"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-label position="floating">Confirmer le mot de passe</ion-label>
          <ion-input type="password" v-model="confirmPassword"></ion-input>
        </ion-item>
  
        <ion-button expand="full" @click="register">S'inscrire</ion-button>
      </ion-card-content>
    </ion-card>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  const register = () => {
    // Logique d'inscription à implémenter ici
    console.log('Nom:', name.value);
    console.log('Email:', email.value);
    console.log('Mot de passe:', password.value);
    console.log('Confirmer le mot de passe:', confirmPassword.value);
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la ion-card d'inscription */
  ion-card {
    max-width: 400px;
    margin: 10, 10;

  }
  </style>
  