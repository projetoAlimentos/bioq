<template>
  <div>
    <div v-if="questions">
      <div>
        {{questions[index].description}} 
        <br>
        <answers 
          v-for="resposta in questions[index].answers"
          :key="resposta.id"
          :question="questions[index]"
          :resposta="resposta"
          @click="addAnswer(questions[index].id, resposta.id)">
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
      'btnText': 'Próxima',
      'questions': null,
      'index': 0,
      'answers': {
        'ApplicationUserId': null,
        'TopicId': localStorage.getItem('topicId'),
        'AnswerAttempt': []
      },
      'selected': []
    }
  },

  created () {
    fetch(CONFIG.URL + '/QuestionApi/' + this.id, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
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
          'content-type': 'application/json'
        }
      })
        .then(response => console.log(response.status))
    },

    'nextQuestion': function () {
      if (this.index < (this.questions.length - 1)) {
        let selectedAnswers = {
          'Description': null,
          'QuestionId': this.questions[this.index].id,
          'Attempted': []
        }
        this.questions[this.index].answers.forEach(answer => {
          console.log(answer.selected)
          if (answer.selected) {
            selectedAnswers.Attempted.push({
              'answerId': answer.id
            })
          }
        })

        this.answers.AnswerAttempt.push(selectedAnswers)
        this.index++
      } else {
        this.btnText = 'Enviar'
        this.submit(this.answers)
      }
    }
  }
}
</script>
<style scoped>

</style>
