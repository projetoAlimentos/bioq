<template>
  <div class="profile">
    <img src="../assets/loading.gif" v-if="!loaded" alt="" width="65" height="65">
    <h2>{{user.name}}</h2>
    <a href="#" @click.prevent="logout">sair</a>
  </div>
</template>
<script>
import * as CONFIG from '../config/config'
import { AUTH_LOGOUT } from '../store/actions/auth'
export default {
  data () {
    return {
      'loaded': false,
      'user': {
        name: null
      }
    }
  },
  created () {
    fetch(CONFIG.URL + '/AccountApi/' + localStorage.getItem('user-id'), {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then(user => {
        this.user = user
        this.loaded = true
      })
  },
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT)
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>
<style scoped>
.profile {
  text-align: left;
}

h2 {
  font-weight: 600;
  font-size: calc(var(--base-font-size) * 1.7);
  margin-bottom: 20px;
}

a {
  color: #fff;
  font: normal 17px var(--font-family);
  background-color: rgb(var(--danger-color));
  display: inline-flex;
  align-items: center;
  height: 45px;
  padding: 0 22px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
}
</style>
