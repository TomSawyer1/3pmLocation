<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="closeMenu"/>
        </ion-buttons>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Bienvenue sur BMW 3PM Location </h1>
      <p>Découvrez nos services de location de voitures de luxe et abonnez-vous pour en profiter pleinement.</p>
      <ion-card class="model-card">
        <img alt="BMW M3 E90" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-header>
          <ion-card-title>BMW M3 E90</ion-card-title>
          <ion-card-subtitle>Sportive élégante</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Abonnement A: 2€ par minute.
        </ion-card-content>
      </ion-card>
      <ion-card class="model-card">
        <img alt="BMW M3 F80" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-header>
          <ion-card-title>BMW M3 F80</ion-card-title>
          <ion-card-subtitle>Performance et style</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Abonnement B: 2.5€ par minute.
        </ion-card-content>
      </ion-card>
      <ion-card class="model-card">
        <img alt="BMW M3 G80" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-header>
          <ion-card-title>BMW M3 G80</ion-card-title>
          <ion-card-subtitle>Puissance et technologie</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Abonnement C: 3€ par minute.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButtons,
  IonMenuButton,
  menuController
} from '@ionic/vue';

const closeMenu = () => {
  menuController.close();
};
</script>

<style scoped>
ion-card {
  background: #23232a;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

ion-card:hover {
  transform: translateY(-5px);
}

ion-card-title {
  font-size: 1.4em;
  font-weight: bold;
}

ion-card-subtitle {
  color: #888888;
}

ion-card-content {
  font-size: 1em;
  color: #ffffff;
}

ion-toolbar {
  --background: #1f1f1f;
  --color: #ffffff;
}

ion-header ion-title {
  font-size: 1.4em;
}
</style>
