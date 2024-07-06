<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Mentions Légales</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Mentions Légales</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>
              <strong>Propriétaire du site :</strong><br>
              Nom de l'entreprise<br>
              Adresse de l'entreprise<br>
              Numéro de téléphone<br>
              Adresse e-mail<br>
            </p>
            <p>
              <strong>Directeur de la publication :</strong><br>
              Nom du directeur de la publication<br>
            </p>
            <p>
              <strong>Hébergeur :</strong><br>
              Nom de l'hébergeur<br>
              Adresse de l'hébergeur<br>
              Numéro de téléphone<br>
            </p>
            <p>
              <strong>Propriété intellectuelle :</strong><br>
              Tous les contenus présents sur ce site sont la propriété exclusive de l'entreprise, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de l'entreprise.
            </p>
            <p>
              <strong>Responsabilité :</strong><br>
              L'entreprise met tout en œuvre pour offrir aux utilisateurs des informations et/ou outils disponibles et vérifiés, mais ne saurait être tenue pour responsable des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son site.
            </p>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { 
    IonPage,
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton,
    IonTitle,
    IonCard,
    IonContent,
    IonCardContent,
    IonCardHeader,
    IonCardTitle 
  } from '@ionic/vue';
  
  </script>
  
  <style scoped>

  </style>
  