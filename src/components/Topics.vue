<template>
  <div>
    <div class="container">
      <router-link
        v-for="topic in topics"
        :key="topic.id"
        :to="{name: 'tópico', params: {id: topic.id,title: topic.name}}"
        :event="disabled ? '' : 'click' "
        :class="disabled ? 'disabled' : '' ">
        <i class="fa fa-file-alt"></i>
        <span>{{topic.name}}</span>
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
      'topics': null,
      'disabled': true
    }
  },
  methods: {
    handleClick: function (e) {
    }
  },
  created () {
    console.log(this.id)
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
      .then((topics) => (this.topics = topics))
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
  height: 200px;
  padding: 0 30px;
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
  font-size: 1.375rem;
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
