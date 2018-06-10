<template>
  <div class="answer">
    <input type="checkbox" v-model="resposta.selected" :id="resposta.id" @change="showButton">
    <label :for="resposta.id">
      {{resposta.description}}
    </label>
  </div>
</template>
<script>
export default {
  props: ['resposta'],
  created () {
    this.resposta.selected = false
  },
  methods: {
    'showButton': function () {
      this.$emit('show-button')
    }
  }
}
</script>
<style scoped>
.answer {
  position: relative;
  margin-bottom: 20px;
}

input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

label {
  width: 100%;
  min-height: 45px;

  display: flex;
  align-items: center;

  text-align: left;
  font-size: calc(var(--base-font-size) * 1.1);
  line-height: 1.6;

  background-color: #fff;
  padding: 15px 30px 15px 15px;
  border: 2px solid #fff;
  border-radius: 8px;

  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: padding .3s, border-color .3s;
}

label::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background-color: rgba(var(--primary-color), .4);
  border-radius: 50%;
  opacity: 0;
  transition: left .4s, opacity .4s;
}

input:checked + label {
  border-color: rgba(var(--primary-color), .4);
  padding-left: 30px;
  padding-right: 15px;
}

input:checked + label::before {
  left: 15px;
  opacity: 1;
}

</style>
