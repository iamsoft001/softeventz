<template>
  <div class="admin">
    <v-row>
      <v-col>
        <v-card class="mx-auto pt-16" width="350">
          <v-card-title>
            <h3 class="tex">Login</h3>
          </v-card-title>

          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="form.username"
                label="Username"
                :rules="nameRule"
                prepend-icon="mdi-account-circle"
                required
              />

              <v-text-field
                v-model="form.passwd"
                :rules="passwordRule"
                required
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="mx-auto"
              :disabled="!valid"
              :loading="loading"
              color="#022144"
              @click="login"
            >
              Login</v-btn
            >
          </v-card-actions>

          <marquee>Admin Login Page</marquee>
        </v-card>
      </v-col>
    </v-row>
    <!-- {{ res }} -->
    {{ errorMsg }}
    {{ activeUser }}
  </div>
</template>

<script>
import { apiClient } from "@/services";
import { mapActions, mapState } from "vuex";
export default {
  name: "LoginPage",
  data: () => ({
    showPassword: false,
    valid: true,
    loading: false,
    form: {
      username: "",
      passwd: "",
    },
    // activeUser: null,
    errorMsg: "",
    res: "",
    nameRule: [(v) => !!v || "Name is required"],
    passwordRule: [(v) => !!v || "Password is required"],
  }),
  computed: mapState(["activeUser"]),
  methods: {
    ...mapActions(["setActiveUser"]),
    login() {
      this.loading = true;
      apiClient
        .post("/login", this.form)
        .then((res) => {
          this.res = res;
          if (res.data.id) {
            this.setActiveUser(res.data);
            this.loading = false;
            this.$router.push({ name: "dashboard" });
            // this.activeUser = res.data;
            // this.activeUser = {...res.data};
            // this.activeUser = Object.assign({}, res.data);
          } else {
            this.loading = false;
            this.errorMsg = "Incorrect Username or Password. Try again.";
          }
        })
        .catch((err) => {
          this.loading = false;
          this.errorMsg = err;
        });
    },
  },
};
</script>

<style>
.tex {
  color: rgba(4, 23, 73, 0.87);
  margin-left: 39%;
}
.admin {
  background-color: #6d4c41;
  background-size: cover;
  color: white;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
