<template>
  <div>
    <v-container>
      <v-row>
        <div>
          <v-row class="mt-5">
            <h1 class="ml-10 font-weight-black float-left">
              OUR WORKS
            </h1>
            <v-col>
              <p class="pl-16">
                SoftConceptz focuses on beautifying and planning your events; indoors and outdoors, thereby bringing maximum satisfaction to all our clients.Below are our sample works
              </p>
            </v-col>
          </v-row>
        </div>
        <v-col cols="12" sm="12" md="6" lg="4" v-for="(job, index) in jobs" :key="index">
         
            <v-card class="mx-auto" color="grey lighten-4" max-width="600" :href="job.link" target="blank">
              <v-img :aspect-ratio="16 / 9" :src="job.image">
                
              </v-img>
            </v-card>
       
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    jobs: [
      {
        image: "/foodlist.png",
        
      },
      {
        image: "/deco1.jpg",
       
        
      },
      {
        image: "/deco3.jpg",
        
        
      },
      {
        image: "/rice.jpg",
       
    
      },
      {
        image: "/cake.jpg",
       
        
      },
      {
        image: "/cake3.jpg",
        
        
      }
    ],
  }),
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
