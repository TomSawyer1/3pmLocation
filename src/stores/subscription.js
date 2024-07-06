// stores/subscription.js
import { defineStore } from 'pinia';

export const subscriptionStore = defineStore('subscription', {
  state: () => ({
    selectedSubscription: null,
  }),
  actions: {
    setSelectedSubscription(subscription) {
      this.selectedSubscription = subscription;
    }
  }
});
