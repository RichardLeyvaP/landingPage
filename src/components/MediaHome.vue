<template>
    <v-container>
      <v-parallax src="@/assets/b6.png" class="rounded-lg yellow-background d-flex align-center justify-center" height="100%">
        <v-row justify="center" class="pa-3">
          <v-col cols="12" md="8">
            <v-responsive aspect-ratio="16/9">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/b4t7SK1YK88?si=b4t7SK1YK88"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </v-responsive>
          </v-col>
        </v-row>
      </v-parallax>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'MediaHome'
  }
  </script>
  
  <style scoped>
  /* Estilo para el fondo amarillo */
  .yellow-background {
    background-color: #FFEB3B; /* Amarillo de la paleta de colores de Material Design */
  }
  </style>
  