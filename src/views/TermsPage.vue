<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Conditions Générales de Vente / Utilisation</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Conditions Générales de Vente</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>
              <strong>Article 1 - Objet :</strong><br>
              Les présentes conditions générales de vente (CGV) régissent les ventes de produits ou de services par notre société.
            </p>
            <p>
              <strong>Article 2 - Prix :</strong><br>
              Les prix de nos produits sont indiqués en euros toutes taxes comprises (TVA et autres taxes applicables au jour de la commande), sauf indication contraire.
            </p>
            <p>
              <strong>Article 3 - Commandes :</strong><br>
              Vous pouvez passer commande sur notre site Internet ou par téléphone.
            </p>
            <p>
              <strong>Article 4 - Paiement :</strong><br>
              Le fait de valider votre commande implique pour vous l'obligation de payer le prix indiqué.
            </p>
            <!-- Ajoutez plus d'articles selon vos besoins -->
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>Conditions Générales d'Utilisation</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>
              <strong>Article 1 - Objet :</strong><br>
              Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs peuvent accéder et utiliser le site.
            </p>
            <p>
              <strong>Article 2 - Accès au site :</strong><br>
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
            </p>
            <p>
              <strong>Article 3 - Propriété intellectuelle :</strong><br>
              La structure générale du site, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de l'éditeur ou de ses partenaires.
            </p>
            <p>
              <strong>Article 4 - Données personnelles :</strong><br>
              Les informations recueillies sur le site font l'objet d'un traitement informatique destiné à mieux répondre à vos attentes.
            </p>
            <!-- Ajoutez plus d'articles selon vos besoins -->
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
  IonMenuButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle
} from '@ionic/vue';

</script>
  
  <style scoped>

  </style>
  