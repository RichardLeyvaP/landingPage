<template>

<v-parallax
    height="350"
    src="@/assets/b6.png"
  >

           <v-container>
            <v-row><v-col cols="12" class="ml-12" md="2"> </v-col>
                
                <v-col cols="12" class="ml-12"  elevation="12" md="6">
          <v-responsive>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/b4t7SK1YK88?si=b4t7SK1YK88"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </v-responsive>
            
        
                </v-col>

                <v-col cols="12" class="ml-12" md="3"> </v-col>

            </v-row>
     
        </v-container>
       
        
</v-parallax>

    
</template>
<script>
export default {
    name: 'MediaHome'
}
</script>
<style>
/* Estilo para el fondo amarillo */
.yellow-background {
    background-color: #FFEB3B;
    /* Amarillo de la paleta de colores de Material Design */
}
</style>