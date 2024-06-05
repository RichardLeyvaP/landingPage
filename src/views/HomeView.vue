<template>
  <v-row>
  <v-col cols="12">
    <v-carousel
      class="mt-4"
      style="background-color: black;"
      cycle
      height="100vh"
      progress="amber-darken-1"
      @input="handleUpdate"
      show-arrows="hover"
      hide-delimiter-background
    >
      <!-- Diapositiva 1 -->
      <v-carousel-item transition="scale-transition" origin="center">
        <v-img
          transition="scale-transition"
          src="@/assets/b1.png"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="100%"
          width="100%"
          cover
        ></v-img>
      </v-carousel-item>

      <!-- Diapositiva 2 -->
      <v-carousel-item transition="scale-transition">
        <v-img
          src="@/assets/b2.png"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="100%"
          width="100%"
          cover
        ></v-img>
      </v-carousel-item>

      <!-- Diapositiva 3 -->
      <v-carousel-item transition="scale-transition">
        <v-img
          src="@/assets/b3.png"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="100%"
          width="100%"
          cover
        ></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-col>
</v-row>

  <!---->

  <br><br><br>

  <BranchesHome></BranchesHome><br><br><br>

  <CallToAction></CallToAction>

    <AboutUsHome></AboutUsHome>
<br><br><br><br><br>
  <MediaHome></MediaHome><br>



  <WorkWithUs></WorkWithUs><br><br><br>
</template>
<script>


import BranchesHome from "../components/BranchesHome.vue"
import AboutUsHome from "../components/AboutUsHome.vue"
import CallToAction from "../components/CallToAction.vue"
import WorkWithUs from "../components/CallToAction.vue"
import MediaHome from "../components/MediaHome.vue"
import axios from "axios";
export default {
  components: {
    BranchesHome,
    AboutUsHome,
    CallToAction,
    WorkWithUs,
    MediaHome,

  },
  data() {
    return {
      progress: 0,
      curriculum: null,
      hover: false,
      cards: [
        /*{
          icon: "mdi-school",
          title: 'Mall La Paloma',
          subtitle: 'Sucursal',
          phone: "+56 9 5765 1503",
          location: 'Volcán Puntiagudo 100',
          location_link: "https://maps.app.goo.gl/hu86KEcrUAFpr9b37",
          phone_link: "https://wa.me/56957651503",

          image: 'salon_sillas.jpg', // Asume que esta es la imagen en la carpeta assets
        },
        {
          icon: "mdi-school",
          title: 'Bosque Mar',
          subtitle: 'Sucursal',
          phone: "+56 9 5765 1503",
          location: 'Volcán Puntiagudo 100',
          location_link: "https://maps.app.goo.gl/hu86KEcrUAFpr9b37",
          phone_link: "https://wa.me/56957651503",
          image: 'salon_sillas.jpg', // Asume que esta es la imagen en la carpeta assets

        },
        {
          icon: "mdi-school",
          title: 'Sucursal 3',
          subtitle: 'Sucursal',
          phone: "+56 9 5765 1503",
          location: 'Volcán Puntiagudo 100',
          location_link: "https://maps.app.goo.gl/hu86KEcrUAFpr9b37",
          phone_link: "https://wa.me/56957651503",
          image: 'salon_sillas.jpg', // Asume que esta es la imagen en la carpeta assets

        },
        {
          icon: "mdi-school",
          title: 'Academia Hernández',
          subtitle: 'Academia',
          phone: "+56 9 5765 1503",
          location: 'Volcán Puntiagudo 100',
          location_link: "https://maps.app.goo.gl/hu86KEcrUAFpr9b37",
          phone_link: "https://wa.me/56957651503",
          image: 'salon_sillas.jpg', // Asume que esta es la imagen en la carpeta assets

        },*/

      ],


    };
  },
  methods: {
   

    handleUpdate(newIndex) {
      alert("Ítem activo actualizado a:", newIndex);
      // Aquí puedes agregar cualquier lógica adicional que necesites ejecutar
      // cuando el ítem activo del carrusel cambia.
    },


    animateProgress() {
      const interval = setInterval(() => {
        this.progress += 1;
        if (this.progress >= 100) clearInterval(interval);
      }, 50); // Ajusta este valor si es necesario
    },

    cardHover(index, hoverState) {
      this.cards[index].hover = hoverState;
    },

    scrollInto() {
      alert("entra")
      alert(this.$route)
      alert("entra")
      const section = document.querySelector(`#${this.$route.hash.substring(1)}`);
      console.log("esta es la section")
      console.log(section)
      section.scrollIntoView({
        behavior: 'smooth'
      });
    },
    scrollToSection() {
      alert("entra")
      alert(this.$route.hash.substring(1))
      if (this.$route.hash) {
       
        const element = document.getElementById(this.$route.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

  },
  watch: {
    '$route' (to, from) {
      // Revisa si la navegación es en la misma página para evitar bucles infinitos
      if (to.path === from.path) {
       // this.scrollToSection();
      }
    }
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
    this.animateProgress();   
    


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