// /store/user.js

import { defineStore } from 'pinia'
import { supabase } from '../supabase'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),

  actions: {
    async fetchUser() {
      const {
        data: { user }
      } = await supabase.auth.getUser()
      this.user = user
    },
    async signUp(email, password, name) {
      const { user, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        name: name.value
      })
      if (error) throw error
      this.user = user
    },
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      if (error) throw error
      this.user = user
    },
    async signOut() {
      const { error } = await supabase.auth.signOut()
    }

    // persist: {
    //   enabled: true,
    //   strategies: [
    //     {
    //       key: 'user',
    //       storage: localStorage
    //     }
    //   ]
    // }
  }
})
//COPY
