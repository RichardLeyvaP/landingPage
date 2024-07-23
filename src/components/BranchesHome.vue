<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" v-for="(card, index) in cards" :key="index">
        <v-card class="mx-auto my-2" elevation="6" tile>
          <v-img height="200" width="100%" :src="'https://api2.simplifies.cl/api/images/' + card.image" cover></v-img>

          <v-list-item class="pt-2" two-line>
            <v-list-item-content>
              <v-list-item-subtitle class="text-overline">
                <v-icon color="deep-orange lighten-2" size="small">{{ card.icon }}</v-icon> {{ card.subtitle }}
              </v-list-item-subtitle>
              <v-list-item-title class="text-h5 font-weight-bold pt-2 text-brown-darken-4" style="white-space: pre-line;">
                {{ card.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        
            <v-row class="button-row font-weight-medium text-h6">
              <v-col cols="12" class="button-col">
                <v-btn class="v-btn-info-suc multiline-btn" :href="card.location_link" prepend-icon="mdi-map-marker" variant="plain">
                  <span class="multiline">{{ card.location }}</span>
                </v-btn>
              </v-col>
              <v-col cols="12" class="button-col">
                <v-btn class="v-btn-info-suc" :href="card.phone_link" prepend-icon="mdi-cellphone" variant="plain">
                  {{ card.phone }}
                </v-btn>
              </v-col>
            </v-row>
   

          <v-divider class="mx-1 mb-1"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="card.type === 'Branch'" :href="getReservationLink(card.id, card.business_id)" color="brown-darken-4" class="text-h6 text-center" text>Reservar</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'BranchesHome',
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    getReservationLink(cardId, business_id) {
      return `https://reservasbh.simplifies.cl/?id=${cardId}&business=${business_id}`;
    },
  },
  mounted() {
    axios
      .get('https://api2.simplifies.cl/api/business-branch-academy')
      .then((response) => {          
        this.cards = response.data.business;
      });
  },
};
</script>

<style>
.text-overline {
  white-space: nowrap;
}

.button-row {
  row-gap: 8px;
}

.button-col {
  margin-bottom: 0;
}

.text-h5 {
  white-space: pre-line; /* Permite saltos de línea */
}

@media (max-width: 600px) {
  .text-h6 {
    font-size: 1rem;
  }
}

@media (min-width: 1280px) {
  .v-card {
    max-width: 350px; /* Ajusta este valor según lo que funcione mejor para tu diseño */
  }
}
/* Ajuste para la imagen */

</style>
