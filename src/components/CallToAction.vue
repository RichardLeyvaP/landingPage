<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <span class="headline font-weight-black text-uppercase text-amber-darken-1">Lleva tu negocio al próximo nivel usando </span>
        <span class="headline font-weight-black text-uppercase text-brown-darken-4">Simplifies</span><br>
        
        <v-card-text class="text-justify">
          <span class="pt-12 text-brown-darken-3 subtitle-1">
            Simplifies te ofrece todas las herramientas necesarias para gestionar citas, inventario, y personal,
            todo desde una sola aplicación intuitiva. Únete a los cientos de salones que ya están mejorando su
            productividad y satisfacción del cliente con Simplifies.
          </span>
        </v-card-text>
        
        <v-card-actions class="pt-2">
          <v-btn color="amber-darken-1" prepend-icon="mdi-eye" variant="text" href="https://www.simplifies.cl">Ver más</v-btn>
        </v-card-actions>
      </v-col>

      <v-col cols="1"></v-col>

      <v-col cols="12" md="5" class="text-center">
        <transition name="slide">
          <v-img src="@/assets/phone.png" class="big-image rounded-lg"></v-img>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CallToAction'
}
</script>

<style scoped>
.overflow-visible {
  overflow: visible;
}

.big-image {
  max-width: 100%; /* Ajusta la imagen al ancho máximo del contenedor */
  height: auto;
}

.headline {
  font-size: 1.5rem; /* Ajusta el tamaño de la fuente para dispositivos móviles */
}

.subtitle-1 {
  font-size: 1rem; /* Ajusta el tamaño de la fuente para dispositivos móviles */
}

@media (min-width: 600px) {
  .headline {
    font-size: 2.125rem; /* Tamaño de la fuente para dispositivos más grandes */
  }

  .subtitle-1 {
    font-size: 1.25rem; /* Tamaño de la fuente para dispositivos más grandes */
  }
}
</style>
