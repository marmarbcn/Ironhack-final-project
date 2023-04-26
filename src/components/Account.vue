<template>
    <form class="form-widget" @submit.prevent="updateProfile">
        <div>
            <label for="email">Email</label>
            <input id="email" type="text" :value="session.user.email" disabled />
        </div>
        <div>
            <label for="username">Name</label>
            <input id="username" type="text" v-model="username" />
        </div>
        <div>
            <label for="website">Website</label>
            <input id="website" type="url" v-model="website" />
        </div>

        <div>
            <input type="submit" class="button primary block" :value="loading ? 'Loading ...' : 'Update'"
                :disabled="loading" />
        </div>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <SignOut />
        <div>

        </div>
    </form>
</template>
  
<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

import SignOut from './SignOut.vue';


const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')



onMounted(() => {
    getProfile()
})

async function getProfile() {
    try {
        loading.value = true
        const { user } = session.value

        let { data, error, status } = await supabase
            .from('profiles')
            .select(`name, email, avatar_url`)
            .eq('id', user.id)
            .single()

        if (error && status !== 406) throw error

        if (data) {
            name.value = data.username
            email.value = data.email
            avatar_url.value = data.avatar_url
        }
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}

async function updateProfile() {
    try {
        loading.value = true
        const { user } = session.value

        const updates = {
            id: user.id,
            username: username.value,
            website: website.value,
            avatar_url: avatar_url.value,
            updated_at: new Date(),
        }

        let { error } = await supabase.from('profiles').upsert(updates)

        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}

</script>

