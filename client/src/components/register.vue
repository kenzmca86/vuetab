<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email" /><br><br>
    <input type="password" v-model="password" name="password" placeholder="password" /><br><br>
    <button @click="register()">Register</button>
  </div>
</template>

<script>
import authendicate from '@/Service/AuthService'
export default {
  data () {
    return {
        email: '',
        password: ''
    }
  },
methods:{
  async register(){
    const response = await authendicate.register({
      email: this.email,
      password: this.password
    })    
    console.log(response.data);    
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
