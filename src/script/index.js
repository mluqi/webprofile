import App from './views/app.js';

const home = new App({
    home: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    home.renderPage();
});
  
  window.addEventListener('load', () => {
    home.renderPage();
});