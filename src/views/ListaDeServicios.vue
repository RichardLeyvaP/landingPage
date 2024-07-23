<template>
  <v-container class="mb-12">
    <v-row class="mt-12">
      <v-col cols="12">
        <span class="text-h3 font-weight-black text-uppercase text-amber-darken-1">Nuestros </span>
        <span class="text-h3 font-weight-black text-uppercase text-brown-darken-4">Servicios </span> <br><br>
      </v-col>
    </v-row>
    <v-row>
      <!-- Ejemplo de tarjeta de servicio, repite este bloque para otros servicios -->
      <v-col cols="12" md="4" v-for="service in services" :key="service.name">
        <v-card elevation="10" class="rounded-lg standard-size d-flex flex-column">
          <v-row no-gutters class="flex-grow-1">
            <!-- Columna para el icono con fondo amarillo -->
            <v-col cols="4" class="d-flex justify-center align-center avatar-col">
              <v-avatar size="100" elevation="3" color="grey-lighten-4">
                <v-img :src="'https://api2.simplifies.cl/api/images/' + service.image_service" alt="image"></v-img>
              </v-avatar>
            </v-col>
            <!-- Columna para el texto -->
            <v-col cols="8" class="d-flex flex-column justify-center text-col">
              <div class="pa-4 text-center flex-grow-1">
                <p class="text-subtitle-1 font-weight-bold text-brown-darken-3">{{ service.name }}</p>
                <p class="text-subtitle-2 text-brown-darken-1 text-ellipsis">{{ service.service_comment }}</p>
                <div class="mt-auto">
                  <v-chip size="small" color="orange" class="font-weight-bold mt-2" label>
                    <v-icon icon="mdi-currency-usd" start></v-icon>
                    {{ formatNumber(parseInt(service.price_service)) }}
                  </v-chip>
                  <v-chip size="small" color="orange" class="font-weight-bold ml-4 mt-2" label>
                    <v-icon icon="mdi-clock-time-four-outline" start></v-icon>
                    {{ convertirMinutosAHorasYMinutos(service.duration_service) }}
                  </v-chip>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'ListaDeServicios',
  data: () => ({
    services: [],
  }),

  mounted() {
    this.init()
  },

  methods: {
    formatNumber(value) {
      if (value < 1000) {
        return (Math.round((value + Number.EPSILON) * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
      value = Math.round((value + Number.EPSILON) * 100) / 100;
      let formattedValue = value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return formattedValue;
    },
    convertirMinutosAHorasYMinutos(minutos) {
      var horas = Math.floor(minutos / 60);
      var minutosRestantes = minutos % 60;
      var mensaje = "";
      if (horas > 0) {
        mensaje += horas + " hora";
        if (horas !== 1) {
          mensaje += "s";
        }
      }
      if (minutosRestantes > 0) {
        if (mensaje !== "") {
          mensaje += " y ";
        }
        mensaje += minutosRestantes + " minuto";
        if (minutosRestantes !== 1) {
          mensaje += "s";
        }
      }
      return mensaje;
    },
    init() {
      axios
        .get('https://api2.simplifies.cl/api/service', {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          this.services = response.data.services;
          console.log(this.services)
        });
    },
  }
};
</script>

<style>
.rounded-lg {
  border-radius: 12px;
}

.standard-size {
  width: 100%;
  max-width: 500px;
  height: 140px; /* Ajusta la altura según tus necesidades */
  display: flex;
  flex-direction: column;
}

.avatar-col {
  background-color: #ffb300;
}

.text-col {
  display: flex;
  flex-direction: column;
}

.text-center {
  text-align: center;
}

.pa-4 {
  padding: 4px; /* Puedes ajustar este valor según tus necesidades */
}
.text-multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Número de líneas permitidas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  height: 3em; /* Ajustar según el tamaño de la fuente para permitir dos líneas */
}
@media (max-width: 600px) {
  .standard-size {
    height: 170px; /* Altura en dispositivos móviles */
  }

  .pa-4 {
    padding: 4px; /* Reduce el padding en dispositivos móviles */
  }

  .text-multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Número de líneas permitidas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  height: 3em; /* Ajustar según el tamaño de la fuente para permitir dos líneas */
}
}
</style>
