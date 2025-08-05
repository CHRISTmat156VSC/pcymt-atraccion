<template>
  <div class="home d-flex">
    <SidebarMenu />
    <MainContent />
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';
import MainContent from '@/components/MainContent.vue';

export default {
  name: 'HomeView',
  components: {
    SidebarMenu,
    MainContent
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  width: 100vw; /* Ocupa el 100% del ancho visible */
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/* Reset adicional para contenedores hijos */
.home >>> .sidebar,
.home >>> .main-content {
  margin: 0;
  padding: 0;
}
</style>