<template>
  <div class="w-1/2 mx-auto mt-10 bg-white rounded">
    <form
      class="flex flex-col justify-center items-center rounded border p-10"
      @submit.prevent="download"
    >
      <label for="school-select">Select a school:</label>
      <select
        id="school-select"
        required
        v-model="selectedSchool"
        class="mt-2 border border-green-400 rounded"
      >
        <option value="null" disabled>
          -- Choose a school to download the report for --
        </option>
        <option v-for="school in schools" :key="school">{{ school }}</option>
      </select>
      <button
        type="submit"
        class="mt-6 px-3 py-1 border-2 rounded border-green-400 text-green-500 font-bold hover:text-white hover:bg-green-400"
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
