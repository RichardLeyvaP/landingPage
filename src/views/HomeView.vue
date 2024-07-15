<template>
  <v-row>
  <v-col cols="12">
    <v-carousel
    class="mobile-carousel"
    style="background-color: black;"
    cycle
    height="100%"
    progress="amber-darken-1"
    @input="handleUpdate"
    show-arrows="hover"
    hide-delimiter-background
  >
    <!-- Diapositiva 1 -->
    <v-carousel-item transition="scale-transition" origin="center">
      <v-img
        class="carousel-img"
        transition="scale-transition"
        src="@/assets/b1.png"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      ></v-img>
    </v-carousel-item>
  
    <!-- Diapositiva 2 -->
    <v-carousel-item transition="scale-transition">
      <v-img
        class="carousel-img"
        src="@/assets/b2.png"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      ></v-img>
    </v-carousel-item>
  
    <!-- Diapositiva 3 -->
    <v-carousel-item transition="scale-transition">
      <v-img
        class="carousel-img"
        src="@/assets/b3.png"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
  </v-col>
</v-row>

  <!---->

  <BranchesHome class="mt-0"></BranchesHome><br>
  <CallToAction></CallToAction><br>

    <AboutUsHome></AboutUsHome>
  <MediaHome></MediaHome><br>
</template>
<script>


import BranchesHome from "../components/BranchesHome.vue"
import AboutUsHome from "../components/AboutUsHome.vue"
import CallToAction from "../components/CallToAction.vue"
import MediaHome from "../components/MediaHome.vue"
import axios from "axios";
export default {
  components: {
    BranchesHome,
    AboutUsHome,
    CallToAction,
    MediaHome,

  },
  data() {
    return {
      progress: 0,
      curriculum: null,
      hover: false,
      cards: [],


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
@media (max-width: 600px) {
  .mobile-carousel {
    margin-top: 0px; /* Ajusta este valor según tus necesidades */
  }
}
</style>