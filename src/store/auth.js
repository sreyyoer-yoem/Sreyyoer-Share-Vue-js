import {defineStore} from 'pinia'

export const useLoginStore = defineStore('login', {
    state: () => ({
        otpauth_url:null,
       
    })
})