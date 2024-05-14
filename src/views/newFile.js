/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'ListaDeServicios',
data: () => ({
description_length: 60,
services: [ /*
          { name: 'Corte de Cabello', description: 'DescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripción del servicio de corte de cabello................' },
          { name: 'Corte de Cabello', description: 'Descripción del servicio de corte de cabello...' },
          { name: 'Corte de Cabello', description: 'Descripción del servicio de corte de cabello...' },
          { name: 'Corte de Cabello', description: 'Descripción del servicio de corte de cabello...' },
          { name: 'Corte de Cabello', description: 'Descripción del servicio de corte de cabello...' },*/
// Añade más servicios aquí
],
}),
methods: {
getServices() {
this.services = [
{ name: 'Corte de Cabello', description: 'DescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripción del servicio de corte de cabello................' },
{ name: 'Corte de Cabello', description: 'Descripción del servicio de corte de cabello...' },
{ name: 'Corte de Cabello', description: 'Descripción del servicio de corte de cabello...' },
{ name: 'Corte de Cabello', description: 'Descripción del servicio de corte de cabello...' },
{ name: 'Corte de Cabello', description: 'Descripción del servicio de corte de cabello...' },
// Añade más servicios aquí
],
            ;
},
/**
* Trunca un texto a un número específico de caracteres y añade "..." si es más largo.
* @param {string} text - El texto a truncar.
* @param {number} length - La longitud máxima del texto truncado.
* @returns {string} El texto truncado.
*/
truncate(text, length) {
return text.length > length ? text.slice(0, length) + "..." : text;
}
}
});
