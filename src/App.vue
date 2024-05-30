<template>
  <v-app style="background-color: #EFEBE9;">
    <v-app-bar app color="grey-darken-4" dark>
  <!-- Botón de menú para móviles -->
  <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
  <v-toolbar-title>
    <v-img src="@/assets/logo.png" contain alt="Logo de la barbería"></v-img>
  </v-toolbar-title>

  <v-spacer></v-spacer>

  <!-- Menú de navegación para pantallas grandes -->
  <v-btn text to="/" prepend-icon="mdi-home" class="text-capitalize d-none d-md-flex">Inicio</v-btn>
  <v-btn text href="https://reservasbh.simplifies.cl" prepend-icon="mdi-calendar" class="text-capitalize d-none d-md-flex">Reserva</v-btn>
  <v-btn text to="/servicios" prepend-icon="mdi-format-list-bulleted-triangle" class="text-capitalize d-none d-md-flex">Servicios</v-btn>
  <v-btn text to="/sobre-nosotros" prepend-icon="mdi-account-group" class="text-capitalize d-none d-md-flex">Sobre nosotros</v-btn>
  <v-btn text to="/sucursales" prepend-icon="mdi-store" class="text-capitalize d-none d-md-flex">Sucursales</v-btn>
  <v-btn text href="#tienda-online" prepend-icon="mdi-store" class="text-capitalize d-none d-md-flex">Tienda online</v-btn>

  <v-menu class="d-none d-md-flex">
  <template v-slot:activator="{ props }">
    <v-btn class="text-capitalize" prepend-icon="mdi-school" text v-bind="props">
      Cursos
    </v-btn>
  </template>
  <v-list>
    <v-list-item to="/cursos" v-for="(item, index) in courseData" :key="index" :value="index">
      <v-list-item-title>{{ item.name }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>

  <v-spacer></v-spacer>

  <!-- Iconos de Redes Sociales -->
  <v-btn icon href="https://facebook.com" target="_blank" class="d-none d-md-flex">
    <v-icon>mdi-facebook</v-icon>
  </v-btn>
  <v-btn icon href="https://twitter.com" target="_blank" class="d-none d-md-flex">
    <v-icon>mdi-twitter</v-icon>
  </v-btn>
  <v-btn icon href="https://instagram.com" target="_blank" class="d-none d-md-flex">
    <v-icon>mdi-instagram</v-icon>
  </v-btn>
</v-app-bar>


    <v-navigation-drawer v-model="drawer" app temporary>
  <v-list dense>
    <v-list-item to="/">
      <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
      <v-list-item-title>Inicio</v-list-item-title>
    </v-list-item>
    <v-list-item href="https://reservasbh.simplifies.cl">
      <v-list-item-icon><v-icon>mdi-calendar</v-icon></v-list-item-icon>
      <v-list-item-title>Reserva</v-list-item-title>
    </v-list-item>
    <v-list-item to="/servicios">
      <v-list-item-icon><v-icon>mdi-format-list-bulleted-triangle</v-icon></v-list-item-icon>
      <v-list-item-title>Servicios</v-list-item-title>
    </v-list-item>
    <v-list-item to="/sobre-nosotros">
      <v-list-item-icon><v-icon>mdi-account-group</v-icon></v-list-item-icon>
      <v-list-item-title>Sobre nosotros</v-list-item-title>
    </v-list-item>
    <v-list-item to="/sucursales">
      <v-list-item-icon><v-icon>mdi-store</v-icon></v-list-item-icon>
      <v-list-item-title>Sucursales</v-list-item-title>
    </v-list-item>
    <v-list-item href="#tienda-online">
      <v-list-item-icon><v-icon>mdi-store</v-icon></v-list-item-icon>
      <v-list-item-title>Tienda online</v-list-item-title>
    </v-list-item>

    <!-- Cursos dentro del Drawer -->
    <v-subheader>Cursos</v-subheader>
    <v-list-item to="/cursos" v-for="(item, index) in courseData" :key="index" :value="index">
      <v-list-item-title>{{ item.name }}</v-list-item-title>
    </v-list-item>
  </v-list>

      <!-- Iconos de Redes Sociales en el Drawer -->
      <v-divider></v-divider>
      <v-list-item>
        <v-btn icon href="https://facebook.com" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://twitter.com" target="_blank">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon href="https://instagram.com" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-list-item>
    </v-navigation-drawer>

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
import axios from "axios";
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    courseData: [],
  }),
  components: {
    AppFooter
  },
  mounted() {
    axios
      .get('https://api2.simplifies.cl/api/course')
      .then((response) => {
        this.courseData = response.data.courses;
        console.log("estos son los cursos")
        console.log(this.results)
      });
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home', hash: '#about_us' })
    },
  },
};
</script>

<style>
.text-capitalize {
  text-transform: none !important;
}
</style>
