<template>
  <div class="carrousel">
    <carousel-3d :controls-visible="true" :clickable="true">
   <!-- <slide v-for="(item, i) in items" :key="i" :index="i">
        <figure>
          <img src="https://picsum.photos/360/270" />
          <figcaption>
            {{item}}
          </figcaption>
        </figure>
      </slide> -->
     <slide :index="0">
       <figure>
       <a href=""><img src="../assets/img/Principito.png"/></a>
       </figure>
       </slide>
       <slide :index="1">
       <figure>
      <a href=""> <img src="../assets/img/alicia.png"/> </a>
       </figure>
       </slide>
       <slide :index="2">
       <figure>
       <a href=""><img src="../assets/img/monstruodecolores.png"/></a>
       </figure>
       </slide>
       <slide :index="3">
       <figure>
       <a href=""><img src="../assets/img/aquesabelaluna.png"/></a>
       </figure>
       </slide>
       <slide :index="4">
       <figure>
       <a href=""><img src="../assets/img/tomsawyer.png"/></a>
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
