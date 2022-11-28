import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Axios } from 'axios'

export const useLoginStore = defineStore(
  'login',
  async (email, password) => {
    const user = ref("")
    
    const login = await Axios({
      method: 'POST',
      url: 'user',
      data: {email, password}
    })

    return { user }
  }, 
  {
    persist : true
  }
)
