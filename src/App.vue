<template>
  <div>
    <StudentsReport />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StudentsReport from "./components/StudentsReport.vue";

export default defineComponent({
  name: "App",
  components: { StudentsReport }
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
