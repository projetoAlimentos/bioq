<template>
  <div id="app">
    <header>
      <h1>{{title}}</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <nav v-if="isAuthenticated">
      <!-- <router-link :to="{path: '/materias'}">Início</router-link> -->
      <router-link :to="{path: '/inicio'}"><i class="fa fa-home"></i> início</router-link>
      <router-link :to="{path: '/perfil'}"><i class="fa fa-user"></i> perfil</router-link>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { AUTH_LOGOUT } from './store/actions/auth'

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
  },
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT)
        .then(() => {
          this.$router.push('/')
        })
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapState({
      authLoading: state => state.auth.status === 'loading',
      name: state => `${state.user.profile.title} ${state.user.profile.name}`
    })
  },
  created () {
    if (!this.$store.getters.isAuthenticated) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700');
@import './assets/css/reset.css';
@import './assets/css/style.css';
</style>
