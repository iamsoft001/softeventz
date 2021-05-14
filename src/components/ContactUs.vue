<template>
  <div class="contact">
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row class="mx-auto pt-15">
      <v-col cols="12" sm="12" md="6" lg="6" order="3" order-sm="1">
        <v-sheet class="pa-5" color="orange lighten-4">
          <h2>Contact Us:</h2>
          <v-btn
            icon
            value="whatsapp"
            href="https://wa.me/+2348167785376"
            target="_blank"
          >
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>

          <v-btn
            icon
            value="facebook"
            href="https://web.facebook.com/adeniyi.kehinde.963/"
            target="_blank"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>

          <v-btn
            icon
            value="twitter"
            href="https://twitter.com/kennytosoft/"
            target="_blank"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <div>
            <span class="d-block" title="SoftConceptz">SoftConceptz</span>
            <span class="d-block" title="Adress"
              >Top Floor,Christore Building.</span
            >
            <span class="d-block" title="Location"
              >Ado_Ekiti. Ekiti State. Nigeria</span
            >
            <span class="d-block">iamsoftworld@gmail.com</span>
            <span title="SoftConceptz, contact us line."
              >Phone: +2348167785376, +2347042347621</span
            >
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="6" order="2">
        <v-card elevation="6" color="orange lighten-4">
          <v-container>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  label="Name"
                  v-model="form.fullname"
                  required
                  :rules="nameRules"
                  :counter="30"
                  prepend-icon="mdi-account-circle"
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="form.email"
                  :rules="emailRules"
                  required
                  prepend-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                  label="Phone Number"
                  v-model="form.phoneno"
                  :counter="11"
                  :rules="phoneRules"
                  hint="Enter only numbers"
                  prepend-icon="mdi-cellphone"
                  required
                ></v-text-field>
                <v-text-field
                  label="Subject"
                  v-model="form.subject"
                  required
                  prepend-icon="mdi-comment-text"
                ></v-text-field>
                <v-textarea
                  rows="2"
                  label="Message"
                  v-model="form.msg"
                  required
                  prepend-icon="mdi-comment-text"
                ></v-textarea>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn to="/" dark>Cancel</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :disabled="!valid"
                    color="#6d4c41"
                    @click="submitForm"
                    :loading="loading"
                    >Submit</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { apiClient } from "@/services";
export default {
  name: "Contact",
  data() {
    return {
      form: this.initializeForm(),
      snackbar: false,
      loading: false,
      text: "Message submitted successfully",
      valid: true,
      firstname: "",

      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less",
      ],
      phonenumber: "",
      phoneRules: [(v) => (v && v.length <= 11) || "Number must be less"],

      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      apiClient.post("/contact", this.form).then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.ok) {
          this.loading = false;
          this.snackbar = true;
          this.form = this.initializeForm();
        }
      });
    },
    initializeForm: () => ({
      id: "",
      fullname: "",
      email: "",
      phoneno: "",
      subject: "",
      msg: "",
    }),
  },
};
</script>

<style>
.contact {
  color: aqua;
  background-color: #6d4c41;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
