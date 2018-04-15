<template>
  <div>
    <h2>Tópicos</h2>
    <div>
      <router-link v-for="topic in topics" :key="topic.id" :to="{path: '/topico/'+topic.id}">{{topic.name}}</router-link>
    </div>
  </div>
</template>
<script>
import * as CONFIG from '../config/config'

export default {
  props: ['id'],
  data () {
    return {
      'topics': null
    }
  },
  created () {
    console.log(this.id)
    fetch(CONFIG.URL + '/TopicApi/' + this.id, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((topics) => (this.topics = topics))
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>
a {
  display: block;
}
</style>
