<template>
  <MenuComponent />
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="closeMenu"/>
        </ion-buttons>
        <ion-title>Nos Models</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" scroll-y="true">
      <ion-card class="model-card">
        <ion-img alt="BMW M3 E90" src="../public/img/white.jpg" />
        <ion-card-header>
          <ion-card-title>BMW M3 E90</ion-card-title>
          <ion-card-subtitle>Sportive élégante</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Voici une brève description du contenu de la carte. Rien de plus, rien de moins.
        </ion-card-content>
      </ion-card>

      <ion-card class="model-card">
        <ion-img alt="BMW M3 F80" src="../public/img/Bmwblue.jpg" />
        <ion-card-header>
          <ion-card-title>BMW M3 F80</ion-card-title>
          <ion-card-subtitle>Performance et style</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Voici une brève description du contenu de la carte. Rien de plus, rien de moins.
        </ion-card-content>
      </ion-card>

      <ion-card class="model-card">
        <ion-img alt="BMW M3 G80" src="../public/img/Bmwred2.jpg" />
        <ion-card-header>
          <ion-card-title>BMW M3 G80</ion-card-title>
          <ion-card-subtitle>Puissance et technologie</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Voici une brève description du contenu de la carte. Rien de plus, rien de moins.
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
  IonImg,
  menuController
} from '@ionic/vue';

const closeMenu = () => {
  menuController.close();
};
</script>

<style scoped>
/* Styles spécifiques au composant Card */
ion-card {
  margin-bottom: 20px; /* Espacement entre chaque ion-card */
  border-radius: 10px; /* Bords arrondis pour les cartes */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre pour les cartes */
  overflow: hidden; /* S'assurer que le contenu ne dépasse pas */
  transition: transform 0.2s; /* Animation au survol */
}

ion-card:hover {
  transform: translateY(-5px); /* Déplacement vers le haut au survol */
}

ion-card img {
  width: 100%; /* Image pleine largeur */
  height: auto; /* Hauteur automatique */
}

ion-card-title {
  font-size: 1.2em; /* Taille de police augmentée pour le titre */
  font-weight: bold; /* Titre en gras */
  color: #fff;
}

ion-card-subtitle {
  color: #fff; /* Couleur du sous-titre */
  font-size: 1em; /* Taille de police pour le sous-titre */
}

ion-card-content {
  font-size: 0.9em; /* Taille de police pour le contenu */
  color: #fff; /* Couleur du texte */
  padding: 10px 16px; /* Espacement interne */
}

ion-toolbar {
  --background: #f8f8f8; /* Couleur de fond de la barre d'outils */
  --color: #000; /* Couleur du texte de la barre d'outils */
}

ion-header ion-title {
  font-size: 1.4em; /* Taille de police augmentée pour le titre de la barre d'outils */
}

ion-content {
  background-color: #f5f5f5; /* Couleur de fond du contenu */
  --padding-start: 16px;
  --padding-end: 16px;
}
</style>
