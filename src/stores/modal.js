import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useModalStore = defineStore('modal-store', {
  state: () => ({
    modalState: {
      component: null,
      props: {}
    }
  }),
  actions: {},
  getters: {}
});
