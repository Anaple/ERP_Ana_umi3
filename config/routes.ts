export default [
  {
    path: '/',
    redirect: '/dashstatus',
  },
  {
    path: '/user',
    layout: false,
    
    routes: [
      {path:'/user',redirect:'/user/login'},
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
      {
        name: '注册结果页',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/UserRegisterResult',
      },
      {
        name: '注册',
        icon: 'smile',
        path: '/user/register',
        component: './user/UserRegister',
      },
    ],
  },
  {
    path: '/dashstatus',
    name: '首页',
    icon: 'smile',
    component:'./Workplace'
  },
  /*{
    path: '/proxylist',
    name: '可用节点',
    icon: 'DeploymentUnitOutlined',
    component: './ProxyList',
  },*/
  {
    path:'/admin',
    name: '管理',
    icon: 'CrownOutlined',
    access: 'canManager',
    
    routes:[
      {
        path:'/admin',
        name:'Admin',
        icon:'CrownOutlined',
        access:'canAdmin',
        component: './Admin/Admin',
      },
      {
      path: '/admin/list',
      name: '用户',
      authority: ['manager'],
      icon: 'ConsoleSqlOutlined',
      component: './Admin/ListTableListAdmin',
    },
    /*{
      name: '服务器',
      icon: 'dashboard',
      authority: ['admin'],
      path: '/admin/serverstatus',
      component: './Admin/ServerStatusAdmin',
    },
    {
      path: '/admin/proxylist',
      name: '节点',
      authority: ['admin'],
      icon: 'ConsoleSqlOutlined',
      component: './Admin/ProxyTableListAdmin',
    },
    */
  ]

  },
  {
    path: '/error/404',
    layout: false,
    component: './404',
  },
];
