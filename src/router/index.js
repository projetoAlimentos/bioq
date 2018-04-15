import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Subjects from '@/components/Subjects'
import Modules from '@/components/Modules'
import Topics from '@/components/Topics'
import Topic from '@/components/Topic'
import Question from '@/components/Questions'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/materias',
      name: 'Materias',
      component: Subjects
    },
    {
      path: '/modulos/:id',
      name: 'Modulos',
      component: Modules,
      props: true
    },
    {
      path: '/topicos/:id',
      name: 'Topicos',
      component: Topics,
      props: true
    },
    {
      path: '/topico/:id',
      name: 'Topico',
      component: Topic,
      props: true
    },
    {
      path: '/pergunta/:id',
      name: 'Pergunta',
      component: Question,
      props: true
    }
  ]
})
