
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
    path: '/magueras_agua',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/mangueras/mangueras_agua.vue') }
    ]
  },
  {
    path: '/mangueras-codos-naranja',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/mangueras/codos-naranja.vue') }
    ]
  },
  {
    path: '/mangueras-conectores',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/mangueras/coples.vue') }
    ]
  },
  {
    path: '/magueras_bicapa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/mangueras/mangueras_bicapa.vue') }
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
    path: '/varilla',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/acero/varilla.vue') }
    ]
  },
  {
    path: '/alambron',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/acero/alambron.vue') }
    ]
  },
  {
    path: '/recocido',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/acero/recocido.vue') }
    ]
  },
  {
    path: '/armex',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/acero/armex.vue') }
    ]
  },
  {
    path: '/malla-losa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/acero/malla-losa.vue') }
    ]
  },
  {
    path: '/malla-piso',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/acero/malla-piso.vue') }
    ]
  },
  {
    path: '/malla-plafonera',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/acero/malla-plafonera.vue') }
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
    path: '/clavos-madera',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/clavos/madera.vue') }
    ]
  },
  {
    path: '/clavos-concreto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/clavos/concreto.vue') }
    ]
  },
  {
    path: '/clavos-paraguas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/clavos/paraguas.vue') }
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
    path: '/malla-borreguera',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/agropecuarios/borreguera.vue') }
    ]
  },
  {
    path: '/malla-gallinera',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/agropecuarios/gallinera.vue') }
    ]
  },
  {
    path: '/malla-criba',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/agropecuarios/criba.vue') }
    ]
  },
  {
    path: '/malla-multimalla',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/agropecuarios/multimalla.vue') }
    ]
  },
  {
    path: '/malla-mosquitera',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/agropecuarios/mosquitera.vue') }
    ]
  },
  {
    path: '/grapa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/agropecuarios/grapa.vue') }
    ]
  },
  {
    path: '/puas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/agropecuarios/puas.vue') }
    ]
  },
  {
    path: '/poste-t',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/agropecuarios/poste-t.vue') }
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
    path: '/concertina',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/proteccion.vue') }
    ]
  },
  {
    path: '/malla-ciclonica',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/ciclonica.vue') }
    ]
  },
  {
    path: '/malla-reforzada',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/reforzada.vue') }
    ]
  },
  {
    path: '/malla-verde',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/verde.vue') }
    ]
  },
  {
    path: '/malla-panel',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/panel.vue') }
    ]
  },
  {
    path: '/panel-accesorios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/accesorios.vue') }
    ]
  },
  {
    path: '/malla-tubo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/tubo.vue') }
    ]
  },
  {
    path: '/cercha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/cercha.vue') }
    ]
  },
  {
    path: '/malla-accesorios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/malla-accesorios.vue') }
    ]
  },
  {
    path: '/tapones',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/tapones.vue') }
    ]
  },
  {
    path: '/espadas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/espadas.vue') }
    ]
  },
  {
    path: '/bisagras',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/bisagras.vue') }
    ]
  },
  {
    path: '/decorativa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/cercas/decorativa.vue') }
    ]
  },
  {
    path: '/laminas-galvanizada',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/laminas/galvanizada.vue') }
    ]
  },
  {
    path: '/caballetes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/laminas/caballetes.vue') }
    ]
  },
  {
    path: '/lamina-galvateja',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/laminas/galvateja.vue') }
    ]
  },
  {
    path: '/lamina-pijas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/laminas/pija.vue') }
    ]
  },
  {
    path: '/lamina-polin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/laminas/polin.vue') }
    ]
  },
  {
    path: '/lamina-ptr',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/laminas/ptr.vue') }
    ]
  },
  {
    path: '/lamina-negro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/laminas/negro.vue') }
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
    path: '/herramientas-segueta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/segueta.vue') }
    ]
  },
  {
    path: '/herramientas-barreta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/barreta.vue') }
    ]
  },
  {
    path: '/herramientas-carretillas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/carretillas.vue') }
    ]
  },
  {
    path: '/herramientas-excavacion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/excavacion.vue') }
    ]
  },
  {
    path: '/herramientas-cincel',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/cincel.vue') }
    ]
  },
  {
    path: '/herramientas-cuchara',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/cuchara.vue') }
    ]
  },
  {
    path: '/herramientas-hacha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/hacha.vue') }
    ]
  },
  {
    path: '/herramientas-marro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/marro.vue') }
    ]
  },
  {
    path: '/herramientas-azadon',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/azadon.vue') }
    ]
  },
  {
    path: '/herramientas-taquetes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/taquetes.vue') }
    ]
  },
  {
    path: '/herramientas-brocas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/brocas.vue') }
    ]
  },
  {
    path: '/herramientas-armellas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/armellas.vue') }
    ]
  },
  {
    path: '/herramientas-omega',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/omega.vue') }
    ]
  },
  {
    path: '/herramientas-caja',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/caja.vue') }
    ]
  },
  {
    path: '/herramientas-guantes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/post/herramienta/guantes.vue') }
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
