<template>
<v-container class="pt-12">
    <v-row class="pt-12">
      <v-col cols="12" class="pt-12" md="1"></v-col>
      <v-col cols="12" class="" md="4" style="background-color: #FFB300; padding: 0px;" >
        <v-img cover  :width="420" style="padding-bottom: 28%;"
  aspect-ratio="1/1" src="@/assets/work.png"  ></v-img>
      </v-col>
      <v-col cols="12 "  class="pt-8" md="6" style="background-color: #FFffff;">

        <v-card-text class="text-justify">
          <span class="text-brown-darken-1"> 
            <h2>¡Únete a nuestro equipo!</h2>
          <p>Estamos buscando personas talentosas y apasionadas para unirse a nuestro equipo.</p>
          <p class="mt-2">Si te sientes motivado por la idea de hacer la diferencia y deseas colaborar
             en un ambiente de trabajo dinámico y enriquecedor,
             esta es tu oportunidad de ser parte de algo grande. ¡Esperamos contar contigo!</p>
          
          <v-form @submit.prevent="submitForm" class="pt-12">
            <v-file-input label="Subir currículum" accept=".pdf, .doc, .docx" v-model="curriculum"></v-file-input>
          </v-form>
          </span>

            </v-card-text>
           
            <v-card-actions>
              <v-spacer></v-spacer>
            <v-btn color="amber-darken-1">Enviar</v-btn>
            </v-card-actions>
      </v-col>
      <v-col cols="12" class="pt-12" md="1"></v-col>
    </v-row>
  </v-container>
 
</template>
<script>
export default {
  name: 'WorkWithUs',

  data() {
    return {
      curriculum: null,
      hover: false,
    }
  },
  methods:{
    submitForm() {
      // Aquí puedes manejar la lógica para enviar el formulario
      // por ejemplo, usando Axios para realizar una solicitud HTTP
      console.log('Currículum enviado:', this.curriculum);
    },

  }
}
</script>