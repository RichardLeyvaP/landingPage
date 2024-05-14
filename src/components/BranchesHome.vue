<template>

  
  <v-container class="pt-12">
    <v-row>
      <v-col cols="12" md="3" v-for="(card, index) in cards" style="padding: 4px;" :key="index">
        <v-card class="mx-auto my-4 hover-card" @mouseover="cardHover(index, true)" @mouseleave="cardHover(index, false)"
          :class="{ 'orange-background': card.hover }" elevation="6">
          <v-parallax height="250" :src="card.image" class="white--text align-end"
            :class="{ 'image-grow': card.hover }"></v-parallax>

          <v-list-item class="pt-4" two-line>
            <v-list-item-content>
              <v-list-item-subtitle class="text-overline">
                <v-icon color="deep-orange lighten-2" size="small">{{ card.icon }}</v-icon> {{ card.subtitle }}
              </v-list-item-subtitle>
              <v-list-item-title class="text-h6 font-weight-bold pt-2 text-brown-darken-4">
                {{ card.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-text class="font-weight-medium">
            <v-btn class="v-btn-info-suc" :href="card.location_link" prepend-icon="mdi-map-marker" variant="plain">
              {{ card.location }}
            </v-btn>
            <v-btn class="v-btn-info-suc" :href="card.phone_link" prepend-icon="mdi-cellphone" variant="plain">
              {{ card.phone }}
            </v-btn>
          </v-card-text>

          <v-divider class="mx-4 mb-1"></v-divider>
          <!-- Acciones de la Tarjeta -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="brown-darken-4" href="https://reservasbh.simplifies.cl" text >Reservar</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import paloma from '@/assets/paloma.jpg';
import bosquemar from '@/assets/bosquemar.jpg';
import suc_new from '@/assets/suc_new.jpg';
import academia from '@/assets/chapa.jpg';

export default {
  name: 'BranchesHome',
  data() {
    return {
      curriculum: null,
      hover: false,
      cards: [
        {
          icon:"mdi-store",
          title: 'Mall La Paloma',
          subtitle: 'Sucursal',
          phone:"+56 9 5765 1503",
          location: 'Volcán Puntiagudo 100',
          location_link:"https://maps.app.goo.gl/hu86KEcrUAFpr9b37",
          phone_link:"https://wa.me/56957651503",

          image: paloma, // Asume que esta es la imagen en la carpeta assets
        },
        {
          icon:"mdi-store",
          title: 'Bosquemar',
          subtitle: 'Sucursal',
          phone:"+56 9 5341 0055",
          location: 'Av. Los Notros 1280',
          location_link:"https://maps.app.goo.gl/yk2AX4zit1Zw1CvLA",
          phone_link:"https://wa.me/56953410055",
          image: bosquemar, // Asume que esta es la imagen en la carpeta assets
         
        },
        {
          icon:"mdi-store",
          title: 'Proximamente!',
          subtitle: 'Nueva Sucursal',
          phone:"+56 9 5765 1503",
          location: 'Volcán Puntiagudo 100',
          location_link:"https://maps.app.goo.gl/hu86KEcrUAFpr9b37",
          phone_link:"https://wa.me/56957651503",
          image: suc_new, // Asume que esta es la imagen en la carpeta assets
      
        },
        {
          icon:"mdi-school",
          title: 'Academia Hernández',
          subtitle: 'Academia',
          phone:"+56 9 5049 9706",
          location: 'Guillermo Gallardo 310',
          location_link:"https://maps.app.goo.gl/NKXeN7YwAX1e2s8C9",
          phone_link:"https://wa.me/56950499706",
          image: academia, // Asume que esta es la imagen en la carpeta assets
          
        },
        
      ],
    };
  },
  methods: {
    getImage(image) {
      const uniqueParam = new Date().getTime(); // o un valor único generado de alguna otra manera

    
 
    return require('@/assets/' + image  + `?timestamp=${uniqueParam}`)
  },

  
    submitForm() {
      // Aquí puedes manejar la lógica para enviar el formulario
      // por ejemplo, usando Axios para realizar una solicitud HTTP
      console.log('Currículum enviado:', this.curriculum);
    },

    cardHover(index, hoverState) {
      this.cards[index].hover = hoverState;
    },

  },
  mounted() {
    // Añadimos la propiedad hover a cada card dinámicamente
    this.cards = this.cards.map(card => ({ ...card, hover: false }));
  },
};
</script>
  
<style>
.orange-background {
  background-color: #ff9800 !important;
  /* Color naranja */
}

/* Añade transiciones suaves al cambiar de color */
.hover-card {
  transition-duration: 1s
}

.image-grow {
  transition: transform 0.8s ease;
  transform: scale(1.05);
  /* Aumenta ligeramente el tamaño */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}

.v-btn-info-suc {
  /* --v-btn-size: 0.875rem; */
  --v-btn-height: 28px;
  font-size: var(--v-btn-size);
  min-width: 64px;
  /* padding: 0 16px; */
}
</style>