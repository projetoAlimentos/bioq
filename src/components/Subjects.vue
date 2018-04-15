<template>
  <div>
    <h2>Matérias</h2>
    <div>
      <router-link v-for="materia in materias" :key="materia.id" :to="{path: '/modulos/'+materia.id}">{{materia.name}}</router-link>
    </div>
  </div>
</template>
<script>
import * as CONFIG from '../config/config'

export default {
  data () {
    return {
      'materias': null
    }
  },
  created () {
    fetch(CONFIG.URL + '/SubjectApi', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((materias) => (this.materias = materias))
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>
  li {
    list-style-position: inside;
  }
  a {
    display: block;
  }
</style>
