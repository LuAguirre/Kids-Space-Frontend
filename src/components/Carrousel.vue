<template>
  <div class="carrousel">
    <carousel-3d :controls-visible="true" :clickable="false">
      <slide v-for="(item, i) in items" :key="i" :index="i">
        <figure>
          <img src="https://picsum.photos/360/270" />
          <figcaption>
            {{item}}
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
};
</script>
<style lang="scss" scoped>
.carrousel {
  min-width: 60%;
}
</style>
