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
      <v-app-bar app dark color="brown" class="hidden-md-and-up">
        <v-btn
          absolute
          right
          icon
          class="hidden-md-and-up"
          dark
          @click.stop="drawer = !drawer"
          
          ><v-icon>mdi-menu</v-icon></v-btn
        >
        <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      </v-app-bar>
      <main class="">
        <router-view></router-view>
      </main>

      <v-footer color="brown darken-1" dark app >
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
    appTitle:'Soft Eventz',
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
