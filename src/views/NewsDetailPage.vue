<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="closeMenu"/>
        </ion-buttons>
        <ion-title>Détails de l'actualité</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" scroll-y="true">
      <ion-card class="news-detail-card">
        <ion-card-header>
          <ion-card-title>{{ news.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>{{ news.content }}</p>
        </ion-card-content>
      </ion-card>
      <ion-button expand="full" color="tertiary" shape="round" @click="goBack">Retour aux actualités</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  menuController
} from '@ionic/vue';

const route = useRoute();
const router = useRouter();
const news = ref({ title: '', content: '' });

onMounted(() => {
  const newsId = route.params.id;
  // Fetch news details using the newsId
  news.value = {
    title: `Actualité ${newsId}`,
    content: `Contenu de l'actualité ${newsId}`
  };
});

const closeMenu = () => {
  menuController.close();
};

const goBack = () => {
  router.push('/news');
};
</script>

<style scoped>
ion-header ion-title {
  font-size: 1.4em;
}

ion-content {
  background-color: #f5f5f5; /* Couleur de fond du contenu */
  --padding-start: 16px;
  --padding-end: 16px;
  color: #000000;
}

.news-detail-card {
  margin-bottom: 20px; /* Espacement entre chaque ion-card */
  border-radius: 10px; /* Bords arrondis pour les cartes */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre pour les cartes */
  overflow: hidden; /* S'assurer que le contenu ne dépasse pas */
  transition: transform 0.2s; /* Animation au survol */
}

.news-detail-card:hover {
  transform: translateY(-5px); /* Déplacement vers le haut au survol */
}

ion-card-title {
  font-size: 1.6em; /* Taille de police augmentée pour le titre */
  font-weight: bold; /* Titre en gras */
}

ion-card-content p {
  font-size: 1.2em; /* Taille de police pour le contenu */
  padding: 10px 16px; /* Espacement interne */
  color: #888888;
}

ion-button {
  margin-top: 20px;
}
</style>
