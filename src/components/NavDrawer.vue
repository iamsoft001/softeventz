<template>
  <div>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon small> mdi-{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  drawer: false,
  name: "NavDrawer",

  data: () => ({
    items: [
      { title: "Home", to: { name: "home" }, icon: "home" },
      { title: "About Us", to: { name: "about" }, icon: "information" },
      { title: "Services", to: { name: "services" }, icon: "poll" },
      { title: "Contact Us", to: { name: "contact" }, icon: "map-marker" },
    ],
  }),
};
</script>
