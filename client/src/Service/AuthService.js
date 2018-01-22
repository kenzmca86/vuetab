import Api from '@/Service/Api'

export default {
     register (credential) {
         return Api().post('register',credential)
     }
 }