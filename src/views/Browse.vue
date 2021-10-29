<template>
  <div>
    <v-app-bar dark shrink-on-scroll src="@/assets/login_background.jpg">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="title">Kids Space</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
          <v-tabs-slider color="secondary"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item.name">
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in items" :key="item.name">
            <v-list-item-title @click="tab = index">{{
              item.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation bar ends -->
    <main class="">
      <v-tabs-items v-model="tab" class="component">
        <v-tab-item class="component" v-for="item in items" :key="item.name">
          <component :is="item.component" class="component" />
        </v-tab-item>
      </v-tabs-items>
    </main>
  </div>
</template>

<script>
import Home from "@/components/Home";

export default {
  name: "Browse",
  components: { Home },
  data: () => ({
    drawer: false,
    tab: null,
    items: [
      {name: "Inicio", component: () => import("@/components/Home.vue"),},
      {name: "Videos", component: () => import("@/components/Videos.vue"),},
      {name: "Lecturas", component: () => import("@/components/Lectures.vue"),},
      {name: "Nosotros", component: () => import("@/components/About.vue"),},
    ],
  }),
};
</script>
<style lang="scss" scoped>
.title {
  font-weight: 2em !important;
  font-size: 2em !important;
  margin-bottom: 1em;
}
.component {
  height: 75vh;
}
</style>
