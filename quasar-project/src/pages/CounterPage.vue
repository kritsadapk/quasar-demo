<template>
  <div>
    <q-toggle v-model="store.counter" />
  </div>
</template>

<script lang="ts">
// import { computed } from 'vue';
import { useCounterStore } from 'stores/counter';

export default {
  setup() {
    const store = useCounterStore();

    return {
      // you can return the whole store instance to use it in the template
      store,
    };
  },
};
</script>
