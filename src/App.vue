<template>
  <div>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        :app="mobile"
        class="hidden-md-and-up"
        color="brown darken-1"
        dark
        right
      >
        <v-row justify="end" class="pr-9 mt-2 mb-1">
          <v-btn icon @click="drawer = false" text
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-row>
        <nav-drawer />
      </v-navigation-drawer>
      <v-app-bar
        app
        dark
        flat
        :color="$route.name == 'home' ? 'transparent' : 'brown darken-1'"
      >
        <v-btn
          absolute
          right
          icon
          class="hidden-md-and-up"
          dark
          @click.stop="drawer = !drawer"
          ><v-icon>mdi-menu</v-icon></v-btn
        >
        <v-row>
          <v-col>
            <h2>
              <router-link to="/" class="text-decoration-none white--text"
                >Soft Eventz</router-link
              >
            </h2>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>

      <v-footer color="brown darken-1" dark>
        <footer-page />
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import FooterPage from "@/components/FooterPage.vue";
import NavDrawer from "@/components/NavDrawer.vue";
export default {
  name: "App",
  data: () => ({
    drawer: false,
  }),
  components: { FooterPage, NavDrawer },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  watch: {
    mobile(newValue) {
      !newValue ? (this.drawer = false) : "";
    },
  },
};
</script>

<style></style>
