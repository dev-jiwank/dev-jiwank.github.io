<template>
  <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans&display=swap&subset=korean" rel="stylesheet">
  <SidebarMenu/>
</template>

<script>
import SidebarMenu from '@/views/Base.vue'

export default {
  name: 'App',
  components: {
    SidebarMenu
  }
}
</script>

<style>
  /* @font-face {
      font-family: 'SDSamliphopangche_Outline';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  } */
  /* @font-face { 
    font-family: 'Cafe24Ohsquareair';
    src: url('https://cdn.jsdelivr.net/gh/miiusoft/font/Cafe24OhsquareAir/Cafe24Ohsquareair.woff') format('woff');
    font-weight: normal;
    font-style: normal; 
  } */
  #app {
    /* height : 100%; */
    font-family: 'Black Han Sans', sans-serif;
  }
</style>
