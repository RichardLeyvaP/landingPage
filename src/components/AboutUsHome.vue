<template>
  <v-container class="pt-12">
    <v-row class="pt-12">
      <v-col cols="12" class="pt-12" md="1"></v-col>
      <v-col cols="12" class="pa-0 ma-0" md="4">
        <v-parallax src="@/assets/silla1.png" ></v-parallax>
      </v-col>
      <v-col cols="12 "  class="" md="6" style="background-color: #FFffff;">

        <v-card-text class="text-justify">
          <span class="text-h3 font-weight-black text-uppercase text-amber-darken-1">Hernández </span> <br><br>
          <span class="text-brown-darken-1 pt-12 pb-12"> Es un salón pensado para los niños, jóvenes y adultos de la casa que
          buscan ser atendidos y lucir como un
          rey. Nuestra temática, adaptada a un reino moderno, permite que vivan dicha experiencia.<br><br> Tenemos servicios de
          cortesía como café capuchino, chocolate, entre otras bebidas calientes.  Además, todos los cortes
          incluyen lavado de cabello. <br><br> En nuestra barbería tendrás a tu disposición la anfitriona,
          el barbero, el técnico capilar, el auxiliar de aseo y la cajera, concentrados en brindarte el mejor servicio.
        </span>

            </v-card-text>
            <v-card-actions class="pt-4">
   
   <v-btn color="amber-darken-1" prepend-icon="mdi-eye" variant="text" to="/sobre-nosotros">Ver más
     
   </v-btn>
 </v-card-actions>
      </v-col>
      <v-col cols="12" class="pt-12" md="1"></v-col>
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
    .get('https://api2.simplifies.cl/api/course-show', {
      params: {
        business_id: this.business_id
      }
    })
    .then((response) => {
      this.results = response.data.courses;
    });

  }
},
};
</script>

