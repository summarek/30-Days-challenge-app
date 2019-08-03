<template>
  <div class="root">
    <div>
      <h1>twoje statystyki:</h1>
      <ul></ul>
    </div>
  </div>
</template>

<script>
import { bus } from '../main';

export default {
  name: 'Stats1',
  props: ['hoursOfLearning'],
  data() {
    return {
      learnedThingsTab: ['hm'],
      currentThings: null,
    };
  },
  mounted() {
    bus.$on('leci', (data) => {
      this.currentThings = data;

      console.log(`TO JEST Z STATSÓW ${data}`);
    });
  },
};
</script>
<style lang="scss" scoped>
</style>
