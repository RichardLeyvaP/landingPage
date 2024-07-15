<template>

  
  <v-container class="pt-12" fluid>
    <v-row>
      <v-col cols="12" md="3" v-for="(card, index) in cards" style="padding: 4px;" :key="index">
        <v-card class="mx-auto my-4 hover-card" elevation="6">
          <v-parallax height="250" :src="'https://api2.simplifies.cl/api/images/' + card.image" class="white--text align-end"></v-parallax>

          <v-list-item class="pt-4" two-line>
            <v-list-item-content>
              <v-list-item-subtitle class="text-overline">
                <v-icon color="deep-orange lighten-2" size="small">{{ card.icon }}</v-icon> {{ card.subtitle }}
              </v-list-item-subtitle>
              <v-list-item-title class="text-h4 font-weight-bold pt-2 text-brown-darken-4">
                {{ card.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-text class="font-weight-medium text-h6">
            <v-btn class="v-btn-info-suc multiline-btn" :href="card.location_link" prepend-icon="mdi-map-marker" variant="plain">
              <span class="multiline">{{ card.location }}</span>
            </v-btn>
            <v-btn class="v-btn-info-suc" :href="card.phone_link" prepend-icon="mdi-cellphone" variant="plain">
              {{ card.phone }}
            </v-btn>
          </v-card-text>

          <v-divider class="mx-4 mb-1"></v-divider>
          <!-- Acciones de la Tarjeta -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="card.type === 'Branch'" :href="getReservationLink(card.id, card.business_id)" color="brown-darken-4" class="text-h6" text>Reservar</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

/*import paloma from '@/assets/paloma.jpg';
import bosquemar from '@/assets/bosquemar.jpg';
import suc_new from '@/assets/suc_new.jpg';
import academia from '@/assets/chapa.jpg';*/
import axios from "axios";

export default {
  name: 'BranchesView',
  data() {
    return {
      curriculum: null,
      hover: false,
      cards: [],
    };
  },
  methods: {
    getImage(image) {
      const uniqueParam = new Date().getTime(); // o un valor único generado de alguna otra manera

    
 
    return require('@/assets/' + image  + `?timestamp=${uniqueParam}`)
  },

  getReservationLink(cardId, business_id) {
      return `https://reservasbh.simplifies.cl/?id=${cardId}&business=${business_id}`;
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
    axios
        .get('https://api2.simplifies.cl/api/business-branch-academy')
        .then((response) => {          
          //console.log(this.response)
          this.cards = response.data.business;
          console.log(this.cards);
          //console.log(this.student)
        });
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

.multiline {
  white-space: normal;
  word-wrap: break-word;
}

.multiline-btn {
  white-space: normal;
  word-wrap: break-word;
}
@media (max-width: 600px) {
  .v-btn-info-suc {
    font-size: 0.75rem;
    --v-btn-height: 24px;
  }
  .text-h6 {
    font-size: 1rem;
  }
  .v-card-text {
    display: flex;
    flex-direction: column;
  }
  .multiline-btn {
    max-width: 100%;
    text-overflow: ellipsis;
  }
}
</style>