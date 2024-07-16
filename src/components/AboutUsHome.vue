<template>
  <v-container>
    <v-row >
      <v-col cols="12" class="pa-0 ma-0" md="6">
        <v-parallax src="@/assets/silla1.png" class="rounded-lg" style="height: 100%; min-height: 400px;"></v-parallax>
      </v-col>
      <v-col cols="12" class="d-flex flex-column align-center" md="6" style="background-color: #FFffff;">
        <v-card-text class="text-center">
          <span class="text-h3 font-weight-black text-uppercase text-amber-darken-1">Hernández</span>
          <span class="text-brown-darken-3 pt-12 pb-12 text-justify subtitle-1"> 
            Es un salón pensado para los niños, jóvenes y adultos de la casa que buscan ser atendidos y lucir como un rey. Nuestra temática, adaptada a un reino moderno, permite que vivan dicha experiencia.<br><br> 
            Tenemos servicios de cortesía como café capuchino, chocolate, entre otras bebidas calientes. Además, todos los cortes incluyen lavado de cabello. <br><br> 
            En nuestra barbería tendrás a tu disposición la anfitriona, el barbero, el técnico capilar, el auxiliar de aseo y la cajera, concentrados en brindarte el mejor servicio.
          </span>
        </v-card-text>
        <v-card-actions class="pt-4 justify-center">
          <v-btn color="amber-darken-1" prepend-icon="mdi-eye" variant="text" to="/sobre-nosotros">Ver más</v-btn>
        </v-card-actions>
      </v-col>
      <v-col cols="12" md="1"></v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: 'AboutUsHome',
  data: () => ({
    menu: false,
  }),
  methods: {
    initialize() {
  axios
    .get('https://api2.simplifies.cl/api/course')
    .then((response) => {
      this.results = response.data.courses;
    });

  }
},
};
</script>
<style scoped>
.text-h3 {
  display: block;
  margin-bottom: 2px; /* Ajusta según sea necesario para escritorio */
}

.text-h6 {
  display: block;
  margin-top: 2px; /* Ajusta según sea necesario para escritorio */
}
.subtitle-1 {
  font-size: 1rem; /* Ajusta el tamaño de la fuente para dispositivos móviles */
}
@media (max-width: 600px) {
  .text-h3 {
    margin-bottom: 1px; /* Ajusta según sea necesario */
  }
  .text-h6 {
    margin-top: 1px; /* Ajusta según sea necesario */
  }
  v-card-text {
    padding-top: 1px; /* Ajusta según sea necesario */
  }
  .subtitle-1 {
  font-size: 1rem; /* Ajusta el tamaño de la fuente para dispositivos móviles */
}
}
</style>
