import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Subjects from '@/components/Subjects'
import Modules from '@/components/Modules'
import Topics from '@/components/Topics'
import Topic from '@/components/Topic'
import Question from '@/components/Questions'
import Attempt from '@/components/Attempt'
import Profile from '@/components/Profile'
import Signup from '@/components/Signup'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'bioq',
      component: Hello
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Signup
    },
    {
      path: '/materias',
      name: 'matérias',
      component: Subjects
    },
    {
      path: '/modulos/:id',
      name: 'módulos',
      component: Modules,
      props: true
    },
    {
      path: '/topicos/:id',
      name: 'tópicos',
      component: Topics,
      props: true
    },
    {
      path: '/topico/:id',
      name: 'tópico',
      component: Topic,
      props: true
    },
    {
      path: '/pergunta/:id',
      name: 'pergunta',
      component: Question,
      props: true
    },
    {
      path: '/tentativa/:id',
      name: 'tentativa',
      component: Attempt,
      props: true
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Profile
    },
    {
      path: '/inicio',
      name: 'início',
      component: Welcome
    }
  ]
})
