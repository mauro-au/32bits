<template>
  <div id="app">
    <nav class="container">
      <div class="logo">
        <img alt="logo" src="./assets/logo.png" />
      </div>
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="{ name: 'index' }" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'search' }" class="nav-link">Busquedas</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'sales' }" class="nav-link">Ventas</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'total' }" class="nav-link">Total</router-link>
        </li>
      </ul>
    </nav>
    <transition name="vista">
      <router-view class="container"></router-view>
    </transition>
  </div>
</template>

<script>
// import Inicio from './Inicio'
export default {
  // component:{
  //   Inicio
  // }
};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  margin: 40px;
}
.logo img{
  width: 400px;
}
.nav {
  background: rgb(41, 41, 41);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 30px;
}
.nav-link {
  color: #fff;
}
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
