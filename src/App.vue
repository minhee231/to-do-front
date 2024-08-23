<template>
  <v-app>
    <v-container>
      <router-view />  <!-- 라우터가 렌더링할 컴포넌트가 여기에 표시됩니다. -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>