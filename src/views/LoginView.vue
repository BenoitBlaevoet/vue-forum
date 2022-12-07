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
import jwt_decode from "jwt-decode";

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
    const user = await res.json()
    console.log(user)
    const decoded = jwt_decode(user.token.accessToken)
    // const decodedr = jwt_decode(user.token.refreshToken)
    const isExp = (decoded.exp - (Date.now()/1000))<0?true:false
    console.log(await decoded)
    console.log(Date.now()/1000)
    // console.log(await decodedr)
    console.log(isExp)
  }
  
}
</script>

<style lang="scss" scoped>

</style>