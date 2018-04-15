<template>
  <div>
    <h2>Tópico</h2>
    <div>
      <!-- TODO: Abrir modal <router-link :to="{path: '/article/'+this.id}">Visao Geral</router-link> -->
      <br>
      <router-link :to="{path: '/pergunta/'+this.id}">Questões</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      'topic': null
    }
  },
  created () {
    console.log(this.id)
    fetch('http://192.168.0.103:5000/api/TopicApi/single/' + this.id, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((topic) => (this.topic = topic))
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>

</style>
