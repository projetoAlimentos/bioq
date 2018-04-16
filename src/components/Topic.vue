<template>
  <div>
    <div>
      <h2>{{title}}</h2>
      <!-- TODO: Abrir modal <router-link :to="{path: '/article/'+this.id}">Visao Geral</router-link> -->
      <br>
      <router-link :to="{path: '/pergunta/'+this.id}">
        <i class="fa fa-list-ul"></i>
        ver questões
      </router-link>
    </div>
  </div>
</template>
<script>
import * as CONFIG from '../config/config'

export default {
  props: ['id', 'title'],
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
  height: 100px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;

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
