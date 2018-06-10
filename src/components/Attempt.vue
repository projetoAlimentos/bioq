<template>
  <div>
    <div class="container">
      <img src="../assets/loading.gif" v-if="!loaded" alt="" width="65" height="65">

    </div>
  </div>
</template>
<script>
import * as CONFIG from '../config/config'

export default {
  data () {
    return {
      'loaded': false
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
      .then((data) => console.log(JSON.parse(data)))
    // .then((materias) => {
    //   (this.materias = materias)
    //   this.loaded = true
    // })
    // .catch(err => console.log(err))
  }
}
</script>
<style scoped>

</style>
