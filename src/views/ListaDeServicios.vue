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

        <v-card elevation="10">
          <v-row no-gutters>
            <!-- Columna para el icono con fondo amarillo -->
            <v-col cols="4" class="d-flex justify-center align-center" style="background-color: #ffb300;">
              <v-avatar size="100" elevation="3" color="grey-lighten-4">
                <v-img :src="'https://api2.simplifies.cl/api/images/' + service.image_service" alt="image"></v-img>
              </v-avatar>
            </v-col>

            <!-- Columna para el texto -->
            <v-col cols="8">
              <div class="pa-4">
                <p class="text-justify text-subtitle-1 font-weight-bold text-brown-darken-3">{{ service.name }}</p>
                <p class="text-justify text-subtitle-2 text-brown-darken-1">{{ truncate(service.service_comment) }}</p>
               
                <v-chip size="small" color="orange" class="font-weight-bold mt-2" label>
                  <v-icon icon="mdi-currency-usd" start></v-icon>
                  {{ formatNumber(parseInt(service.price_service)) }}
                </v-chip>
                <v-chip size="small" color="orange" class="font-weight-bold ml-4 mt-2" label>
                  <v-icon icon="mdi-clock-time-four-outline" start></v-icon>
                  {{ convertirMinutosAHorasYMinutos(service.duration_service) }}
                </v-chip>
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
    description_length: 70,
    services: [
    ],
  }),

  mounted() {
    //this.getServices()
    this.init()
  },

  methods: {
    formatNumber(value) {
      // Si el valor es menor que 1000, devuelve el valor original con dos decimales
      if (value < 1000) {
        return (Math.round((value + Number.EPSILON) * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }

      // Primero, redondea el valor a dos decimales
      value = Math.round((value + Number.EPSILON) * 100) / 100;

      // Convierte el valor a cadena con formato de número local (en-US)
      let formattedValue = value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      return formattedValue;
    },
    convertirMinutosAHorasYMinutos(minutos) {

//console.log("estos son los minutos")
//console.log(minutos)
// Calcular las horas
var horas = Math.floor(minutos / 60);
// Calcular los minutos restantes después de convertir a horas
var minutosRestantes = minutos % 60;

// Construir el mensaje de salida
var mensaje = "";
if (horas > 0) {
  mensaje += horas + " hora";
  if (horas !== 1) {
    mensaje += "s"; // plural si hay más de una hora
  }
}
if (minutosRestantes > 0) {
  if (mensaje !== "") {
    mensaje += " y ";
  }
  mensaje += minutosRestantes + " minuto";
  if (minutosRestantes !== 1) {
    mensaje += "s"; // plural si hay más de un minuto
  }
}
return mensaje;
},
    init() {
      axios
        .get('https://api2.simplifies.cl/api/service', {
          headers: {
            'Content-Type': 'application/json',
            // Cualquier otro header que necesites
          }
        })
        .then((response) => {
          this.services = response.data.services;
          console.log(this.services)
        });
    },
  

    truncate(text) {
      return text.length > this.description_length ? text.slice(0, this.description_length) + "..." : text;
    }
  }
};
</script>