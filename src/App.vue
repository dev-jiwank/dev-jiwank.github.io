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
