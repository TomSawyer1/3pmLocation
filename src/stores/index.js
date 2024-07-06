// stores/index.js
// importation de pinia
import { createPinia } from 'pinia';

// importation des stores
import { authStore } from './auth';
import { subscriptionStore } from './subscription';

// création de pinia
const pinia = createPinia();

// exportation de pinia
export default pinia;

// exportation des stores
export { authStore, subscriptionStore };
