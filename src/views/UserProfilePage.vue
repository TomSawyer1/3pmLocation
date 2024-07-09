
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
      <ion-card color="primary">
        <ion-card-header>
          <ion-card-title>{{ user.firstName }} {{ user.lastName }}</ion-card-title>
          <ion-card-subtitle>{{ user.email }}</ion-card-subtitle>
          <ion-card-subtitle>Vous possedez un abonnement {{ currentSubscription }}</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
      
      <ion-item>
        <ion-label position="stacked">Prénom</ion-label>
        <ion-input v-model="user.firstName"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Nom</ion-label>
        <ion-input v-model="user.lastName"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input v-model="user.email" type="email"></ion-input>
      </ion-item>

      <!-- Affichage des informations d'abonnement -->
      <ion-item v-if="hasSubscription">
        <ion-label position="stacked">Statut de l'abonnement</ion-label>
        <ion-input v-model="user.subscriptionStatus" readonly></ion-input>
      </ion-item>
      <ion-item v-if="hasSubscription">
        <ion-label position="stacked">Fin de la période actuelle</ion-label>
        <ion-input v-model="user.currentPeriodEnd" readonly></ion-input>
      </ion-item>

      <ion-button expand="full" @click="updateProfile">Mettre à jour</ion-button>
      <ion-button expand="full" color="danger" @click="deleteAccount">Supprimer le compte</ion-button>
      
      <ion-button v-if="hasSubscription" expand="full" @click="accessBillingPortal">Accéder au portail de facturation</ion-button>

      <ion-alert
        v-if="showDeleteAlert"
        :is-open="showDeleteAlert"
        header="Compte supprimé"
        message="Votre compte a été supprimé avec succès. Redirection vers l'inscription dans 2 secondes."
        buttons="OK"
      />
      <ion-alert
        v-if="showUpdateAlert"
        :is-open="showUpdateAlert"
        header="Succès"
        message="Votre profil a été mis à jour avec succès."
        buttons="OK"
        @didDismiss="handleAlertDismiss"
      />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
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
  menuController,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonAlert
} from '@ionic/vue';
import { authStore } from '../stores';

const router = useRouter();
const store = authStore();

const user = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  subscriptionStatus: '',
  currentPeriodEnd: ''
});

const hasSubscription = ref(false);
const showUpdateAlert = ref(false);
const showDeleteAlert = ref(false);
const payments = ref([]);

const currentSubscription = ref('en cours de chargement...');

const recentPayments = computed(() => {
  return payments.value.filter(payment => payment.type === 'Passé');
});

const upcomingPayments = computed(() => {
  return payments.value.filter(payment => payment.type === 'À venir');
});

const getUserProfile = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const userData = response.data;
    const [firstName, lastName] = userData.name.split(' ');
    user.value.firstName = firstName;
    user.value.lastName = lastName;
    user.value.email = userData.email;
    user.value.subscriptionStatus = userData.subscription_status;
    user.value.currentPeriodEnd = new Date(userData.current_period_end).toLocaleDateString();

    hasSubscription.value = !!userData.stripe_customer_id;

    const paymentResponse = await axios.get('http://127.0.0.1:8000/api/payments', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    payments.value = paymentResponse.data;

    // Assuming the subscription name is part of the user data response
    currentSubscription.value = userData.subscription_name || 'aucun abonnement actif';
  } catch (error) {
    console.error('Error fetching user profile:', error);
    currentSubscription.value = 'aucun abonnement actif';
  }
};

const updateProfile = async () => {
  try {
    await axios.put('http://127.0.0.1:8000/api/user', {
      first_name: user.value.firstName,
      last_name: user.value.lastName,
      email: user.value.email,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    showUpdateAlert.value = true;
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};

const deleteAccount = async () => {
  try {
    await axios.delete('http://127.0.0.1:8000/api/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    showDeleteAlert.value = true;

    setTimeout(() => {
      store.logout();
      router.push('/');
    }, 2000);

  } catch (error) {
    console.error('Error deleting account:', error);
  }
};

const accessBillingPortal = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/stripe/customer', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    window.location.href = response.data.url;
  } catch (error) {
    console.error('Error accessing billing portal:', error);
  }
};

const handleAlertDismiss = () => {
  showUpdateAlert.value = false;
};

const closeMenu = () => {
  menuController.close();
};

onMounted(() => {
  getUserProfile();
});
</script>

<style scoped>
ion-item {
  margin-bottom: 15px;
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
}
</style>
