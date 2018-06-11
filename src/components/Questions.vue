<template>
  <div class="questions">
    <div v-if="questions">
      <div>
        <p><span>{{index+1}}.</span>{{questions[index].description}}</p>
        <answers
          v-for="resposta in questions[index].answers"
          :key="resposta.id"
          :question="questions[index]"
          :resposta="resposta"
          v-on:show-button="showButton">
        </answers>
        <br>
        <button @click="nextQuestion()">{{btnText}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import Answers from './Answers'
import * as CONFIG from '../config/config'

export default {
  props: ['id'],
  components: {
    'answers': Answers
  },
  data () {
    return {
      'btnText': 'Próxima pergunta',
      'questions': null,
      'index': 0,
      'answers': {
        'ApplicationUserId': localStorage.getItem('user-id'),
        'TopicId': localStorage.getItem('topicId'),
        'AnswerAttempt': []
      },
      'selected': []
    }
  },

  created () {
    console.clear()
    fetch(CONFIG.URL + '/QuestionApi/' + this.id, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((questions) => {
        (this.questions = questions)
        console.log(this.questions.length)
      })
      .catch(err => console.log(err))
  },

  methods: {
    'submit': function (answers) {
      fetch(CONFIG.URL + '/AttemptApi', {
        method: 'POST',
        body: JSON.stringify(answers),
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('user-token')
        }
      })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('tentativa', data.idTentativa)
          this.$router.push('/tentativa/' + data.idTentativa)
        })
    },

    'nextQuestion': function () {
      let button = document.querySelector('button')
      let selectedAnswers = {
        'Description': null,
        'QuestionId': this.questions[this.index].id,
        'Attempts': []
      }
      this.questions[this.index].answers.forEach(answer => {
        if (answer.selected) {
          selectedAnswers.Attempts.push({
            'answerId': answer.id
          })
        }
      })
      this.answers.AnswerAttempt.push(selectedAnswers)

      if (this.index === this.questions.length - 2) {
        this.btnText = 'Concluir'
        setTimeout(function () {
          button.classList.add('send')
        }, 600)
      }

      if (this.index === this.questions.length - 1) {
        this.submit(this.answers)
      } else {
        this.index++
        button.classList.remove('active')
      }
    },

    'showButton': function () {
      let button = document.querySelector('button')
      let selecionados = this.questions[this.index].answers.filter(answer => answer.selected)

      if (selecionados.length > 0) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      }
    }
  }
}
</script>
<style scoped>
.questions {
  margin-top: -20px;
}

p {
  font-weight: 600;
  text-align: left;
  font-size: calc(var(--base-font-size) * 1.2);
  line-height: 1.7;
  margin-bottom: 20px;
}

span {
  opacity: .4;
  font-weight: 700;
  font-size: calc(var(--base-font-size) * 1.35);
  display: inline-block;
  padding-right: 5px;
}

button {
  width: 100%;
  height: 53px;
  position: fixed;
  bottom: -53px;
  left: 0;
  transition: bottom .6s cubic-bezier(0.075, 0.82, 0.165, 1);

  background-color:rgb(var(--primary-color));
  border: none;

  color: #fff;
  font: 600 17px var(--font-family);
}

button.active {
  bottom: 53px;
}

button.send {
  background-color: #50C5B7;
}
</style>
