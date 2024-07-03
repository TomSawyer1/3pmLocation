<template>
    <ion-split-pane when="md">
      <ion-page id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-title>Paiement</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <ion-content class="ion-padding">
          <ion-card>
            <ion-card-header>
              <ion-card-title class="ion-text-center">Récapitulatif de l'abonnement</ion-card-title>
            </ion-card-header>
  
            <ion-card-content>
              <ion-item>
                <ion-label>Nom de l'abonnement</ion-label>
                <ion-label class="ion-text-end">{{ subscriptionName }}</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Prix</ion-label>
                <ion-label class="ion-text-end">{{ subscriptionPrice }} €</ion-label>
              </ion-item>
            </ion-card-content>
          </ion-card>
              
              <ion-button expand="full" @click="makePayment">Accéder au service</ion-button>
            
        </ion-content>
      </ion-page>
    </ion-split-pane>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {
    IonSplitPane,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  } from '@ionic/vue';
  
  
  const subscriptionName = ref('Abonnement Premium');
  const subscriptionPrice = ref('19.99');
  
  const cardName = ref('');
  const cardNumber = ref('');
  const expiryDate = ref('');
  const cvv = ref('');
  const promoCode = ref('');
  
  const verifyPromoCode = () => {
    // Logique de vérification du code promo
    console.log('Code promo:', promoCode.value);
    // Vous pouvez ajouter ici l'intégration avec un service de vérification de code promo
  };
  
  const makePayment = () => {
    // Logique de traitement du paiement
    console.log('Nom du titulaire de la carte:', cardName.value);
    console.log('Numéro de la carte:', cardNumber.value);
    console.log('Date d\'expiration:', expiryDate.value);
    console.log('CVV:', cvv.value);
    // Vous pouvez ajouter ici l'intégration avec un service de paiement
  };
  </script>
  
  <style scoped>
  ion-card {
    max-width: 500px;
    margin: auto;
    margin-top: 20px;
    background: #23232a;
    color: #ffffff;
  }

  ion-card-title{
    color: #ffffff;
  }


  </style>
  