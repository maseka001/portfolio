
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 611, hash: '9b45cb239c163a787db175fb8a7669011f9ab2e8aafbb5c845af0a5368ed7d43', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1125, hash: 'dedc97d4f53269ddbf2ccd11b27ab6edfaf927035cb40fd3271de47d03c2558d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5845, hash: 'd179665ca2d02ca537d0434530f325d20bc0c9a5d7f73b9e1b26ca838a3be7cb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6222, hash: 'e9012016737cc4e9b01109e80c04421733ca51b4aefbe5ed42ab9b6f6424460d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 4317, hash: '3ce06387bed61a215e3d20b00d95ab806cc537c2c1ec76bacd10e3158ba14e71', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 7458, hash: '7ac875dda30653b52034fdcc3bab884721057c1b839b8709d9c619a8d007f3ab', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
