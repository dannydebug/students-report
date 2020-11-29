<template>
  <div>
    <StudentReports />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StudentReports from "./components/StudentReports.vue";

export default defineComponent({
  name: "App",
  components: { StudentReports }
});
</script>

<style lang="scss">
#app {
  @apply text-copy;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  @apply bg-brand;
}
</style>
