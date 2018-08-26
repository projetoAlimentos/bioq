<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <form class="login" @submit.prevent="login">
      <div class="form-holder">
        <label for="name">Nome</label>
        <input class="input" id="name" type="text" required v-model="name" placeholder="Seu nome">
      </div>
      <div class="form-holder">
        <label for="user">E-mail</label>
        <input class="input" id="user" type="email" required v-model="email" placeholder="voce@email.com">
      </div>
      <div class="form-holder">
        <label for="pass">Senha</label>
        <input class="input" id="pass" type="password" required v-model="password" placeholder="Senha">
      </div>
      <div class="form-holder">
        <label for="passconfirm">Confirmar senha</label>
        <input class="input" id="passconfirm" type="password" required v-model="confirmPassword" placeholder="Confirmar senha">
      </div>
      <button type="submit">Cadastrar</button>
    </form>
    <router-link to="/" class="form-link">já tem cadastro? faça login</router-link>
  </div>
</template>

<script>
import { SIGN_REQUEST } from '../store/actions/auth'
export default {
  name: 'signup',
  data () {
    return {
      msg: 'Cadastre-se'
    }
  },
  methods: {
    login: function () {
      const { name, email, password, confirmPassword } = this
      this.$store.dispatch(SIGN_REQUEST, { name, email, password, confirmPassword }).then(() => {
        this.$router.push('/materias')
      })
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
