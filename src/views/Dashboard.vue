<template>
  <div class="dashboard pt-16">
    <v-data-table
      :headers="headers"
      :items="feedback"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { apiClient } from "@/services";
export default {
  name: "database",
  data() {
    return {
      headers: [
        { text: "S/N", value: "id" },
        { text: "Name", value: "fullname" },
        { text: "E-mail", value: "email" },
        { text: "Phone Number", value: "phoneno" },
        { text: "Subject", value: "subject" },
        { text: "Message", value: "msg" },
      ],
      feedback: [],
    };
  },
  computed: {
    ...mapState(["activeUser"]),
  },

  created() {
    apiClient
      .get("/contact?u=2")
      .then((res) => {
        if (Array.isArray(res.data)) {
          this.feedback = res.data;
        } else {
          this.errMsg = res.data;
        }
      })
      .catch((err) => (this.errMsg = err.message));
  },
};
</script>
<style>
.dashboard {
  background-color: #6d4c41;
  background-size: cover;
  color: white;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
