<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <!-- Cliente llamado y módulo -->
        <v-card>
          <v-card-title>Llamado:</v-card-title>
          <v-card-text>
            <p v-if="clienteLlamado">Cliente: {{ clienteLlamado }}</p>
            <p v-if="moduloCliente">Módulo: {{ moduloCliente }}</p>
            <p v-if="!clienteLlamado && !moduloCliente">No hay cliente llamado</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <!-- Cola de clientes -->
        <v-card>
          <v-card-title>Cola:</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(cliente, index) in cola" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ cliente }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center mt-5">
        <!-- Botones para llamar cliente y agregar a cola -->
        <v-btn @click="llamarCliente" color="primary">Llamar Cliente</v-btn>
        <v-btn @click="agregarClienteACola" color="success">Agregar Cliente a Cola</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      clienteLlamado: null,
      moduloCliente: null,
      cola: [], // Array para almacenar la cola de clientes
    };
  },
  methods: {
    llamarCliente() {
      // Simulamos llamada a cliente eliminando el primero de la cola
      if (this.cola.length > 0) {
        this.clienteLlamado = this.cola.shift();
        // Simulamos asignación de módulo al azar
        this.moduloCliente = Math.floor(Math.random() * 10) + 1;
      }
    },
    agregarClienteACola() {
      // Simulamos agregado de cliente a cola con un nombre aleatorio
      const nuevoCliente = `Cliente ${this.cola.length + 1}`;
      this.cola.push(nuevoCliente);
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.mt-5 {
  margin-top: 1.25rem;
}
</style>
