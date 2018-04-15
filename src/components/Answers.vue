<template>
  <div>
    <label :for="resposta.id">
      {{resposta.description}}
      <input type="checkbox" v-model="resposta.selected" :id="resposta.id">
    </label>
  </div>
</template>
<script>
export default {
  props: ['resposta'],
  created () {
    this.resposta.selected = false
  }
}
</script>
<style scoped>
label {
  display: block;
  cursor: pointer;
}
</style>
