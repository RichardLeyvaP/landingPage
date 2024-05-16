<template>
  <v-container class="mb-12">
    <v-card class="mt-12 mb-4" elevation="6">
      <v-row>
        <v-col cols="2" class="d-flex" style="background-color: #ffffff;">
          <v-avatar class="mt-8 ml-8 mb-8 " size="160" elevation="3" color="grey-lighten-4">
            <v-img src="" alt="image"></v-img>
          </v-avatar>
        </v-col>

        <v-col cols="6" class="pt-10 pl-8" style="background-color: #ffffff;">

          <v-list class="bg-transparent">
            <p class="text-h4">
              {{ studend.name }}
            </p>
            <p class="mt-2">
              {{ studend.email }}
            </p>
            <p class="mt-2">
              {{ studend.phone }}
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
                <v-chip color="red">
                  No Habilitado
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

                {{ cantPay }}

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
              <v-card-title class="d-flex align-center pe-2">

                
    <span class="text-subtitle-1"><v-icon icon="mdi-book" class="text-blue"></v-icon> &nbsp; Listado de Cursos Matriculados</span>

      <v-spacer></v-spacer>
                <v-spacer></v-spacer>

                <v-text-field v-model="search" density="compact" label="Buscar" prepend-inner-icon="mdi-magnify"
                  variant="solo-filled" flat hide-details single-line></v-text-field>
              </v-card-title>

              <v-divider></v-divider>
              <v-data-table v-model:search="search" :items="cursos" :headers="headers">

              </v-data-table>
            </v-card>
          </v-window-item>

          <v-window-item value="two">
            <v-card flat>
              <v-card-title class="d-flex align-center pe-2">

                <span class="text-subtitle-1"><v-icon icon="mdi-tag" class="text-amber"></v-icon> &nbsp; Listado de Productos asignados</span>

                <v-spacer></v-spacer>

                <v-text-field v-model="searchProduct" density="compact" label="Buscar" prepend-inner-icon="mdi-magnify"
                  variant="solo-filled" flat hide-details single-line></v-text-field>
              </v-card-title>

              <v-divider></v-divider>
              <v-data-table v-model:search="search" :items="productos" :headers="headersProducts">

              </v-data-table>
            </v-card>
          </v-window-item>

          <v-window-item value="three">
            <v-card flat>
              <v-card-title class="d-flex align-center pe-2">

                <span class="text-subtitle-1"><v-icon icon="mdi-cash" class="text-green"></v-icon> &nbsp; Listado de Pagos Realizados</span>

                <v-spacer></v-spacer>

                <v-text-field v-model="searchProduct" density="compact" label="Buscar" prepend-inner-icon="mdi-magnify"
                  variant="solo-filled" flat hide-details single-line></v-text-field>
              </v-card-title>

              <v-divider></v-divider>
              <v-data-table v-model:search="search" :items="pagos" :headers="headersPay">

              </v-data-table>
            </v-card>
          </v-window-item>
          
        </v-window>
      </v-card-text>
    </v-card>




  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'StudentView',
  data: () => ({
    description_length: 70,
    selectedtab: 'one',
    studend: { name: "Deylert Pérez Rivera", email: "deylert89@gmail.com", phone: "+56920258489" },
    cantCourses: 2,
    cantPay: "52.000",
    statePay: "Retrasado",
    enabledStudend: false,

    products: [
        {
            "id": 31,
            "product_exit": 18,
            "name": "Cocacola (Almacén:Av. los notros)",
            "image_product": "products/21.png"
        },
        {
            "id": 39,
            "product_exit": 10,
            "name": "Wax orange (Almacén:Av. los notros)",
            "image_product": "products/30.png"
        },
        {
            "id": 40,
            "product_exit": 2,
            "name": "Black mask (Almacén:Av. los notros)",
            "image_product": "products/25.png"
        },
        {
            "id": 41,
            "product_exit": 6,
            "name": "POWDER (Almacén:Av. los notros)",
            "image_product": "products/26.png"
        },
        {
            "id": 42,
            "product_exit": 10,
            "name": "Creative wax (Almacén:Av. los notros)",
            "image_product": "products/27.png"
        },
        {
            "id": 43,
            "product_exit": 10,
            "name": "Hair espray (Almacén:Av. los notros)",
            "image_product": "products/28.png"
        },
        {
            "id": 44,
            "product_exit": 10,
            "name": "Wax quicksilver (Almacén:Av. los notros)",
            "image_product": "products/29.png"
  }],

    search: '',
    searchProduct: '',
    searchPay: '',

    headers: [
      { title: 'Imagen', key: 'imagen', sortable: false },
      { title: 'Nombre', key: 'nombre' },
      { title: 'Precio de Matrícula', key: 'precioMatricula' },
      { title: 'Precio Total', key: 'precioTotal' },
      { title: 'Fecha de Inicio', key: 'fechaInicio' },
      { title: 'Descripción', key: 'descripcion' },
      { title: 'Cantidad de Horas', key: 'cantidadHoras' },
    ],

    headersProducts: [
      { title: 'Imagen', key: 'imagen', sortable: false },
      { title: 'Nombre', key: 'nombre' },
      { title: 'Precio', key: 'precio' },
    ],

    headersPay: [
      { title: 'Curso', key: 'curso' },
      { title: 'Fecha', key: 'fecha', sortable: false },
      { title: 'Detalle', key: 'detalle' }
    ],

    tab: null,
    cursos: [
      {
        imagen: "url_de_la_imagen_1",
        nombre: "Curso 1",
        precioMatricula: "$50.000 CLP",
        precioTotal: "$250.000 CLP",
        fechaInicio: "01/06/2024",
        descripcion: "Descripción del curso 1",
        cantidadHoras: "20 horas",

      },
      {
        nombre: "Curso 2",
        precioMatricula: "$75.000 CLP",
        precioTotal: "$300.000 CLP",
        fechaInicio: "15/06/2024",
        descripcion: "Descripción del curso 2",
        cantidadHoras: "25 horas",
        imagen: "url_de_la_imagen_2"
      },
      {
        nombre: "Curso 3",
        precioMatricula: "$60.000 CLP",
        precioTotal: "$350.000 CLP",
        fechaInicio: "01/07/2024",
        descripcion: "Descripción del curso 3",
        cantidadHoras: "18 horas",
        imagen: "url_de_la_imagen_3"
      }
    ],
    pagos: [
      {
        fecha: "01/05/2024",
        detalle: "Comprobante de transferencia 1",
        curso: "Curso 1" // Aquí agregamos la propiedad 'curso' que indica a qué curso pertenece el pago
      },
      {
        fecha: "05/05/2024",
        detalle: "Comprobante de transferencia 2",
        curso: "Curso 2"
      },
      {
        fecha: "10/05/2024",
        detalle: "Comprobante de transferencia 3",
        curso: "Curso 3"
      }
    ],
      productos: [
      {
        nombre: "Producto 1",
        precio: "$10.000 CLP",
        imagen: "url_de_la_imagen_1"
      },
      {
        nombre: "Producto 2",
        precio: "$15.000 CLP",
        imagen: "url_de_la_imagen_2"
      },
      {
        nombre: "Producto 3",
        precio: "$20.000 CLP",
        imagen: "url_de_la_imagen_3"
      }
    ],
    //, Agrega más productos según sea necesario



    services: [
    ],
  }),

  mounted() {
    //this.getServices()
   // alert('Hola');
    //console.log(this.$route.query.code);
    //alert(this.$route.query.code);
    
    this.init(this.$route.query.code)
  },

  methods: {

    init(code) {
      alert(code);
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