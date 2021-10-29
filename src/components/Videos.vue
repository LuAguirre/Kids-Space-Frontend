<template>
  <main class="videos">
    <section class="videos__info">
      <h2 class="videos__info-title">Vive una experiencia audiovisual</h2>
      <h3 class="videos__info-subtitle">
        Encuentra los mejores videos educativos
      </h3>
    </section>

    <section class="videos__carrousel">
      <Carrousel :items="videos" />
    </section>
  </main>
</template>

<script>
import Carrousel from "./Carrousel";

export default {
  name: "Videos",
  components: { Carrousel },
  mounted() {
    this.videos = [
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
    videos: [],
  }),
};
</script>
<style lang="scss" scoped>
.videos {
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
