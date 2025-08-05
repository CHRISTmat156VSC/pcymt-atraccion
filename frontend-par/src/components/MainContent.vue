<template>
  <div 
    class="main-content"
    :style="{
      backgroundImage: 'url(' + require('@/assets/portada5.jpeg') + ')',
    }"
  >
    <div class="content-overlay">
      <h1 class="title">PARQUE DE LAS CULTURAS Y DE<br>LA MADRE TIERRA</h1>
      <p class="subtitle">Un espacio natural y cultural para todos</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style scoped>
.main-content {
  flex: 1;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Efecto parallax en dispositivos con soporte */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
/* Efecto de capa oscura para mejorar legibilidad */
.main-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.content-overlay {
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 3rem;
  border-radius: 20px;
  max-width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(5px); /* Efecto de vidrio esmerilado */
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
}

.title {
  font-size: 2.5rem;
  font-weight: 800; /* Más grueso */
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  letter-spacing: 0.5px;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 1px;
}
/* Responsive para móviles - Diseño premium */
@media (max-width: 768px) {
  .main-content {
    background-attachment: scroll; /* Mejor rendimiento en móviles */
  }
  
  .content-overlay {
    padding: 2rem 1.5rem;
    margin: 1rem;
    max-width: 95%;
    border-radius: 15px;
    backdrop-filter: blur(3px);
  }

  .title {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.content-overlay {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>