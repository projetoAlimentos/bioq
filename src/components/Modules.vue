<template>
  <div>
    <h2>Módulos</h2>
    <div>
      <router-link v-for="modulo in modules" :key="modulo.id" :to="{path: '/topicos/'+modulo.id}">{{modulo.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      'modules': null
    }
  },
  created () {
    console.log(this.id)
    fetch('http://192.168.0.103:5000/api/ModuleApi/' + this.id, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((modules) => (this.modules = modules))
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>

</style>
