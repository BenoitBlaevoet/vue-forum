<template>

<div class="flex flex-col gap-10 p-10 col-span-full">
  <v-form 
    ref="formLogin"
    v-model="valid"
    lazy-validation>
        <v-text-field
          type="email"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          type="password"
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
        <v-btn
          color="success"
          class="mr-4"
          @click="validate"
        >Login</v-btn>
  </v-form>
</div>
</template>

<script setup>
import { ref } from 'vue'

let formLogin = ref(null)
let valid = ref(false)
let password = ref('') 
const passwordRules = [
        v => !!v || 'Password is required' ,
        v => (v &&  v.length <= 255 && v.length >= 1) || 'Password must be more than 1 characters and less than 255 characters',
      ]
let email = ref('')
const emailRules = [
        v => !!v || 'Email is required' ,
        v => (v && v.length <= 255) || 'Name must be less than 255 characters',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]

const validate = async () => {
  const { valid } = await formLogin.value.validate()

  if(valid){
    let data = {}
      data.email = email.value
      data.password = password.value

    const res = await fetch('http://127.0.0.1:3000/userloggin', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(await res.json())
  }
}
</script>

<style lang="scss" scoped>

</style>