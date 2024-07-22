<template>

  <v-container>
    <v-row class="pt-12 pb-12">
      <v-snackbar v-model="showAlert"
      :timeout="4000"
      color="green"
      rounded="pill"
    >
    
      Se ha registrado tu matrícula. Pronto nuestro equipo se comunicará contigo.
    </v-snackbar>
      <v-col cols="12">
        <span class="text-h3 font-weight-black text-uppercase text-amber-darken-1">Nuestros </span>
                    <span class="text-h3 font-weight-black text-uppercase text-brown-darken-4">Cursos </span> <br><br>
      </v-col>

      <v-col cols="12" md="4" v-for="(course, index) in courseData" :key="index">
        <v-card class="mx-auto"  elevation="12">

        

          <v-img class="align-end text-white" height="250"   :src="'https://api2.simplifies.cl/api/images/' + course.course_image" cover>
            <v-card-title class="text-amber">
              <v-chip variant="elevated" color="warning" class="text-white text">
               <strong> {{ course.name }}</strong>
    </v-chip></v-card-title>
          </v-img>

          

        <v-divider></v-divider>
          <v-card-text class="ml-0 pl-0">
            <v-list class="ml-0 pl-0">
              <div class="d-flex justify-space-between">    

              <v-list-item density="compact">
                  <v-list-item-title>Inscripción</v-list-item-title>
                </v-list-item>
                <v-list-item density="compact">
                  <v-list-item-title class="text-green-darken-2 font-weight-bold">$ {{ course.reservation_price }}</v-list-item-title>
                </v-list-item>
              </div>
              <div class="d-flex justify-space-between">            
                <v-list-item density="compact">
                  <v-list-item-title>Precio</v-list-item-title>
                </v-list-item>
                <v-list-item density="compact">
                  <v-list-item-title class="text-green-darken-1  font-weight-bold">$ {{ course.price }}</v-list-item-title>
                </v-list-item>
              </div>
              <div class="d-flex justify-space-between">
                <v-list-item density="compact">
                  <v-list-item-title>Duración</v-list-item-title>
                </v-list-item>
                <v-list-item density="compact">
                  <v-list-item-title class="text-orange font-weight-bold">{{ course.duration }} Horas</v-list-item-title>
                </v-list-item>
              </div>

              <div class="d-flex justify-space-between">
                <v-list-item density="compact">
                  <v-list-item-title>Matrícula Total</v-list-item-title>
                </v-list-item>
                <v-list-item density="compact">
                  <v-list-item-title class="text-orange font-weight-bold">{{ course.total_enrollment }}</v-list-item-title>
                </v-list-item>
              </div>

              <div class="d-flex justify-space-between">
                <v-list-item density="compact">
                  <v-list-item-title>Cupos Disponibles</v-list-item-title>
                </v-list-item>
                <v-list-item density="compact">
                  <v-list-item-title class="text-red font-weight-bold" >{{ course.available_slots }}</v-list-item-title>
                </v-list-item>
              </div>

            </v-list>

          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="orange" @click="abrirDialogoMatricula(course)">Matricularse</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>


  <v-dialog v-model="dialogVisible" transition="dialog-bottom-transition" persistent max-width="800px">
    <v-card>

      <v-toolbar color="amber-darken-1">


        <v-toolbar-title class="text-subtitle-1">{{ courseSelected }}</v-toolbar-title>
      </v-toolbar>
      <v-divider class="mt-3"></v-divider>
      <v-card-text>
        <v-form v-model="valid" enctype="multipart/form-data">
        <v-row>
    <v-col cols="12" md="12">
      <v-text-field
        v-model="form.name"
        :rules="nameRules"
        label="Nombre(s) y Apellidos"
        required>
      </v-text-field>
    </v-col>
    <!--<v-col cols="12" md="6">
      <v-text-field
        v-model="form.surname"
        :rules="surnameRules"
        label="Primer Apellido"
        required>
      </v-text-field>
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.second_surname"
        :rules="secondSurnameRules"
        label="Segundo Apellido"
        required>
      </v-text-field>
    </v-col>-->
    <v-col cols="12" md="12">
      <v-text-field
        v-model="form.email"
        :rules="emailRules"
        label="Correo electrónico"
        required
        type="email">
      </v-text-field>
    </v-col>
    <v-col cols="12" md="12">
      <v-text-field
        v-model="form.phone"
        :rules="mobileRules"
        label="Teléfono"
        required>
      </v-text-field>
    </v-col>
    <v-col cols="12" md="12">
      <v-file-input
        clearable
        v-model="file"
        ref="fileInput"
        label="Adjuntar comprobante de transferencia"
        density="compact"
        name="file"
        accept=".png, .jpg, .jpeg"
        @change="onFileSelected"
        :rules="fileRules">
      </v-file-input>
      <img v-if="imgedit" :src="imgedit" height="150" width="150">
   
    </v-col>

  </v-row>
       
      
       </v-form>
     
      </v-card-text>
     
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="clear">
          <v-icon left>mdi-close-circle</v-icon> <!-- Icono de cancelar -->
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="enviarInformacion">
          <v-icon left>mdi-send</v-icon> <!-- Icono de enviar -->
          Enviar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  
