<template>
  <div>
    <img src="../assets/loading.gif" v-if="!loaded" alt="" width="65" height="65">
    <h1>{{user.name}}</h1>
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
      'user': null
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
<style>

</style>
