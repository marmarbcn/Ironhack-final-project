<template>
    <div class="card card-max-width">
        <div class="p-5">
            <h4 class="card-title">Set a new password</h4>
            <Form @submit="submit" :validation-schema="schema">
                <div class="mb-3">
                    <label for="input-password" class="form-label"> Password</label>
                    <Field id="input-password" name="password" :type="passwordFieldType" v-model="password"
                        placeholder="Password" class="form-control" /><button type="password" @click="switchVisibility">show
                        / hide</button>
                    <ErrorMessage name="password" class="form-text" />
                </div>
                <div class="mb-3">
                    <label for="input-confirmPassword" class="form-label">Repeat password</label>
                    <Field id="input-confirmPassword" name="confirmPassword" type="password" placeholder="Repeat password"
                        class="form-control" />
                    <ErrorMessage name="confirmPassword" class="form-text" />
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </Form>
        </div>
    </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useUserStore } from '../stores/user';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const schema = yup.object().shape({
    password: yup.string().min(6, 'Minimum length is 6 characters').required('This field is required!'),
    confirmPassword: yup.string().required('This field is required!').oneOf([yup.ref('password')], 'Passwords do not match')

})
const userStore = useUserStore();
const error = ref();
const router = useRouter();

const password = ref('');
const passwordFieldType = ref('password');



const switchVisibility = () => passwordFieldType = passwordFieldType === "password" ? "text" : "password";


const submit = async (value) => {
    console.log(value.password)
    error.value = '';
    try {
        await userStore.updatePassword(value.password)
        router.push('/tasks')

    } catch (err) { error.value = err.message; }
}
</script>
