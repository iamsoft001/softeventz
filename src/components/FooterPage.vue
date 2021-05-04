<template>
  <v-row justify="center" no-gutters>
    <v-btn
      v-for="link in links"
      :key="link.title"
      color="white"
      text
      rounded
      class="my-1 hidden-md-and-down"
      :to="link.to"
    >
      {{ link.title }}
    </v-btn>
    <v-col class="py-1 brown darken-4 text-center white--text" cols="12">
      <b
        >Copyright &copy; {{ new Date().getFullYear() }} SoftConceptz. All
        rights reserved.</b
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Home", to: "/" },
      { title: "About Us", to: "/About" },
      { title: "Services", to: "/Services" },
      { title: "Contact Us", to: "/Contact" },
    ],
  }),
};
</script>

<style></style>
