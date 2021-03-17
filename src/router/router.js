import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import TodoList from '../components/todolist/TodoList'

//each routes object in the routes configuration is called a route record
const routes = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  { 
    path: '/todo', 
    name: 'todo',
    component: TodoList,
    meta: {
      requiresAuth: true,
    }, 
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    props: true,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/logout',
    name: 'logout',
    redirect: {
      name: 'login'
    }
  },
]

export default routes
