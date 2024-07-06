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
    <ion-content class="ion-padding">
      <h2>{{ news.title }}</h2>
      <p>{{ news.content }}</p>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  menuController
} from '@ionic/vue';

const route = useRoute();
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
</script>

<style scoped>


ion-header ion-title {
  font-size: 1.4em;
}

ion-content {
  background-color: #18181b;
  --padding-start: 16px;
  --padding-end: 16px;
  color: #ffffff;
}

h2 {
  font-size: 1.6em;
  color: #ffffff;
}

p {
  font-size: 1.2em;
  color: #888888;
}
</style>
