<template>
  <div id="app">
    <header>
      <span>{{title}}</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      'title': 'bioq'
    }
  },
  watch: {
    '$route': function (rota) {
      this.title = rota.name
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700');

* {
  box-sizing: border-box;
}

:root{
  --text-color: rgba(0,0,0,.56);
  --base-font-size: 16px;

  --header-color: #2e282a;
}

body {
  margin: 0;
  background-color: #f0f0f0;
  font-size: var(--base-font-size);
}

#app {
  font-family: 'Avenir', 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  width: 100%;
  max-width: 480px;
  padding: 20px;
  margin: 40px auto 0;
}

header {
  display: flex;
  margin: 0;
  height: 140px;
  padding: 20px;
  justify-content: center;
  align-items: flex-end;
  background-color: var(--header-color);
  color: #ffffff;
}

header span {
  display: block;
  width: 100%;
  max-width: 580px;
  position: relative;
  font-size: 2rem;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 700;
}
</style>
