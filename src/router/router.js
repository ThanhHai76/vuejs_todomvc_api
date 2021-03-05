import Home from '../components/Home'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import TodoList from '../components/todolist/TodoList'
import Logout from '../components/auth/Logout'

//each routes object in the routes configuration is called a route record
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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
    component: Logout,
  },
]

export default routes
