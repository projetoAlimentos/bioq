<template>
  <div>
    <div v-if="questions">
      <div>
        {{questions[index].description}}
        <button @click="updateIndex()">Proxima</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      'questions': null,
      'index': 0
    }
  },
  created () {
    fetch('http://192.168.0.103:5000/api/QuestionApi/' + this.id, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.text())
      .then((data) => JSON.parse(data))
      .then((questions) => {
        (this.questions = questions)
        console.log(questions)
      })
      .catch(err => console.log(err))
  },
  methods: {
    'submete': function () {
      console.log('foi')
    },
    'updateIndex': function () {
      if (this.index < (this.questions.length - 1)) {
        this.index++
      } else {
        this.submete()
      }
    }
  }
}
</script>
<style scoped>

</style>
