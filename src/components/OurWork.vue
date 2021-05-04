<template>
  <div>
    <v-container>
      <v-row>
        <div>
          <v-row class="mt-5 mx-auto">
            <h1 class="ml-10 font-weight-black float-left">What We Do</h1>
            <v-col>
              <p class="pl-16">
                We are an Events Management company that helps in getting you
                the desired value and taste for your events
              </p>
            </v-col>
          </v-row>
        </div>

        <v-col cols="12" sm="12" md="6" lg="4" v-for="(work, index) in works" :key="index">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="orange darken-3" max-width="600">
              <v-img :aspect-ratio="16 / 9" :src="work.image">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-3 display-3 white--text"
                    style="height: 100%"
                  >
                    <p class="my-auto mx-auto">
                      {{ work.title }}
                    </p>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative">
                <div class="font-weight-light white--text title mb-2">
                  {{ work.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    works: [
            {
        image: "/cake2.png",
        title: "SoftCake",
        description:
          " We bake yummy cakes to attract more patronage.",
      },
      {
        image: "/food.jpg",
        title: "SoftFood",
        description:
          " Our Foods are delicious and nice for your consumption.",
      },
            {
        image: "/cake4.jpg",
        title: "SoftCake",
        description:
          " We bake yummy cakes to attract more patronage.",
      },
      {
        image: "/ofada.jpg",
        title: "SoftFood",
        description:
          " Our Foods are delicious and nice for your consumption.",
      },
            {
        image: "/cake.jpg",
        title: "SoftCake",
        description:
          " We bake yummy cakes to attract more patronage.",
      },
      {
        image: "/rice.jpg",
        title: "SoftFood",
        description:
          " Our Foods are delicious and nice for your consumption.",
      },
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
