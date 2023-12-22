<template>
  <div id="app">
    <router-view>
      
      <MainPage></MainPage>
      <RatesPage></RatesPage>
      <AboutPage></AboutPage>

    </router-view>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import MainPage from './pages/MainPage.vue';
import RatesPage from './pages/RatesPage.vue';
import footerComponent from './components/footerComponent.vue'
import AboutPage from './pages/AboutPage.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    RatesPage,
    AboutPage,
    footerComponent,
}
}
</script>

<style>
</style>
