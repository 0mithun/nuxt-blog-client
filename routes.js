

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);


const routes = [
  {
    path:'/',
    name: 'index',
    component: page('index')
  },
  {
    path:'/login',
    name: 'login',
    component: page('auth/login')
  },
  {
    path:'/register',
    name: 'register',
    component: page('auth/register')
  },
  {
    path:'/verification/verify/:id',
    name: 'verify',
    component: page('auth/verification/verify')
  },
]

export default routes;
