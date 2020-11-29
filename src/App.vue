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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgba(110, 231, 183, 1);
}
</style>
