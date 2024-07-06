// stores/auth.js
// pinia qui va gérer le state

import { defineStore } from 'pinia';

export const authStore = defineStore('auth', {

  // hook state
  state: () => ({
    // state l'auth
    isAuthenticated: false
  }),

  // hook action (update les states)
  actions: {
    // quand je login
    login() {
      // met à jour le state à true
      this.isAuthenticated = true;
      // on update localstorage
      localStorage.setItem('isAuthenticated', 'true');
    },
    logout() {
      // on passe le state à false
      this.isAuthenticated = false;
      // on update aussi la session
      localStorage.removeItem('isAuthenticated');
    },
    // le middleware 
    checkAuth() {
      // je vérifie le localstorage (session)
      this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    }
  }

});
