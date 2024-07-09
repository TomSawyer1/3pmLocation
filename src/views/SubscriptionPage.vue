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
      <div v-for="product in products" :key="product.id">
        <ion-card :color="getCardColor(product.name)">
          <ion-card-header>
            <ion-card-title>{{ product.name }}</ion-card-title>
            <ion-card-subtitle>Abonnement</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            <p>{{ product.description }}</p>
            <p v-for="detail in product.details.split(',')" :key="detail">{{ detail }}</p>
            <p>{{ product.price / 100 }}€/Mois</p> 
          </ion-card-content>
        </ion-card>
      </div>

      <ion-item>
        <ion-label position="stacked">Type d'abonnement</ion-label>
        <ion-select v-model="form.subscriptionType">
          <ion-select-option v-for="product in products" :key="product.id" :value="product.id">
            {{ product.name }} - {{ product.price / 100 }}€/Mois
          </ion-select-option>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { subscriptionStore } from '../stores';
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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  menuController
} from '@ionic/vue';

const router = useRouter();
const store = subscriptionStore();

const form = ref({
  subscriptionType: '',
  promoCode: ''
});

const products = ref([]);

const getProducts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/subscription');
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const getCardColor = (name) => {
  if (name.includes('Basic')) return 'primary';
  if (name.includes('Prenium')) return 'secondary';
  if (name.includes('Prenium+')) return 'danger';
  return 'default';
};

const submitForm = () => {
  const selectedProduct = products.value.find(product => product.id === form.value.subscriptionType);
  if (selectedProduct) {
    store.setSelectedSubscription(selectedProduct);
    router.push('/subscription/payment');
  } else {
    console.error('No subscription selected');
  }
};

const closeMenu = () => {
  menuController.close();
};

onMounted(() => {
  getProducts();
});
</script>

<style scoped>
ion-item {
  --background: #23232a;
  --color: #ffffff;
  margin-bottom: 15px;
}

ion-label {
  color: #03b64d;
}

ion-input,
ion-select {
  color: #fff;
}

ion-select-option{
  --background: #fff;
  --color: #000;
}

ion-toolbar {
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
