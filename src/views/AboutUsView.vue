<template>
  <v-container class="mb-12">
    <v-row class="mt-12">
      <v-col cols="12">
        <span class="text-h3 font-weight-black text-uppercase text-amber-darken-1">Barbería </span>
        <span class="text-h3 font-weight-black text-uppercase text-brown-darken-4">Hernández </span> <br><br>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <p class="text-brown-darken-3 text-justify v">
          Hernández es un salón pensado para los niños, jóvenes y adultos de la casa, que buscan
          ser atendidos y lucir como un Rey. Nuestra temática adaptada a un reino moderno,
          permite que vivan dicha experiencia.
          Además tenemos servicios de cortesía como café capuchino, chocolate, entre otras
          bebidas calientes y un sistema de registro que facilita la atención de los clientes siendo
          la barbería donde menos tiempo esperarás a tu barbero.
        </p> <br>

        <span class="text-h3 font-weight-black text-uppercase text-amber-darken-1">Misión </span>  
        <p class="text-brown-darken-3 text-justify .subtitle-1">
          Lograr el equilibrio entre el precio y la calidad brindando la mejor atención para
          nuestros clientes que podamos ser accesibles para las familias chilenas.
        </p><br>

        <span class="text-h3 font-weight-black text-uppercase text-amber-darken-1">Visión </span>  
        <p class="text-brown-darken-3 text-justify .subtitle-1">
          Ser la franquicia de barberías con más sucursales a nivel nacional para poder
          llegar a todos los hogares cambiando su estilo y su autoestima haciéndolos sentir como
          un rey.
        </p><br>

        <span class="text-h3 font-weight-black text-uppercase text-amber-darken-1">Historia </span>  
        <p class="text-brown-darken-3 text-justify .subtitle-1">
          Fundada en 2019 por los hermanos Hernández jóvenes emprendedores con un
          deseo ardiente de emprender, fueron en busca de la excelencia educándose con los
          mejores exponentes a nivel nacional e internacional, de esta manera lograron definir su
          estilo y concepto del salón la cual permite adaptar un reino moderno para nuestros
          clientes.
        </p>
      </v-col>
    </v-row>
    <v-row>
  <v-col cols="12" md="3"></v-col>
  <v-col cols="12" md="6" class="d-flex justify-center align-center">
    <v-img src="@/assets/imagen3.png" class="mb-4 small-img"></v-img>
  </v-col>
  <v-col cols="12" md="3"></v-col>
</v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutUsView',
};
</script>

<style scoped>
.v-img {
  max-width: 100%; /* Ajusta el ancho máximo según tus necesidades */
  height: auto; /* Permite que la altura se ajuste automáticamente */
}

.subtitle-1 {
  font-size: 1rem; /* Ajusta el tamaño de la fuente para dispositivos móviles */
}
.small-img img {
  max-height: 150px; /* Ajusta la altura máxima según tus necesidades */
  width: 100%; /* Ajusta el ancho al 100% del contenedor */
  object-fit: cover; /* Ajusta la imagen para que cubra su contenedor */
}
</style>
