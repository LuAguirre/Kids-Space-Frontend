<template>
  <div class="home">
    <section class="home__image">
      <img class="home__image-image" src="@/assets/logo-image.png" alt="Logo Image">
    </section>
    <section class="home__data">
      <div class="home__data-container">
        <h1 class="home__data-title">Un espacio para aprender</h1>
        <h3 class="home__data-subtitle">EL MEJOR CONTENIDO</h3>
        <p class="home__data-information">
          Encuentra de todo tipo de contenido educativo y divertido, porque
          siempre hay tiempo para aprender.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1100px) {
    flex-direction: row;
  }

  &__image,
  &__data {
    display: flex;
    flex-basis: 50%;
    width: 100%;
    height:  60vh;
    align-items: center;
    justify-content: center;
  }

  &__image {
    display: none;
    @media screen and (min-width: 1100px) {
      display: flex;
    }
    &-image {
      max-height: 30em;
      max-width: 30em;
    }
  }

  &__data {

    &-container {
      width: 40em;
    }

    &-title {
      font-weight: 2em;
      font-size: 2.5em;
      letter-spacing: 0.05em;
      margin-bottom: 0.2em;
    }
    &-subtitle {
      color: #358c9b;
      font-size: 1.6em;
      font-weight: 500;
      letter-spacing: 0.55em;
      margin-bottom: 0.8em;
    }
    &-information {
      font-size: 1.4em;
      color: gray;
    }
  }
}
</style>
