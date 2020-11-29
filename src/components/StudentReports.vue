<template>
  <div class="w-1/2 mx-auto mt-10 bg-white rounded shadow-md">
    <form
      v-if="schools !== null"
      class="flex flex-col justify-center items-center rounded border p-10"
      @submit="download"
    >
      <label for="school-select">Select a school to download the report:</label>
      <select
        id="school-select"
        required
        v-model="selectedSchoolId"
        class="mt-2 px-2 py-1 border-2 border-gray-400 rounded"
      >
        <option :value="null" disabled>
          -- Select a school --
        </option>
        <option v-for="school in schools" :key="school._id" :value="school._id">
          {{ school.name }}
        </option>
      </select>
      <button
        type="submit"
        class="mt-6 px-3 py-1 border-2 rounded purple-border btn font-bold"
      >
        Download Report
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import client, { School } from "../services/client";

export default defineComponent({
  name: "StudentReports",
  setup() {
    const schools = ref<School[]>([]);
    const selectedSchoolId = ref<string | null>(null);

    onMounted(async () => {
      schools.value = await client.getSchools();
    });

    function download(e: Event) {
      e.preventDefault();
      console.log(e);
      if (selectedSchoolId.value !== null) {
        client.downloadStudentsCsvReport(selectedSchoolId.value);
      }
    }

    return {
      schools,
      download,
      selectedSchoolId
    };
  }
});
</script>

<style lang="scss" scoped>
$base-color: #4c55a5;

.purple-background {
  background-color: $base-color;
}

.purple-border {
  border-color: $base-color;
}

select:focus {
  border-color: $base-color;
  @apply outline-none;
}

.btn {
  border-color: $base-color;
  color: $base-color;

  &:hover {
    background-color: $base-color;
    color: white;
  }
}
</style>
