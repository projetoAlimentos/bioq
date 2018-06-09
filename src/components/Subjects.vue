<template>
  <div>
    <div class="container">
      <img src="../assets/loading.gif" v-if="!loaded" alt="" width="65" height="65">
      <router-link v-for="materia in materias" :key="materia.id" :to="{path: '/modulos/'+materia.id}">
        <i class="fa fa-pencil-alt"></i>
        {{materia.name}}
      </router-link>
    </div>
  </div>
</template>
<script>
import * as CONFIG from '../config/config'

export default {
  data () {
    return {
      'materias': null,
      'loaded': false
    }
  },
  created () {
    fetch(CONFIG.URL + '/SubjectApi', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((materias) => {
        (this.materias = materias)
        this.loaded = true
      })
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>
  a {
    height: 100px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 22px rgba(0,0,0,.16);

    text-decoration: none;
    color: var(--text-color);
    font-weight: 700;
    font-size: 1.375rem;
  }

  a:not(:last-child) {
    margin-bottom: 40px;
  }

  i {
    margin-right: 20px;
  }
</style>
