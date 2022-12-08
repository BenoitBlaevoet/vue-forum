import { ref } from 'vue'
import { defineStore } from 'pinia'
import jwt_decode from "jwt-decode";

export const useLoginStore = defineStore( 'login', () => {
    let user = ref('')
    let bearer = ref('')

    const isTokenLocal = () => {
      // Verify if the local storage contain a token and retrieve it if true
      // or it return false
      if(!localStorage.getItem('token')) return false
      return true
    }

    const isTokenExpired = (token) => {
      const decoded = jwt_decode(token)
      return (decoded.exp - (Date.now()/1000))?true:false
    }

    //Verify if the token is in local storage and
    //valid, and save it if it's the case
    if(isTokenLocal()){
      const token = localStorage.getItem('token') 
      if(isTokenExpired(token)) return
      bearer.value = token
    }

    const input = {}
    input.email = ref('')
    input.password = ref('')
    
    const verifyInDB = async (email, password) => {
      const data = {}
      data.email = email
      data.password = password
      const res = await fetch('http://127.0.0.1:3000/userloggin', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      })
      const user = await res.json()
      
    }
    return { user, input,verifyInDB, bearer }
})
