<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Politique de Confidentialité</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
          <ion-card-header>
            <ion-card-title>Politique de Confidentialité</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>
              <strong>Introduction :</strong><br>
              Nous attachons une grande importance à la confidentialité de vos données personnelles. Cette politique de confidentialité décrit les informations que nous collectons, comment nous les utilisons et les mesures que nous prenons pour les protéger.
            </p>
            <p>
              <strong>1. Collecte des informations :</strong><br>
              Nous collectons des informations lorsque vous vous inscrivez sur notre site, vous vous connectez à votre compte, faites un achat, participez à un concours et/ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, votre numéro de téléphone, et/ou votre carte de crédit.
            </p>
            <p>
              <strong>2. Utilisation des informations :</strong><br>
              Toute information que nous recueillons auprès de vous peut être utilisée pour :<br>
              - Personnaliser votre expérience et répondre à vos besoins individuels<br>
              - Fournir un contenu publicitaire personnalisé<br>
              - Améliorer notre site web<br>
              - Améliorer le service client et vos besoins de prise en charge<br>
              - Vous contacter par e-mail<br>
              - Administrer un concours, une promotion, ou une enquête
            </p>
            <p>
              <strong>3. Protection des informations :</strong><br>
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons le cryptage pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin d'effectuer un travail spécifique (par exemple, la facturation ou le service à la clientèle) ont accès aux informations personnelles identifiables.
            </p>
            <p>
              <strong>4. Divulgation à des tiers :</strong><br>
              Nous ne vendons, n'échangeons et ne transférons pas vos informations personnellement identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
            </p>
            <p>
              <strong>5. Consentement :</strong><br>
              En utilisant notre site, vous consentez à notre politique de confidentialité.
            </p>
            <p>
              <strong>6. Modifications de notre politique de confidentialité :</strong><br>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Si nous décidons de changer notre politique de confidentialité, nous publierons ces changements sur cette page.
            </p>
            <p>
              <strong>Contact :</strong><br>
              Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter en utilisant les informations ci-dessous :<br>
              Adresse e-mail : support@votresite.com<br>
              Numéro de téléphone : +33 1 23 45 67 89<br>
            </p>
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

ion-card-content {
  color: #ffffff;
  }

ion-card-title{
  color: #ffffff;
}

</style>
