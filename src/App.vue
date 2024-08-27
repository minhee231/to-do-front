<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <router-view/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',

  components: {
    RouterView,
},
}
</script>