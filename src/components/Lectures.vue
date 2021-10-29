<template>
  <main class="libros">
    <section class="libros__info">
      <h2 class="libros__info-title">Vive una experiencia de lectura increible</h2>
      <h3 class="libros__info-subtitle">
        Encuentra los mejores libros educativos
      </h3>
    </section>

    <section class="libros__carrousel">
      <Carrousel :items="libros" />
    </section>
  </main>
</template>

<script>
import Carrousel from "./Carrousel";

export default {
  name: "Libros",
  components: { Carrousel },
  mounted() {
    this.libros = [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7",
    ];
  },
  data: () => ({
    libros: [],
  }),
};
</script>
<style lang="scss" scoped>
.libros {
  background-color: #242528;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  &__info {
    display: flex;
    margin-top: 2em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-title {
      font-size: 2em;
      font-weight: 800;
    }
    &-subtitle {
      color: grey;
    }
  }
  &__carrousel {
    height: 12em;
    width: 60%;
    margin-top: 2em;
  }
}
</style>

