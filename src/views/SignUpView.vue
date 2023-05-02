<template>
    <div class="card card-max-width">
        <div class="p-5">
            <h4 class="card-title">
                Sign Up
            </h4>

            <Form @submit="submit" :validation-schema="schema">
                <div class="mb-3">
                    <label for="input-email" class="form-label">Email address</label>
                    <Field id="input-email" name="email" type="email" placeholder="Email" class="form-control" />
                    <ErrorMessage name="email" class="form-text" />
                </div>
                <div class="mb-3">
                    <label for="input-password" class="form-label"> Password</label>
                    <Field id="input-password" name="password" type="password" placeholder="Password"
                        class="form-control" />
                    <ErrorMessage name="password" class="form-text" />
                </div>
                <div class="mb-3">
                    <label for="input-confirmPassword" class="form-label">Password</label>
                    <Field id="input-confirmPassword" name="confirmPassword" type="password" placeholder="Repeat password"
                        class="form-control" />
                    <ErrorMessage name="confirmPassword" class="form-text" />
                </div>
                <button class="btn btn-primary">Sign up</button>
            </Form>
        </div>
    </div>
</template>

<script setup>

import { useUserStore } from '../stores/user';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router'

const schema = yup.object().shape({
    email: yup.string().email('This field must be a valid email').required('This field is required, motherfuckers!'),
    password: yup.string().min(6, 'min length 6 characters').required('This field is required, motherfuckers!'),
    confirmPassword: yup.string().required('This field is required, motherfuckers!').oneOf([yup.ref('password')], 'Passwords do not match')

})

const router = useRouter();
const userStore = useUserStore()

const submit = async (values) => {

    await userStore.signUp(values.email, values.password)
    router.push('/')

}


</script>

