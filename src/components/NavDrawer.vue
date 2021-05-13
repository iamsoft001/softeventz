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
      { title: "Home", to: "/", icon: "home" },
      { title: "About Us", to: "/About", icon: "information" },
      { title: "Services", to: "/Services", icon: "poll" },
      { title: "Contact Us", to: "/Contact", icon: "map-marker" },
    ],
  }),
};
</script>
