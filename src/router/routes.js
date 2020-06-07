
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/mision_vision',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/information/mision_vision.vue') }
    ]
  },
  {
    path: '/location',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/map/location.vue') }
    ]
  },
  {
    path: '/post_construction',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/post_construction.vue') }
    ]
  },
  {
    path: '/post_mangueras',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/post_mangueras.vue') }
    ]
  },
  {
    path: '/post_acero',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/post_acero.vue') }
    ]
  },
  {
    path: '/post_clavos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/post_clavos.vue') }
    ]
  },
  {
    path: '/post_agropecuarios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/post_agropecuarios.vue') }
    ]
  },
  {
    path: '/post_cercas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/post_cercas.vue') }
    ]
  },
  {
    path: '/post_laminas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/post_laminas.vue') }
    ]
  },
  {
    path: '/post_herramientas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/post_herramientas.vue') }
    ]
  },
  {
    path: '/product/:idProduct',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 
        component: () => import('pages/products/product.vue')}
    ]
  },
  {
    path: '/shoppingCart',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 
        component: () => import('pages/cart/shopping_cart.vue')}
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
