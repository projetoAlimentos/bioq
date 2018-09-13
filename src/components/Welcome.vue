<template>
  <div>
    <h2>Olá,</h2>
    <p>
      Este é o Bioq! Aqui você pode explorar os tópicos vistos em sala, fazer revisões e responder questionários que irão te ajudar a fixar os conteúdos aprendidos em Bioquímica!
    </p>
    <router-link :to="{path: '/modulos/1'}">
      vamos começar
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'início'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: -20px;
  text-align: left;
}

h2 {
  font-weight: 600;
  font-size: calc(var(--base-font-size) * 1.7);
  margin-bottom: 20px;
}

p {
  font-weight: 600;
  text-align: left;
  font-size: calc(var(--base-font-size) * 1.1);
  line-height: 1.7;
  margin-bottom: 20px;
}

.form-holder {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.input {
  display: block;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  border-radius: 8px;
  background-color: #fff;
  color: rgb(var(--primary-color));
  font: normal 17px var(--font-family);

  -webkit-appearance: none;
  box-shadow: none;
  border: 1px solid #fff;

  transition: border-color .3s;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 45px white inset;
}

input:focus {
  outline: none;
  border-color: rgba(var(--primary-color), .4);
}

a {
  color: #fff;
  font: normal 17px var(--font-family);
  background-color: rgb(var(--primary-color));
  height: 45px;
  padding: 0 22px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
