<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="closeMenu"/>
        </ion-buttons>
        <ion-title>Mon Compte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Nom</ion-label>
        <ion-input v-model="user.name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input v-model="user.email" type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Mot de passe</ion-label>
        <ion-input v-model="user.password" type="password"></ion-input>
      </ion-item>
      <ion-button expand="full" @click="updateProfile">Mettre à jour</ion-button>
      <ion-button expand="full" color="danger" @click="deleteAccount">Supprimer le compte</ion-button>
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
  IonInput,
  IonButton,
  IonButtons,
  IonMenuButton,
  menuController
} from '@ionic/vue';

const user = ref({
  name: '',
  email: '',
  password: ''
});

const updateProfile = () => {
  console.log('Profile Updated:', user.value);
  // Logic for updating profile
};

const deleteAccount = () => {
  console.log('Account Deleted');
  // Logic for deleting account
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

ion-input {
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