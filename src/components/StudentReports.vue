<template>
  <div class="w-1/2 mx-auto mt-10 bg-white rounded shadow-md">
    <form
      v-if="!loading"
      class="py-10 flex flex-col justify-center items-center border rounded"
      @submit="download"
    >
      <label for="school-select">Select a school to download the report:</label>
      <select
        id="school-select"
        required
        v-model="selectedSchoolId"
        class="w-3/5 mt-2 px-2 py-1 border-2 border-gray-400 rounded"
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
        class="mt-8 px-3 py-1 btn"
        :disabled="selectedSchoolId === null"
      >
        Download Report
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { Client, School } from "../services/client";

export default defineComponent({
  name: "StudentReports",
  setup() {
    const schools = ref<School[]>([]);
    const selectedSchoolId = ref<string | null>(null);
    const loading = ref(false);
    const client = new Client();

    onMounted(async () => {
      loading.value = true;
      schools.value = await client.getSchools();
      loading.value = false;
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
      selectedSchoolId,
      loading
    };
  }
});
</script>

<style lang="scss" scoped>
.purple-border {
  @apply border-brand;
}

select:focus {
  @apply border-brand;
  @apply outline-none;
}

.btn {
  @apply border-brand;
  @apply text-brand;
  @apply border-2;
  @apply font-bold;
  @apply rounded;

  &:hover {
    @apply bg-brand;
    @apply text-white;
  }

  &:disabled {
    @apply cursor-not-allowed;
    @apply bg-gray-400;
    @apply border-gray-400;
    @apply text-white;
  }
}
</style>
