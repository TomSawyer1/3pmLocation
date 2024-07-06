<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="closeMenu"/>
        </ion-buttons>
        <ion-title>3PM Location</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content-center">
      <div class="text-center">
        <h1> BMW 3PM Location</h1>
        <p>Découvrez nos services de location de voitures de luxe et abonnez-vous pour en profiter pleinement.</p>
        <ion-button class="custom-button" router-link="/subscription">Abonnement</ion-button>
      </div>
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
  IonButtons,
  IonMenuButton,
  IonButton,
  menuController
} from '@ionic/vue';

const closeMenu = () => {
  menuController.close();
};
</script>

<style scoped>
ion-title {
  font-size: 1.4em;
}

ion-content {
  --background: url('../public/img/BmwWall.jpg') no-repeat center center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Prend toute la hauteur de la vue */
}

.text-center {
  text-align: center;
  background: rgba(0, 0, 0, 0.5); /* Fond semi-transparent pour le texte */
  padding: 20px;
  border-radius: 10px;
}

h1 {
  margin-bottom: 20px;
  color: #fff;
}

p{
  color: #fff;
}

.custom-button {
  width: 200px; /* Vous pouvez ajuster la largeur ici */
  border-radius: 20px; /* Vous pouvez ajuster le rayon des bords ici */
  --background: #3880ff; /* Optionnel : changer la couleur de fond du bouton */
}
</style>
