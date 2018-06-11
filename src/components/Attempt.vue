<template>
  <div>
    <div class="container">
      <img src="../assets/loading.gif" v-if="!loaded" alt="" width="65" height="65">
      <h2>Questionário respondido!</h2>
      <p>Nesta tentativa você obteve:</p>
      <div class="result correct">
        {{attempt.acertos}} acerto(s)
      </div>
      <div class="result incorrect">
        {{attempt.erros}} erro(s)
      </div>
      <span class="congratulations" v-if="(attempt.erros === 0)">Parabéns 🎉🎉🎉</span><br>
      <router-link :to="{path: '/pergunta/' + this.pergunta}">
        tentar novamente
      </router-link>
    </div>
  </div>
</template>
<script>
import * as CONFIG from '../config/config'

export default {
  data () {
    return {
      'loaded': false,
      'attempt': null,
      'pergunta': localStorage.getItem('topicId')
    }
  },
  created () {
    fetch(CONFIG.URL + '/AttemptApi/' + localStorage.getItem('tentativa'), {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then(tentativa => {
        this.attempt = tentativa
        this.loaded = true
        console.log(tentativa)
      })
    // .then((materias) => {
    //   (this.materias = materias)
    //   this.loaded = true
    // })
    // .catch(err => console.log(err))
  }
}
</script>
<style scoped>
h2 {
  font-weight: 600;
  font-size: calc(var(--base-font-size) * 1.7);
  margin-bottom: 30px;
}

p {
  font-size: calc(var(--base-font-size) * 1.2);
  margin-bottom: 20px;
}

.result {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  margin-bottom: 20px;

  border-width: 2px;
  border-style: solid;
  border-radius: 8px;

  font-weight: 600;
  font-size: calc(var(--base-font-size) * 1.1);
}

.result.correct {
  background-color: rgba(137, 230, 62, .2);
  color: rgb(117, 201, 49);
}

.result.incorrect {
  background-color: rgba(233, 69, 69, .2);
  color: rgb(233, 69, 69);
}

.congratulations {
  display: inline-block;
  margin-bottom: 20px;
}

a {
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 22px rgba(0,0,0,.16);

  text-decoration: none;
  color: var(--text-color);
  font-weight: 700;
  font-size: var(--base-font-size);
}
</style>
