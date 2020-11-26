<template>
  <div class="w-3/4 mx-auto mt-10">
    <form
      class="flex flex-col justify-center items-center rounded border border-blue-500"
      @submit.prevent="download"
    >
      <label for="school-select">Select a school:</label>
      <select
        id="school-select"
        required
        v-model="selectedSchool"
        class="mt-2 border border-blue-500 rounded"
      >
        <option value="null" disabled>
          -- Choose a school to download the report for --
        </option>
        <option v-for="school in schools" :key="school">{{ school }}</option>
      </select>
      <button
        type="submit"
        class="my-6 px-3 py-1 border-2 border-blue-500 rounded text-blue-500 hover:text-white hover:bg-blue-500"
      >
        Download Report
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "StudentReports",
  setup() {
    const schools = ref<string[]>([]);

    const selectedSchool = ref<string | null>(null);

    onMounted(() => {
      console.log("Need to fetch some schools");
      schools.value = ["School 1", "School 2", "School 3", "School 4"];
    });
    function download() {
      console.log("Report Downloaded", selectedSchool.value);
    }

    return {
      schools,
      download,
      selectedSchool
    };
  }
});
</script>

<style lang="scss" scoped></style>
