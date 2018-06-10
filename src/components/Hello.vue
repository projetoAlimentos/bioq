<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
<style scoped>
.hello {
  margin-top: -40px;
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
  -webkit-box-shadow: 0 0 0 45px white inset;
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
