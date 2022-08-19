<template>
  <SidebarMenu/>
  <RouterView/>
</template>

<script>
import SidebarMenu from '@/views/Base.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    SidebarMenu,
    RouterView
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    background: #f5f7f9;
    width : 100vw;
    height : 100vh;
  }
</style>