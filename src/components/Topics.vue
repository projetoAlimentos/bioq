<template>
  <div>
    <div class="container">
      <router-link
        v-for="item in topics"
        :key="item.topic.id"
        :to="{name: 'tópico', params: {id: item.topic.id,title: item.topic.name}}"
        :event="item.liberado ? 'click' : '' "
        :class="item.liberado ? '' : 'disabled' ">
        <i class="fa fa-file-alt"></i>
        <span>{{item.topic.name}}</span>
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
      'topics': null
    }
  },
  methods: {
    handleClick: function (e) {
    }
  },
  created () {
    // console.log(this.id)
    localStorage.setItem('module', this.id)
    fetch(CONFIG.URL + '/TopicApi/' + this.id, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((topics) => {
        this.topics = topics
        let liberaPrimeiro = false
        this.topics.forEach(item => {
          if (item.acertosMax / (item.acertosMax + item.errosMax) > 0.7) {
            item.liberado = true
          } else if (liberaPrimeiro === false) {
            item.liberado = true
            liberaPrimeiro = true
          } else {
            item.liberado = false
          }
        })
        console.log(this.topics)
      })
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 104%;
  transform: translateX(-2%);
}

a {
  width: 46%;
  height: 170px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 22px rgba(0,0,0,.16);

  text-decoration: none;
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.215rem;
}

a.disabled {
  opacity: .35;
}

span {
  line-height: 120%;
}

/* a:nth-child(1) {

} */

a:not(:last-child) {
  margin-bottom: 4%;
}

i {
  font-size: 2.3rem;
  margin-bottom: 20px;
}
</style>
