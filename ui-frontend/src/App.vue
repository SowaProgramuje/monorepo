<template>
  <UiButton/>
  <Logo>
</template>

<script>
import UiButton from './stories/components/UiButton';
import Logo from '../../content-el-frontend/nuxt-app/components/Logo/Logo';

export default {
  name: 'App',
  components: {
    UiButton,
    Logo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
