

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
  {
    path:'/verification/resend',
    name: 'resend',
    component: page('auth/verification/resend')
  },
  {
    path:'/password/email',
    name: 'password.email',
    component: page('auth/password/reset-email')
  },
  {
    path:'/password/reset/:token',
    name: 'password.reset',
    component: page('auth/password/password-reset')
  },

  {
    path:'/upload',
    name: 'designs.upload',
    component: page('user/designs/create')
  },
  {
    path:'/designs/:id/edit',
    name: 'designs.edit',
    component: page('user/designs/edit')
  },
  {
    path:'/settings',
    name: 'settings',
    component: page('user/settings/index'),
    children:[
      {
        path:'', redirect:{name:'dashboard'}},
        {
          path:'dashboard',
          name:'dashboard',
          component: page('user/settings/dashboard')
        },
        {
          path:'profile',
          name:'profile',
          component: page('user/settings/profile')
        },
        {
          path:'design',
          name:'design',
          component: page('user/settings/design')
        },
    ]
  },
  {
    path: '/designs',
    name:'designs.search',
    component: page('designs/search'),
  },
  {
    path: '/design/:slug',
    name:'designs.show',
    component: page('designs/show'),
  }


]

export default routes;
