<template>
<v-snackbar class="mt-12" location="right top" :timeout="sb_timeout" :color="sb_type"
       elevation="24"  :multi-line="true"  vertical v-model="snackbar">
       <v-row>
         <v-col md="2">
           <v-avatar :icon="sb_icon" color="sb_type" size="40"></v-avatar>
         </v-col>
         <v-col md="10">
           <h4>{{ sb_title }}</h4>
           {{ sb_message }}

         </v-col>
      </v-row>
     </v-snackbar>
  
  <v-container class="pt-12">
    <v-row>
      <v-col cols="12" md="3" v-for="(card, index) in cards" style="padding: 4px;" :key="index">
        <v-card class="mx-auto my-2" elevation="6" tile>
          <v-img height="200" width="100%" :src="'https://api2.simplifies.cl/api/images/' + card.image" cover></v-img>
          <v-list-item class="pt-2" two-line>
            <v-list-item-content>
              <v-list-item-subtitle class="text-overline">
                <v-icon color="deep-orange lighten-2" size="small">{{ card.icon }}</v-icon> {{ card.subtitle }}
              </v-list-item-subtitle>
              <v-list-item-title class="text-h5 font-weight-bold pt-2 text-brown-darken-4">
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

          <v-divider class="mx-4 mb-1"></v-divider>
          <!-- Acciones de la Tarjeta -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="card.type === 'Branch'" :href="getReservationLink(card.id, card.business_id)" color="brown-darken-4" class="text-h6" text>Reservar</v-btn>
            <!-- Botón para compartir el enlace -->
  <v-btn 
    v-if="card.type === 'Branch'" 
    @click="shareLink(card.id, card.business_id)"
    class="text-h6 text-center" 
    icon
  >
  <v-icon left size="25">mdi-share-variant</v-icon>
  </v-btn>
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
      snackbar: false,
   sb_type: '',
   sb_message: '',
   sb_timeout: 2000,
   sb_title:'',
   sb_icon:'',
    };
  },
  methods: {
    getImage(image) {
      const uniqueParam = new Date().getTime(); // o un valor único generado de alguna otra manera

    
 
    return require('@/assets/' + image  + `?timestamp=${uniqueParam}`)
  },
  showAlert(sb_type,sb_message, sb_timeout)
   {    
     this.sb_type= sb_type

     if(sb_type=="success")
     {
       this.sb_title='Éxito'
       this.sb_icon='mdi-check-circle'
     }
     
     if(sb_type=="error")
     {
       this.sb_title='Error'
       this.sb_icon='mdi-check-circle'
     }

     if(sb_type=="warning")
     {
       this.sb_title='Advertencia'
       this.sb_icon='mdi-alert-circle'
     }      

     this.sb_message= sb_message
     this.sb_timeout= sb_timeout
     this.snackbar= true
   },
   getReservationLink(cardId, business_id) {
      return `https://reservasbh.simplifies.cl/?id=${cardId}&business=${business_id}`;
    },
   shareLink(cardId, business_id) {
    const link = this.getReservationLink(cardId, business_id);
    if (navigator.share) {
      navigator.share({
        title: 'Reservación',
        text: 'Mira este enlace para hacer una reservación:',
        url: link,
      }).then(() => {
        console.log('Enlace compartido');
      }).catch((error) => {
        //console.error('Error al compartir el enlace:', error);
        this.showAlert("error",'Error al compartir el enlace:', error, 3000);
      });
    } else {
      this.copyToClipboard(link);
      this.showAlert("success","El enlace ha sido copiado. Comparte el enlace manualmente.", 3000);
      //alert('El enlace ha sido copiado al portapapeles. Comparte el enlace manualmente.');
    }
  },
  copyToClipboard(link) {
    navigator.clipboard.writeText(link).then(() => {
      this.showAlert("success","El enlace ha sido copiado. Comparte el enlace manualmente.", 3000);
      //console.log('Enlace copiado al portapapeles');
    }).catch(err => {
      this.showAlert("error",'Error al compartir el enlace:', err, 3000);
      //console.error('Error al copiar el enlace: ', err);
    });
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
.button-row {
  row-gap: 1px; /* Ajusta el espacio entre filas aquí */
}
.button-col {
  margin-bottom: 1px; /* Ajusta el margen inferior aquí */
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
@media (min-width: 1280px) {
  .v-card {
    max-width: 350px; /* Ajusta este valor según lo que funcione mejor para tu diseño */
  }
}
</style>