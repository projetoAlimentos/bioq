<template>
  <div class="hello">
    <notification v-if="aparecerErro" :codigo="codigoErro" :mensagem="mensagemErro" />
    <h2>{{ msg }}</h2>
    <form class="login" @submit.prevent="login">
      <div class="form-holder">
        <label for="user">Usuário</label>
        <input class="input" id="user" type="email" required v-model="email" placeholder="voce@email.com">
      </div>
      <div class="form-holder">
        <label for="pass">Senha</label>
        <input class="input" id="pass" type="password" required v-model="password" placeholder="Senha">
      </div>
      <button type="submit">Entrar</button>
    </form>
    <router-link to="/cadastro" class="form-link">Cadastre-se</router-link>
  </div>
</template>

<script>
import { AUTH_REQUEST } from '../store/actions/auth'
import Notification from './Notification'
export default {
  name: 'hello',
  components: {
    'notification': Notification
  },
  data () {
    return {
      msg: 'Login',
      email: null,
      password: null,
      codigoErro: null,
      mensagemErro: null,
      aparecerErro: false
    }
  },
  methods: {
    login: function () {
      const { email, password } = this
      this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push('/inicio')
      })
        .catch(err => {
          this.codigoErro = err.response.status
          this.mensagemErro = err.response.statusText
          this.aparecerErro = true
        })
    }
  },
  created () {
    if (localStorage.getItem('user-token') !== 'undefined' && localStorage.getItem('user-token')) {
      this.$router.push('/inicio')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: -20px;
  text-align: left;
}

h2 {
  font-weight: 600;
  font-size: calc(var(--base-font-size) * 1.7);
  margin-bottom: 20px;
}

.form-holder {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.input {
  display: block;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  border-radius: 8px;
  background-color: #fff;
  color: rgb(var(--primary-color));
  font: normal 17px var(--font-family);

  -webkit-appearance: none;
  box-shadow: none;
  border: 1px solid #fff;

  transition: border-color .3s;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 45px white inset;
}

input:focus {
  outline: none;
  border-color: rgba(var(--primary-color), .4);
}

button {
  color: #fff;
  font: normal 17px var(--font-family);
  background-color: rgb(var(--primary-color));
  height: 45px;
  padding: 0 22px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
