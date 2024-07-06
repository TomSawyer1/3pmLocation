<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button/>
        </ion-buttons>
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding content-center">
      <ion-item>
        <ion-label position="stacked">Nom/Prénom</ion-label>
        <ion-input v-model="form.name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input v-model="form.email" type="email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Objet</ion-label>
        <ion-input v-model="form.subject"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Message</ion-label>
        <ion-textarea v-model="form.message"></ion-textarea>
      </ion-item>
      <ion-button expand="full" @click="submitForm">Envoyer</ion-button>

      <div class="contact-card contact-info">
                    <h3>Coordonnées</h3>
                    <p>19 rue Yves Toudic, 75010 Paris</p>
                    <p>Téléphone : 01 23 45 67 89</p>
                    <p>Email : contact@webstart.com</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.890080960569!2d2.364290915673417!3d48.86970847928832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1c3ed7a0c5%3A0x1a2a8e9e6e09db20!2s19%20Rue%20Yves%20Toudic%2C%2075010%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1638282062582!5m2!1sen!2sus"
                        width="100%"
                        height="250"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                
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
  IonTextarea,
  IonButton,
  IonButtons,
  IonMenuButton,
  menuController
} from '@ionic/vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
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
ion-textarea {
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

.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}
</style>