</template>

<script>
/*
import academy_1 from '@/assets/academy_1.jpg';
import academy_2 from '@/assets/academy_2.jpg';
*/
import axios from "axios";
export default {
  data() {
    return {
    showAlert:false,

      form: {
        course_id:"",
        name: '',
        surname: '',
        second_surname: '',
        phone: '',
        email: '',
        student_image: '',
      },
      file: null,

      courseSelected: "",
      course_id:"",
      imgMiniatura: '',
      dialogVisible: false,
      courseData: [],
      nameRules: [
      v => !!v || 'El nombre es requerido',
    ],
    surnameRules: [
      v => !!v || 'El apellido es requerido',
    ],
    secondSurnameRules: [
      v => !!v || 'El segundo apellido es requerido',
    ],
    emailRules: [
      v => !!v || 'El correo electrónico es requerido',
      v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido',
    ],
    mobileRules: [
      v => !!v || 'El número de móvil es requerido',
      v => /^\+569\d{8}$/.test(v) || 'Formato de número móvil inválido. Ejemplo: +56912345678'
    ],
    fileRules: [
      v => !!v || 'El comprobante de transferencia es requerido',
    ],
     
    };

  },
  computed: {
    imgedit() {
      return this.imgMiniatura;
    },},
  mounted() {
   this.init();
  },
  methods: {

    onFileSelected(event) {
      let file = event.target.files[0];
      this.form.course_image = file;
      console.log("esta es la imagen");
      console.log(this.form.course_image);
      this.cargarImage(file);
    },
    cargarImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.imgMiniatura = e.target.result;
      }
      reader.readAsDataURL(file);
    },
    init() {
      axios
        .get('https://api2.simplifies.cl/api/course')
        .then((response) => {
          this.courseData = response.data.courses;
          console.log("estos son los cursos")
          console.log(this.results)
        });
    },

    abrirDialogoMatricula(course) {
      this.courseSelected = "Formulario de Matrícula del curso " + course.name
      this.form.course_id=course.id
      this.dialogVisible = true;
      return course
    },

    enviarInformacion() {
      // Implementa la lógica para enviar la información
      this.dialogVisible = false;
      console.log("esto se envia")
      console.log(this.form)
      console.log(this.form.course_image);

      let formData = new FormData();
      formData.append('file', this.file); 

      for (let key in this.form) {
         formData.append(key, this.form[key]);
       } 

       console.log(formData)


      axios
        .post('https://api2.simplifies.cl/api/course-student-landing', formData)
        .then(() => {
          this.$nextTick(() => {
            this.editedStudent = Object.assign({}, this.defaultStudent)
          })
          this.showAlert=true;
          this.dialogAddStudent = false;
          this.clear()
        })
    },

    clear()
    {
      this.file=null
     this.dialogVisible = false
      this.form.student_image = "";
         this.form.course_id = "";
         this.form.name = "";
         this.form.surname = "";
         this.form.second_surname = "";
         this.form.phone = "";
         this.form.email = "";
         this.imgMiniatura ="";
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
};
</script>

<style>


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
