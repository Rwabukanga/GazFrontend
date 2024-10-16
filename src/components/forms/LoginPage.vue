<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title>
            <h2 class="text-center">Login Form</h2>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field label="Username" v-model="dd.username" :rules="[rules.required]" prepend-icon="mdi-account"
                required></v-text-field>

              <v-text-field label="Password" v-model="dd.password" :rules="[rules.required]" prepend-icon="mdi-lock"
                type="password" required></v-text-field>

              <v-row justify="space-between">
                <v-btn color="primary" type="submit">Log in</v-btn>
                <v-btn text @click="$router.push('/signup')">Sign Up</v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      dd: {
        username: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.dd);
    },
  },
};
</script>

<style scoped>
.v-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  padding: 20px;
}
</style>
