<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container class="mb-12">
    <v-card class="mt-12 mb-4" elevation="6">
      <v-row>
        <v-col cols="2" class="d-flex" style="background-color: #ffffff;">
          <v-avatar class="mt-8 ml-8 mb-8 " size="160" elevation="3" color="grey-lighten-4">
            <v-img :src="studentImageUrl" alt="image"></v-img>
          </v-avatar>
        </v-col>

        <v-col cols="6" class="pt-10 pl-8" style="background-color: #ffffff;">

          <v-list class="bg-transparent">
            <p class="text-h4">
              {{ student.name }}
            </p>
            <p class="mt-2">
              {{ student.email }}
            </p>
            <p class="mt-2">
              {{ student.phone }}
            </p>
          </v-list>
        </v-col>
        <v-divider vertical class="mt-10 mb-10"></v-divider>
        <v-col cols="4" class="mt-8 " style="background-color: #ffffff;">


          <p>
            <v-row>
              <v-col cols="12" md="6">
                <strong> Habilitado</strong>
              </v-col>
              <v-col cols="12" md="6">
                <v-chip :color="habilitado === 'Habilitado' ? 'green' : 'red'">
                  {{ habilitado }}
                </v-chip>
              </v-col>
            </v-row>

          </p>
          <p>
            <v-row>
              <v-col cols="12" md="6">
                <strong> Cantidad de Cursos</strong>
              </v-col>
              <v-col cols="12" md="6">

                {{ cantCourses }}

              </v-col>
            </v-row>

          </p>
          <p class="mt-2">
            <v-row>
              <v-col cols="12" md="6">
                <strong> Estado de los Pagos</strong>
              </v-col>
              <v-col cols="12" md="6">

                {{ statePay }}

              </v-col>
            </v-row>

          </p>
          <p class="mt-2">

            <v-row>
              <v-col cols="12" md="6">
                <strong> Monto a Pagar</strong>
              </v-col>
              <v-col cols="12" md="6">

                {{ formatNumber(cantPay) }}

              </v-col>
            </v-row>
          </p>

        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-2 mb-6" elevation="6">


      <v-tabs v-model="selectedtab">
        <v-tab value="one" prepend-icon="mdi-book">Mis Cursos</v-tab>
        <v-tab value="two" prepend-icon="mdi-tag">Mis Productos</v-tab>
        <v-tab value="three" prepend-icon="mdi-cash">Mis Pagos</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="selectedtab">
          <v-window-item value="one">
            <v-card flat>
              <v-card-title class="d-flex align-center pe-2 flex-wrap">
                
    <span class="text-subtitle-1 d-flex align-center"><v-icon icon="mdi-book" class="text-blue"></v-icon> &nbsp; Listado de Cursos Matriculados</span>

      <v-spacer></v-spacer>
                <v-spacer></v-spacer>

                <v-text-field v-model="search" density="compact" label="Buscar" prepend-inner-icon="mdi-magnify"
                  variant="solo-filled" flat hide-details single-line class="search-field"></v-text-field>
              </v-card-title>

              <v-divider></v-divider>
              <v-data-table v-model:search="search" :items="cursos" :headers="headers" class="mobile-friendly-table" :items-per-page-text="'Elementos por páginas'" no-results-text="No hay datos disponibles" no-data-text="No hay datos disponibles">
                <template v-slot:item.course_image="{ item }">

                  <v-avatar class="mr-5" elevation="3" color="grey-lighten-4">
                    <v-img :src="'https://api2.simplifies.cl/api/images/'+item.course_image" alt="image"></v-img>
                  </v-avatar>
                  </template>
                  <template v-slot:item.price ="{ item }">
                         {{ formatNumber(parseInt(item.price))}}
                                    </template>
                                    <template v-slot:item.reservation_price ="{ item }">
                         {{ formatNumber(parseInt(item.reservation_price))}}
                                    </template>
              </v-data-table>
            </v-card>
          </v-window-item>

          <v-window-item value="two">
            <v-card flat>
              <v-card-title class="d-flex align-center pe-2 flex-wrap">

                <span class="text-subtitle-1 d-flex align-center"><v-icon icon="mdi-tag" class="text-amber"></v-icon> &nbsp; Listado de Productos asignados</span>

                <v-spacer></v-spacer>

                <v-text-field v-model="searchProduct" density="compact" label="Buscar" prepend-inner-icon="mdi-magnify"
                  variant="solo-filled" flat hide-details single-line class="search-field"></v-text-field>
              </v-card-title>

              <v-divider></v-divider>
              <v-data-table v-model:search="searchProduct" :items="productos" :headers="headersProducts" :items-per-page-text="'Elementos por páginas'" no-results-text="No hay datos disponibles" no-data-text="No hay datos disponibles" class="mobile-friendly-table">
                <template v-slot:item.image_product="{ item }">

              <v-avatar class="mr-5" elevation="3" color="grey-lighten-4">
                <v-img :src="'https://api2.simplifies.cl/api/images/'+item.image_product" alt="image"></v-img>
              </v-avatar>
              </template>
              <template v-slot:item.price ="{ item }">
                         {{ formatNumber(parseInt(item.price))}}
                                    </template>
              </v-data-table>
            </v-card>
          </v-window-item>

          <v-window-item value="three">
            <v-card flat>
              <v-card-title class="d-flex align-center pe-2 flex-wrap">

                <span class="text-subtitle-1 d-flex align-center"><v-icon icon="mdi-cash" class="text-green"></v-icon> &nbsp; Listado de Pagos Realizados</span>

                <v-spacer></v-spacer>

                <v-text-field v-model="searchPay" density="compact" label="Buscar" prepend-inner-icon="mdi-magnify"
                  variant="solo-filled" flat hide-details single-line class="search-field"></v-text-field>
              </v-card-title>

              <v-divider></v-divider>
              <v-data-table v-model:search="searchPay" :items="pagos" :headers="headersPay" :items-per-page-text="'Elementos por páginas'" no-results-text="No hay datos disponibles" no-data-text="No hay datos disponibles" class="mobile-friendly-table">
                <template v-slot:item.details="{ item }">
            <!-- Verifica si image_url cumple las condiciones -->
            <!--<v-icon color="green" v-if="item.image_url && item.image_url !== 'image/default.png'" @click="openModal(item.image_url)">
              mdi-eye
            </v-icon>-->
              <v-btn density="comfortable" icon="mdi-eye" color="green" v-if="item.details && item.details !== 'image/default.png'" @click="openModal(item.details)" variant="tonal"
                  elevation="1" class="mr-1 mt-1 mb-1" title="Ver detalles"></v-btn>
            </template>
              </v-data-table>
            </v-card>
          </v-window-item>
          
        </v-window>
      </v-card-text>
    </v-card>



    <v-dialog v-model="dialogPhoto" persistent max-width="600px">
        <v-card>
              <v-toolbar color="#F18254">
                <span class="text-subtitle-2 ml-4"> Detalle del pago</span> <v-spacer></v-spacer>
                <v-btn  @click="dialogPhoto = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
              </v-toolbar>
        
          <v-card-text>
            <v-img :src="selectedImageUrl" aspect-ratio="1.5"></v-img>
          </v-card-text>
        </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'StudentView',
  data: () => ({    
    baseUrl: 'https://api2.simplifies.cl/api/images/',
    description_length: 70,
    selectedtab: 'one',
    dialogPhoto: false,
    selectedImageUrl: '',
    //studend: { name: "Deylert Pérez Rivera", email: "deylert89@gmail.com", phone: "+56920258489" },
    cantCourses: 0,
    habilitado: '',
    cantPay: 0,
    statePay: '',
    enabledStudend: false,
    student: [],
    cursos: [],
    productos: [],
    pagos: [],
    search: '',
    searchProduct: '',
    searchPay: '',

    headers: [
      { title: 'Imagen', key: 'course_image', sortable: false },
      { title: 'Nombre', key: 'name' },
      { title: 'Precio de Matrícula', key: 'reservation_price' },
      { title: 'Precio Total', key: 'price' },
      { title: 'Fecha de Inicio', key: 'startDate' },
      { title: 'Descripción', key: 'description' },
      { title: 'Cantidad de Horas', key: 'duration' },
    ],

    headersProducts: [
      { title: 'Imagen', key: 'image_product', sortable: false },
      { title: 'Nombre', key: 'name' },
      { title: 'Curso', key: 'course' },
      { title: 'Precio', key: 'price' },
    ],

    headersPay: [
      { title: 'Curso', key: 'name' },
      { title: 'Fecha', key: 'data', sortable: false },
      { title: 'Detalle', key: 'details' }
    ],

    tab: null,
    services: [
    ],
  }),
  computed: {
    studentImageUrl() {
      return `https://api2.simplifies.cl/api/images/${this.student.student_image}`;
    }
  },

  mounted() {
    //this.getServices()
   // alert('Hola');
    //console.log(this.$route.query.code);
    //alert(this.$route.query.code);
    
    this.init(this.$route.query.code)
  },

  methods: {
    formatNumber(value) {
      // Si el valor es menor que 1000, devuelve el valor original sin formato
  if (value < 1000) {
    return value;
  }

  // Primero, redondea el valor a dos decimales
  value = Math.round((value + Number.EPSILON) * 100) / 100;

  // Separa la parte entera de la parte decimal
  let parts = value.toString().split(".");
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? "." + parts[1] : "";

  // Agrega los separadores de miles
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Combina la parte entera y la parte decimal
  return integerPart + decimalPart;
        },
    openModal(imageUrl) {
      
      var img = new Image();
      img.src = 'https://api2.simplifies.cl/api/images/' + imageUrl;
      img.onload = () => {
      this.selectedImageUrl = 'https://api2.simplifies.cl/api/images/' + imageUrl; 
      };
      img.onerror = () => {
        this.selectedImageUrl = '';
      };
     // alert(this.selectedImageUrl)// Establece la imagen seleccionada
      this.dialogPhoto = true; // Abre el modal
    },
    init(code) {
      //alert(code);
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
        //https://api2.simplifies.cl
        //https://api2.simplifies.cl
        /*let request = {
            code: code
          };*/
        axios
        .get('https://api2.simplifies.cl/api/student-code',{
                    params: {
                      code: code
                    }
                })
        .then((response) => {          
          //console.log(this.response)
          this.student = response.data.student;
          this.cursos = response.data.courses;
          this.productos = response.data.products;
          this.pagos = response.data.pagos;
          this.cantCourses = this.cursos.length;
          this.habilitado = response.data.habilitado;
          this.cantPay = response.data.payMount;
          this.statePay = response.data.status;
          //console.log(this.cursos.length());
          //console.log(this.student)
        });
    },


    truncate(text) {
      return text.length > this.description_length ? text.slice(0, this.description_length) + "..." : text;
    }
  }
};
</script>
<style>
@media (max-width: 600px) {
  .search-field {
    width: 100%;
  }
  .mobile-friendly-table .v-data-table__wrapper {
    overflow-x: auto;
  }
}
</style>