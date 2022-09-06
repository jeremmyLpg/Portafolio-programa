// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Keycloak from 'keycloak-js'

let initOptions = {
  url : 'http://localhost:8080/auth',
  realm : 'Portafolio',
  clientId : 'Alloxentric',
  onLoad  : 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).success((auth) =>{
    
    if(!auth) {
      window.location.reload();
    } else { 
    }
    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

    setInterval(() =>{
      keycloak.updateToken(70).success((refreshed)=>{
        if (refreshed) {
          Vue.$log.debug('Token refreshed'+ refreshed);
        } else {
          Vue.$log.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).error(()=>{
          Vue.$log.error('Failed to refresh token');
      });
    }, 60000)

}).error(() =>{
  Vue.$log.error("Authenticated Failed");
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'})