<template>
  <v-footer color="grey-darken-4" class="white--text mb-o pb-0">
    <v-container fluid>
      <!-- Contenido Principal del Footer -->
      <v-row class="mb-4">
        <v-col cols="12" md="1"></v-col>
        <v-col cols="12" md="4">
          <!-- Contenido centrado para pantallas pequeñas y alineado a la izquierda en pantallas más grandes -->
          <v-list bg-color="grey-darken-4" align="left">
            <v-list-subheader class="text-white text-subtitle-1" inset>Nuestras Sucursales</v-list-subheader>
            <v-list-item v-for="card in cards" :key="card.title" :subtitle="card.location" :title="card.title">
              <template v-slot:prepend>
                <v-avatar :color="card.color">
                  <v-icon color="orange">{{ card.icon }}</v-icon>
                </v-avatar>
              </template>

            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="3">

          <v-list-subheader class="text-white text-subtitle-1" inset>Síguenos en Nuestras Redes</v-list-subheader>
          <v-btn icon density="comfortable" class="ml-2" href="https://www.instagram.com/barberiahernandeztv/"
            target="_blank">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn bg-color="#FFFFFF00" icon density="comfortable" class="ml-2"
            href="https://www.facebook.com/profile.php?id=100065259200120" target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon density="comfortable" class="ml-2" href="https://www.youtube.com/channel/UCRVTESNlCnAS45J4DEBi7tQ"
            target="_blank">
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
          <v-btn icon density="comfortable" class="ml-2" href="https://www.tiktok.com/@barberiahernandeztv" target="_blank">
          <v-icon>
            <img src="@/assets/logo-tiktok.svg" alt="TikTok Icon" style="width: 24px; height: 24px;">
          </v-icon>
        </v-btn>
        </v-col>
      </v-row>

      <!-- Copyright, centrado y debajo de todo -->
      <v-row class="mb-0 pb-0">
        <v-col cols="12" class="text-center">
          <v-divider></v-divider>
          <div class="pt-4">
            &copy; {{ new Date().getFullYear() }} Todos los derecho reservados. Barberías Hernandez</div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import axios from "axios";

export default {
  name: 'AppFooter',

  data() {
    return {
      curriculum: null,
      hover: false,
      cards: [
        /*{
          icon:"mdi-store",
          title: 'Mall La Paloma',
          subtitle: 'Sucursal',
          phone:"+56 9 5765 1503",
          location: 'Volcán Puntiagudo 100',
          location_link:"https://maps.app.goo.gl/hu86KEcrUAFpr9b37",
          phone_link:"https://wa.me/56957651503",

          image: 'paloma.jpg', // Asume que esta es la imagen en la carpeta assets
        },
        {
          icon:"mdi-store",
          title: 'Bosquemar',
          subtitle: 'Sucursal',
          phone:"+56 9 5341 0055",
          location: 'Av. Los Notros 1280',
          location_link:"https://maps.app.goo.gl/yk2AX4zit1Zw1CvLA",
          phone_link:"https://wa.me/56953410055",
          image: 'bosquemar.jpg', // Asume que esta es la imagen en la carpeta assets
         
        },
        {
          icon:"mdi-store",
          title: 'Sucursal 3',
          subtitle: 'Sucursal',
          phone:"+56 9 5765 1503",
          location: 'Volcán Puntiagudo 100',
          location_link:"https://maps.app.goo.gl/hu86KEcrUAFpr9b37",
          phone_link:"https://wa.me/56957651503",
          image: 'salon_sillas.jpg', // Asume que esta es la imagen en la carpeta assets
      
        },
        {
          icon:"mdi-school",
          title: 'Academia Hernández',
          subtitle: 'Academia',
          phone:"+56 9 5049 9706",
          location: 'Guillermo Gallardo 310',
          location_link:"https://maps.app.goo.gl/NKXeN7YwAX1e2s8C9",
          phone_link:"https://wa.me/56950499706",
          image: 'academia.jpg', // Asume que esta es la imagen en la carpeta assets
          
        },*/

      ],
    };
  },
  mounted() {
    axios
      .get('https://api2.simplifies.cl/api/business-branch-academy')
      .then((response) => {
        //console.log(this.response)
        this.cards = response.data.business;
        console.log(this.cards);
        //console.log(this.student)
      });
  },
};
</script>

<style scoped>
.v-footer {
  padding: 1rem 0;
}
</style>