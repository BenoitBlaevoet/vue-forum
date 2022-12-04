import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Axios } from 'axios'

export const useLoginStore = defineStore( 'login', () => {
    const user = ref("")
    
    const login = await Axios({
      method: 'POST',
      url: 'user',
      data: {email, password}
    })

    return { user }
})
