import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes de las vistas
import HomeView from '../views/HomeView.vue';
import BranchesView from '../views/BranchesView.vue';
import ListaDeServicios from '../views/ListaDeServicios.vue';
import ListaDeCursos from '../views/ListaDeCursos.vue';
//import LoginPage from '../components/LoginPage.vue';
import AboutUsView from '../views/AboutUsView.vue';
import StudentView from '@/views/StudentView.vue';
import DisplayView from '@/views/DisplayView.vue';

// Define las rutas
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/display',
    name: 'display',
    component: DisplayView,
  },
  
  {
    path: '/student',
    name: 'student',
    component: StudentView,
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ListaDeServicios,
  },
  {
    path: '/sobre-nosotros',
    name: 'sobre-nosotros',
    component: AboutUsView,
  },
  {
    path: '/sucursales',
    name: 'sucursales',
    component: BranchesView,
  },
  
  {
    path: '/cursos',
    name: 'cursos',
    component: ListaDeCursos,
  },
  // Aquí puedes agregar más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Verifica si la ruta tiene una posición guardada (por ejemplo, al usar los botones de adelante/atras del navegador)
    if (savedPosition) {
      return savedPosition;
    } else {
      // En cualquier otro caso, desplaza la vista al inicio de la página
      return { top: 0 };
    }
  },
});

export default router;
