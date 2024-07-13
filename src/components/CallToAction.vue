<template>

  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" class="">
        <span class="text-h3 font-weight-black text-uppercase text-amber-darken-1">Lleva tu negocio al próximo nivel
          usando </span>
        <span class="text-h3 font-weight-black text-uppercase text-brown-darken-4">Simplifies </span> <br><br>

        <v-card-text class="text-justify">
          <span class="pt-12 text-brown-darken-3">
            Simplifies te ofrece todas las herramientas necesarias para gestionar citas, inventario, y personal,
            todo desde una sola aplicación intuitiva. Únete a los cientos de salones que ya están mejorando su
            productividad y satisfacción del cliente con Simplifies.
          </span>
        </v-card-text>
        <v-card-actions class="pt-2">
   
          <v-btn color="amber-darken-1" prepend-icon="mdi-eye" variant="text" href="https://www.simplifies.cl">Ver más
            
          </v-btn>
        </v-card-actions>

      </v-col>
      <v-col cols="1" class="overflow-visible"></v-col>

      <v-col cols="5" class="overflow-visible">
        <transition name="slide">
          <v-img src="@/assets/phone.png" class="big-image"></v-img>
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
  width: 220% !;
  /* Ajusta este valor según necesites */
  height: auto;
  position: relative;
  left: 50%;
  /* Ajusta para centrar o posicionar según necesites */
  transform: translateX(-50%);
}
</style>