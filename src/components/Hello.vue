<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form class="login" @submit.prevent="login">
      <label for="user">Usuário</label>
      <input id="user" type="email" required v-model="email" placeholder="voce@email.com">
      <label for="pass">Senha</label>
      <input id="pass" type="password" required v-model="password" placeholder="Senha">
      <button type="submit">Login</button>
    </form>
    <!-- <router-link to="/materias">Matérias</router-link> -->
  </div>
</template>

<script>
import { AUTH_REQUEST } from '../store/actions/auth'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Login'
    }
  },
  methods: {
    login: function () {
      const { email, password } = this
      this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push('/materias')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
