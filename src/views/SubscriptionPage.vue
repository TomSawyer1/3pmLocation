<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="closeMenu"/>
        </ion-buttons>
        <ion-title>Abonnement</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Type d'abonnement</ion-label>
        <ion-select v-model="form.subscriptionType">
          <ion-select-option value="A">Abonnement A - 2€/minute</ion-select-option>
          <ion-select-option value="B">Abonnement B - 2.5€/minute</ion-select-option>
          <ion-select-option value="C">Abonnement C - 3€/minute</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Code promo</ion-label>
        <ion-input v-model="form.promoCode"></ion-input>
      </ion-item>
      <ion-button expand="full" @click="submitForm">Souscrire</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonButtons,
  IonMenuButton,
  menuController
} from '@ionic/vue';

const form = ref({
  subscriptionType: '',
  promoCode: ''
});

const submitForm = () => {
  console.log('Form Submitted:', form.value);
  // Logic for form submission
};

const closeMenu = () => {
  menuController.close();
};
</script>

<style scoped>
ion-item {
  --background: #23232a;
  --color: #ffffff;
  margin-bottom: 15px;
}

ion-label {
  color: #ffffff;
}

ion-input,
ion-select {
  color: #ffffff;
}

ion-toolbar {
  --background: #1f1f1f;
  --color: #ffffff;
}

ion-header ion-title {
  font-size: 1.4em;
}

ion-content {
  background-color: #18181b;
  --padding-start: 16px;
  --padding-end: 16px;
  color: #ffffff;
}
</style>
