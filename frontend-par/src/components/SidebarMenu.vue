<template>
  <div>
    <button class="hamburger-btn d-lg-none" @click="toggleMenu">
      <i class="bi bi-list"></i>
    </button>

    <div class="sidebar bg-dark p-4 shadow" :class="{ 'mobile-hidden': !menuOpen }">
      <h2 class="text-center text-white mb-4">PCYMT</h2>
      <ul class="nav flex-column">
        <li class="nav-item" v-for="item in menuItems" :key="item.id">
          <a class="nav-link text-white" :class="{ 'active': item.active }" :href="item.url">
            <i :class="item.icon + ' me-2'"></i>{{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SidebarMenu',
  data() {
    return {
      menuOpen: false,
      menuItems: []
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    async fetchMenuItems() {
      try {
        const response = await axios.get('http://localhost:1337/api/menus');
        this.menuItems = response.data.data.map(item => ({
          id: item.id,
          text: item.Titulo,    // Mapea "Titulo" del API a "text" para el template
          url: item.Enlace,     // Mapea "Enlace" del API a "url" para el template
          icon: item.icon,      // Usa directamente el icono
          active: item.activo   // Mapea "activo" del API a "active" para el template
          // Si necesitas más campos, agrégalos aquí
        }));
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    }
  },
  created() {
    this.fetchMenuItems();
  }
}
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
  width: 220px;
  transition: transform 0.3s ease;
  z-index: 1000;
}

.nav-link {
  color: white;
  font-weight: 500;
  border-radius: 15px;
  margin-bottom: 5px;
  transition: all 0.3s;
  padding: 10px 15px;
}

.nav-link.active {
  background-color: rgba(13, 253, 45, 0.1);
  color: #0d6efd;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Estilos para móviles */
@media (max-width: 992px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
  }
  
  .sidebar.mobile-hidden {
    transform: translateX(-100%);
  }
  
  .sidebar:not(.mobile-hidden) {
    transform: translateX(0);
  }
  
  .hamburger-btn {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1100;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    font-size: 1.5rem;
    padding: 5px 10px;
    border-radius: 5px;
  }
}

/* Efecto overlay cuando el menú está abierto */
@media (max-width: 992px) {
  .sidebar:not(.mobile-hidden) + .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
}
</style>