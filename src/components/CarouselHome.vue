<template>
  <v-app>
    <v-container fluid>
      <!-- Carrusel / Slider -->
      <v-carousel cycle hide-delimiter-background height="400px" color="#000000" @change="handleCarouselChange">
        <v-carousel-item v-for="(slide, i) in cards" :key="i" :src="'https://api2.simplifies.cl/api/images/' + slide.image"></v-carousel-item>
      </v-carousel>

      <!-- Card con transición retardada -->
      <transition name="fade" mode="out-in">
        <v-card v-if="showCard" class="mt-5">
          <v-card-title>Título del Card</v-card-title>
          <v-card-text>Este card aparece después de que el slider se haya mostrado.</v-card-text>
        </v-card>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    cards: [],
    /*slides: [
      { src: '@/assets/logo.png' },
      { src: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMThfY29sb3JlZF9wZW5jaWxfdGV4dHVyZV9pbGx1c3RyYXRpb25fb2ZfYmVhY2hfbF84YjEyYTA2Mi1kNjE2LTQ4ZTktYWM1ZS04MzI5MzgyNTMxOGNfMS5qcGc.jpg' },
      { src: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMThfY29sb3JlZF9wZW5jaWxfdGV4dHVyZV9pbGx1c3RyYXRpb25fb2ZfYmVhY2hfbF84YjEyYTA2Mi1kNjE2LTQ4ZTktYWM1ZS04MzI5MzgyNTMxOGNfMS5qcGc.jpg' },
    ],*/
    showCard: false,
  }),
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
  methods: {
    handleCarouselChange() {
      // Asegúrate de limpiar el temporizador si el carrusel cambia rápidamente
      clearTimeout(this.timeoutId);

      // Establece un temporizador para mostrar el card después de un retraso
      this.timeoutId = setTimeout(() => {
        this.showCard = true;
      }, 1000); // Ajusta este tiempo según sea necesario
    }
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy() {
    // Limpia el temporizador al destruir el componente para evitar fugas de memoria
    clearTimeout(this.timeoutId);
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
