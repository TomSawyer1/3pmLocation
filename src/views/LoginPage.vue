<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="closeMenu"/>
        </ion-buttons>
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input v-model="form.email" type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Mot de passe</ion-label>
        <ion-input v-model="form.password" type="password"></ion-input>
      </ion-item>
      <ion-button expand="full" @click="submitForm">Se connecter</ion-button>

      <ion-alert
        v-if="showAlert"
        :is-open="showAlert"
        header="Connexion réussie"
        message="Connexion réussie, redirection vers les abonnements."
        buttons="OK"
        @didDismiss="handleAlertDismiss"
      />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
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
  IonAlert,
  menuController
} from '@ionic/vue';
// pinia
import { authStore } from '../stores'; // Chemin corrigé pour importer depuis stores/index.js
const router = useRouter();
// init pinia dans une const
const store = authStore();

const form = ref({
  email: '',
  password: ''
});

const showAlert = ref(false);

const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: form.value.email,
      password: form.value.password
    });

    // Stocker le jeton dans le localStorage
    localStorage.setItem('token', response.data.token);

    // Afficher l'alerte de succès
    showAlert.value = true;

    // on appelle "l'action" login()
    store.login();

    console.log('Form Submitted:', response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
    // Afficher une alerte d'erreur ou gérer l'erreur selon les besoins
  }
};

const handleAlertDismiss = () => {
  showAlert.value = false;
  router.push('/subscription'); // Rediriger vers la page des abonnements
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
