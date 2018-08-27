<template>
  <div class="notification">
    <div class="notification-content">
      {{codigo}} - {{mensagem}}
    </div>
  </div>
</template>
<script>
export default {
  props: ['codigo', 'mensagem'],
  created () {
    setTimeout(function () {
      let notification = document.querySelector('.notification')
      notification.classList.add('visible')
    }, 500)
    setTimeout(function () {
      let notification = document.querySelector('.notification')
      notification.classList.remove('visible')
    }, 7000)
  }
}
</script>
<style scoped>
.notification {
  width: 100%;
  height: 46px;
  position: fixed;
  top: -86px;
  left: 0;
  z-index: 999;
  padding: 20px;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.notification.visible {
  top: 0;
}

.notification-content {
  display: flex;
  padding: 15px;
  background-color: rgba(219, 102, 102, 0.9);
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
}
</style>