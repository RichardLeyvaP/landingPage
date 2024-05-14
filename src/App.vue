<template>
  <v-app style="background-color: #EFEBE9;">
    <v-app-bar app color="grey-darken-4" dark>

      <!-- Logo    -->
    
      <v-toolbar-title>
        <v-img src="@/assets/logo.png" contain alt="Logo de la barbería"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Ítems del menú con la primera letra en mayúscula -->
      <v-btn text to="/" prepend-icon="mdi-home" class="text-capitalize">Inicio</v-btn>
      <v-btn text href="https://reservasbh.simplifies.cl" prepend-icon="mdi-calendar" class="text-capitalize">Reserva</v-btn>
      <v-btn text to="/servicios" prepend-icon="mdi-format-list-bulleted-triangle"
        class="text-capitalize">Servicios</v-btn>
      <v-btn text to="/sobre-nosotros"  prepend-icon="mdi-account-group" class="text-capitalize">Sobre nosotros</v-btn>
      <v-btn text to="/sucursales"  prepend-icon="mdi-store" class="text-capitalize">Sucursales</v-btn>
      <v-btn text href="#tienda-online" prepend-icon="mdi-store" class="text-capitalize">Tienda online</v-btn>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="text-capitalize" prepend-icon="mdi-school" text v-bind="props">
            Cursos
          </v-btn>
        </template>
        <v-list>
          <v-list-item  to="/cursos"  v-for="(item, index) in items" :key="index" :value="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <!-- Iconos de Redes Sociales -->
      <v-btn icon href="https://facebook.com" target="_blank">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon href="https://twitter.com" target="_blank">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon href="https://instagram.com" target="_blank">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-app-bar>
    <br>
    <br>

    <!-- Área donde se renderizarán los componentes de tus rutas -->
    <router-view></router-view>

    <!-- Footer al final -->
    <AppFooter />
  </v-app>
</template>

<script>

import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'Barber Training' ,to :""},
      { title: 'Stylist Training Online', to :""},
    ],
  }),
  components: {
    AppFooter
  },

  methods: {
    goToHome() {

      this.$router.push({ name: 'home' , hash: '#about_us'})
    },
  },

};
</script>

<style>
.text-capitalize {
  text-transform: none !important;
  /* Asegúrate de que solo la primera letra de cada palabra sea mayúscula */
}
</style>
