<template>
  <div class="position-absolute">
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <h3 class="home-text">
                WE
                <vue-typer
                  :text="[
                    'ADD VALUES',
                    'DESIGN',
                    'CREATE IDENTITY',
                    'ARE DEXTEROUS',
                  ]"
                  :repeat="Infinity"
                  :shuffle="true"
                  initial-action="erasing"
                  :pre-type-delay="200"
                  :type-delay="200"
                  :pre-erase-delay="3000"
                  :erase-delay="6000"
                  erase-style="clear"
                  :erase-on-complete="false"
                  caret-animation="blink"
                ></vue-typer>
              </h3>
            </v-col>
          </v-row>

          <div>
            <p class="white--text pt-5">
              We help in adding colours and values to your events through proper
              and adequate planning
            </p>
          </div>

          <div class="pt-3">
            <v-btn dark to="/Contact" color="brown darken-1">
              Get in touch with us
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Typer",
  data: () => ({}),
};
</script>

<style>
.vue-typer .custom.char.typed {
  color: #90caf9;
}
.position-absolute {
  position: absolute;
  top: 0;
  left: 0;
}
.home-text {
  padding-top: 50%;
  color: white;
}
</style>
