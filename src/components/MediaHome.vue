<template>
    <v-parallax src="@/assets/b6.png" class="rounded-lg yellow-background">
      <v-container>
        <v-row justify="center"> <!-- Centra horizontalmente en todos los tamaños -->
          <v-col cols="12" md="8"> <!-- Utiliza 8 columnas para centrar el video en dispositivos medianos -->
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
      </v-container>
    </v-parallax>
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
  