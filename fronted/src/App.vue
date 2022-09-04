<template>
  <body>
    <div>
        <p>{{ mensaje }}</p>
    </div>
    <header class="header">
      <div class="container">
      <div class="btn-menu">
        <label for="btn-menu">☰</label>
      </div>
        <div class="logo">
          <h1>Logotipo</h1>
        </div>
        <nav class="menu">
          <a href="https://alloxentric.com/"><img src="https://alloxentric.com/wp-content/uploads/2020/11/alloxentric_logo-3x.png" alt="error" class="imagen"></a>
        </nav>
      </div>
    </header>
    <div class="capa"></div>
  <input type="checkbox" id="btn-menu">
  <div class="container-menu">
    <div class="cont-menu">
      <nav>
        <a href="#">Trascripciones</a>
        <a href="#">Historial</a>
        <a href="#">Algo mas</a>
        <a href="http://localhost:8080/auth/realms/master/protocol/openid-connect/auth?client_id=security-admin-console&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fadmin%2Fmaster%2Fconsole%2F&state=d11b7d2a-dee7-44a0-8ad4-8b59b5ec6eed&response_mode=fragment&response_type=code&scope=openid&nonce=5d98f763-2a1b-4deb-82bf-2c64e471c24f&code_challenge=vjYDeQkVy2pwAxSmBKo-E5dcV2hwNDtq_bs5tEsmr-E&code_challenge_method=S256">Inicio Sesión</a>
      </nav>
      <label for="btn-menu">✖️</label>
    </div>
  </div>

  </body>
  </template>
<script>
import axios from 'axios'
export default{
  name: 'Main',
  data () {
    return {
      mensaje: 'Nuevo mensaje desde Vue JS'
    }
  },
  methods: {
    getMensaje () {
      const path = 'http://localhost:5000/api/v1.0/mensaje'
      axios.get(path).then((respuesta) => {
        this.mensaje = respuesta.data
      })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  created () {
    this.getMensaje()
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates|Poppins&display=swap');
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat Alternates', sans-serif;
    }
    body{
      background-color: cadetblue;
      background-size: 100vw 100vh;
      background-repeat: no-repeat;
    }
    .capa{
      position: fixed;
      width: 100%;
      height: 100vh;
      background: rgba(0,0,0,0.6);
      z-index: -1;
      top: 0;left: 0;
    }
    /*Estilos para el encabezado*/
    .header{
      width: 100%;
      height: 100px;
      position: fixed;
      top: 0;left: 0;
    }
    .container{
      width: 90%;
      max-width: 1200px;
      margin: auto;
    }
    .container .btn-menu, .logo{
      float: left;
      line-height:100px;
    }
    .container .btn-menu label{
      color: #fff;
      font-size: 25px;
      cursor: pointer;
    }
    .logo h1{
      color: #fff;
      font-weight: 400;
      font-size: 22px;
      margin-left: 10px;
    }
    .container .menu{
      float: right;
      line-height: 100px;
    }
    .container .menu a{
      display: inline-block;
      padding: 15px;
      line-height: normal;
      text-decoration: none;
      color: #fff;
      transition: all 0.3s ease;
      border-bottom: 2px solid transparent;
      font-size: 15px;
      margin-right: -100px;
    }
    .container .menu a:hover{
      border-bottom: 2px solid #c7c7c7;
      padding-bottom: 5px;
    }
    /*Fin de Estilos para el encabezado*/
    /*Menù lateral*/
    #btn-menu{
      display: none;
    }
    .container-menu{
      position: absolute;
      background: rgba(0,0,0,0.5);
      width: 100%;
      height: 100vh;
      top: 0;left: 0;
      transition: all 500ms ease;
      opacity: 0;
      visibility: hidden;
    }
    #btn-menu:checked ~ .container-menu{
      opacity: 1;
      visibility: visible;
    }
    .cont-menu{
      width: 100%;
      max-width: 250px;
      background: #1c1c1c;
      height: 100vh;
      position: relative;
      transition: all 500ms ease;
      transform: translateX(-100%);
    }
    #btn-menu:checked ~ .container-menu .cont-menu{
      transform: translateX(0%);
    }
    .cont-menu nav{
      transform: translateY(15%);
    }
    .cont-menu nav a{
      display: block;
      text-decoration: none;
      padding: 20px;
      color: #c7c7c7;
      border-left: 5px solid transparent;
      transition: all 400ms ease;
    }
    .cont-menu nav a:hover{
      border-left: 5px solid #c7c7c7;
      background: #1f1f1f;
    }
    .cont-menu label{
      position: absolute;
      right: 5px;
      top: 10px;
      color: #fff;
      cursor: pointer;
      font-size: 18px;
    }
    .imagen{
      max-width: 50%;
      max-height: 50%;
      display: left;
    }
    /*Fin de Menù lateral*/
</style>
