<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/subscription"></ion-back-button>
        </ion-buttons>
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
            <ion-label class="ion-text-end">{{ subscription.name }}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Prix</ion-label>
            <ion-label class="ion-text-end">{{ subscription.price / 100 }} €</ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-button expand="full" @click="makePayment">Accéder au service</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { subscriptionStore } from '../stores';
import axios from 'axios';
import {
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
  IonButton,
  IonBackButton,
  IonButtons
} from '@ionic/vue';

const store = subscriptionStore();
const subscription = computed(() => store.selectedSubscription);

const makePayment = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/stripe/checkout', {
      product_id: subscription.value.id
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    window.location.href = response.data.url;
  } catch (error) {
    console.error('Error processing payment:', error);
  }
};

const router = useRouter();

if (!subscription.value) {
  router.push('/subscription');
}
</script>

<style scoped>
ion-card {
  max-width: 500px;
  margin: auto;
  margin-top: 20px;
  background: #23232a;
  color: #ffffff;
}

ion-card-title {
  color: #ffffff;
}
</style>
