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
  
          <ion-card>
            <ion-card-header>
              <ion-card-title class="ion-text-center">Informations de paiement</ion-card-title>
            </ion-card-header>
  
            <ion-card-content>
              <ion-item>
                <ion-label position="floating">Nom du titulaire de la carte</ion-label>
                <ion-input v-model="cardName"></ion-input>
              </ion-item>
  
              <ion-item>
                <ion-label position="floating">Numéro de la carte</ion-label>
                <ion-input type="tel" inputmode="numeric" pattern="[0-9]*" v-model="cardNumber"></ion-input>
              </ion-item>
  
              <ion-item>
                <ion-label position="floating">Date d'expiration</ion-label>
                <ion-input type="month" v-model="expiryDate"></ion-input>
              </ion-item>
  
              <ion-item>
                <ion-label position="floating">Code CVV</ion-label>
                <ion-input type="password" inputmode="numeric" pattern="[0-9]*" v-model="cvv"></ion-input>
              </ion-item>
              
              <ion-item>
                <ion-label position="floating">Code Promo</ion-label>
                <ion-input v-model="promoCode"></ion-input>
                <ion-button slot="end" @click="verifyPromoCode">Vérifier</ion-button>
              </ion-item>
              
              <ion-button expand="full" @click="makePayment">Payer</ion-button>
            </ion-card-content>
          </ion-card>
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
  