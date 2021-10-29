<template>
  <main class="login d-flex">
    <section
      class="login__form d-flex flex-column justify-center align-center mx-auto"
    >
      <img alt="logo" class="logo" src="@/assets/logo.png" />
      <v-form class="my-2">
        <div class="login__form d-flex flex-column justify-center align-center">
          <v-text-field
            @input="refreshValidations"
            v-model="name"
            class="my-2"
            label="Username"
            outlined
          />
          <v-text-field
            @input="refreshValidations"
            v-model="password"
            label="Contraseña"
            outlined
            type="password"
          />
        </div>
      </v-form>
      <v-btn
        @click="handleAuthentication"
        :disabled="!canAuthenticate"
        rounded
        color="primary"
        style="width: 14em"
      >
        Acceder
      </v-btn>
    </section>
    <section class="login__background"></section>
  </main>
</template>

<script>
import authService from "@/services/auth";
import sessionService from "@/services/session";

export default {
  name: "Login",
  beforeMount() {
    this.refreshValidations();
  },
  data() {
    return {
      name: "",
      password: "",
    };
  },
  mounted() {
    this.refreshValidations();
    sessionService.clear();
  },
  methods: {
    handleAuthentication() {
      authService
        .loginCredentials(this.name, this.password)
        .then((userObject) => {
          console.info(userObject);
          //          sessionService.set("user", userObject);
          this.$router.push("/browse");
        })
        .catch((error) => alert(error));
    },
    refreshValidations() {
      this.canAuthenticate = this.name !== "" && this.password !== "";
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 18em;
}

.login {
  height: 100vh;
  &__form {
    flex-basis: 80%;
    @media screen and (min-width: 800px) {
      flex-basis: 30%;
    }
  }
  &__background {
    background-image: url("../assets/login_background.jpg");
    background-position: center;
    background-size: cover;
    flex-basis: 70%;
    display: none;
    transition: transform 2.5s ease-in-out;
    @media screen and (min-width: 800px) {
      display: block;
    }
  }
}
</style>
