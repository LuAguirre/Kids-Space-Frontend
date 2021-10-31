<template>
  <div class="carrousel">
    <carousel-3d :controls-visible="true" :clickable="true">
      <slide v-for="(item, i) in items" :key="i" :index="i">
        <figure>
          <a :href="item.uri + item.id"><img :src="getImage(item.imageUrl)"/></a>
          <figcaption>
            {{ item.uri }}
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
export default {
  name: "Carrousel",
  props: {
    items: {
      required: true,
    },
  },
  data() {
    return {
      model: 0,
    };
  },
  methods: {
    getImage(path) {
      return require(`../assets/${path}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.carrousel {
  min-width: 60%;
}
</style>
