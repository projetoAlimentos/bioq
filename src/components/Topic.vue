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
import * as CONFIG from '../config/config'

export default {
  props: ['id'],
  data () {
    return {
      'topic': null
    }
  },
  created () {
    console.log(this.id)
    fetch(CONFIG.URL + '/TopicApi/single/' + this.id, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((topic) => {
        (this.topic = topic)
        localStorage.setItem('topicId', topic.id)
      })
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>
a {
  display: block;
}
</style>
