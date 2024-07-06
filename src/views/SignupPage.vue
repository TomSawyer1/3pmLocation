<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="closeMenu"/>
        </ion-buttons>
        <ion-title>Inscription</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Prénom</ion-label>
        <ion-input v-model="form.firstName"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Nom</ion-label>
        <ion-input v-model="form.lastName"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input v-model="form.email" type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Mot de passe</ion-label>
        <ion-input v-model="form.password" type="password"></ion-input>
      </ion-item>
      <ion-button expand="full" @click="submitForm">S'inscrire</ion-button>
      <ion-text v-if="errorMessage" color="danger">{{ errorMessage }}</ion-text>
      <ion-text v-if="successMessage" color="success">{{ successMessage }}</ion-text>
      
      <ion-alert
        v-if="showAlert"
        :is-open="showAlert"
        header="Inscription réussie"
        message="Votre compte a été créé avec succès. Vous allez être redirigé vers la page de connexion."
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
  IonText,
  menuController
} from '@ionic/vue';

const router = useRouter();

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
});

const errorMessage = ref('');
const successMessage = ref('');
const showAlert = ref(false);

const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/register', {
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
    });
    successMessage.value = 'User successfully registered!';
    errorMessage.value = '';
    showAlert.value = true; // Afficher l'alerte

    console.log('Form Submitted:', response.data);
  } catch (error) {
    errorMessage.value = 'Error submitting form: ' + (error.response.data.message || error.message);
    successMessage.value = '';
    console.error('Error submitting form:', error);
  }
};

const handleAlertDismiss = () => {
  showAlert.value = false;
  router.push('/login'); // Rediriger vers la page de connexion
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
