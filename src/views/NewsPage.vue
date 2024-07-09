<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="closeMenu"/>
        </ion-buttons>
        <ion-title>Actualités</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" scroll-y="true">
      <ion-card v-for="news in newsList" :key="news.id" class="news-card" :router-link="`/news/${news.id}`" @click="closeMenu">
        <ion-img :alt="news.title" :src="news.image" />
        <ion-card-header>
          <ion-card-title>{{ news.title }}</ion-card-title>
          <ion-card-subtitle>{{ news.subtitle }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ news.content }}
        </ion-card-content>
      </ion-card>
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

const newsList = ref([
  { id: 1, title: 'Actualité 1', subtitle: 'Sous-titre 1', content: 'Voici une brève description de l\'actualité 1.', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  { id: 2, title: 'Actualité 2', subtitle: 'Sous-titre 2', content: 'Voici une brève description de l\'actualité 2.', image: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  { id: 3, title: 'Actualité 3', subtitle: 'Sous-titre 3', content: 'Voici une brève description de l\'actualité 3.', image: 'https://ionicframework.com/docs/img/demos/card-media.png' }
]);

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
}

ion-card-subtitle {
  font-size: 1em; /* Taille de police pour le sous-titre */
}

ion-card-content {
  font-size: 0.9em; /* Taille de police pour le contenu */
  padding: 10px 16px; /* Espacement interne */
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
