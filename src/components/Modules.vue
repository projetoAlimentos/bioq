<template>
  <div>
    <div>
      <router-link v-for="modulo in modules" :key="modulo.id" :to="{path: '/topicos/'+modulo.id}">
        <i class="fa fa-book"></i>
        {{modulo.name}}
      </router-link>
    </div>
  </div>
</template>
<script>
import * as CONFIG from '../config/config'

export default {
  props: ['id'],
  data () {
    return {
      'modules': null
    }
  },
  created () {
    fetch(CONFIG.URL + '/ModuleApi/' + this.id, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((modules) => {
        this.modules = modules
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
  margin-bottom: 30px;
}

i {
  margin-right: 20px;
}
</style>
