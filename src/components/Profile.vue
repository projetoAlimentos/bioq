<template>
  <div>
    <a href="#" @click.prevent="logout">sair</a>
    asdaadsdasdsadsadsasdasd
  </div>
</template>
<script>
import { AUTH_LOGOUT } from '../store/actions/auth'
export default {
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT)
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>
<style>

</style>
