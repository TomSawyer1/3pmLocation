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

            <!-- Utilisation de la carte de danger -->
            <ion-card color="danger">
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content> 
          <ion-list>
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>Item</ion-label>
        </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      
      
      <!-- Tableau des prélèvements des trois derniers mois -->
      <ion-grid>
        <ion-row>
          <ion-col>Type</ion-col>
          <ion-col>Date</ion-col>
          <ion-col>Montant</ion-col>
        </ion-row>
        <ion-row v-for="payment in recentPayments" :key="payment.id">
          <ion-col>{{ payment.type }}</ion-col>
          <ion-col>{{ payment.date }}</ion-col>
          <ion-col>{{ payment.amount }}</ion-col>
        </ion-row>
      </ion-grid>
      
      <!-- Tableau des prélèvements à venir -->
      <ion-grid>
        <ion-row>
          <ion-col>Type</ion-col>
          <ion-col>Date</ion-col>
          <ion-col>Montant</ion-col>
        </ion-row>
        <ion-row v-for="payment in upcomingPayments" :key="payment.id">
          <ion-col>{{ payment.type }}</ion-col>
          <ion-col>{{ payment.date }}</ion-col>
          <ion-col>{{ payment.amount }}</ion-col>
        </ion-row>
      </ion-grid>

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
import { ref, computed } from 'vue';
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
  menuController,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/vue';

const user = ref({
  name: '',
  email: '',
  password: ''
});

const payments = ref([
  { id: 1, type: 'Passé', date: '2023-03-01', amount: '100€' },
  { id: 2, type: 'Passé', date: '2023-05-01', amount: '100€' },
  { id: 3, type: 'À venir', date: '2024-01-01', amount: '100€' },
  { id: 4, type: 'Passé', date: '2024-02-01', amount: '100€' },
  { id: 5, type: 'À venir', date: '2024-03-01', amount: '100€' },
]);

const recentPayments = computed(() => {
  return payments.value.filter(payment => payment.type === 'Passé');
});

const upcomingPayments = computed(() => {
  return payments.value.filter(payment => payment.type === 'À venir');
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

// Debugging logs to verify computed values
console.log('Recent Payments:', recentPayments.value);
console.log('Upcoming Payments:', upcomingPayments.value);
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

ion-grid {
  padding: 16px;
}

ion-row {
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  color: #ffffff; /* Pour s'assurer que le texte est visible */
}
</style>
