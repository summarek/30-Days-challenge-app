<template>
  <div class="root">
    <div>

      <md-table>
       <md-table-row>
        <md-table-head md-numeric>Day</md-table-head>
        <!-- <md-table-head>Time</md-table-head> -->
        <md-table-head>What did you learn?</md-table-head>
      </md-table-row>

      <md-table-row v-for="(thing, index) in currentThings" :key="thing" >

        <md-table-cell v-if="thing" md-numeric>{{index + 1}}</md-table-cell>
        <!-- <md-table-cell v-if="thing">1 hour</md-table-cell> -->
        <md-table-cell v-if="thing">{{thing}}</md-table-cell>

      </md-table-row>
    </md-table>


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
    if (localStorage.learnedTasks) {
      this.currentThings = JSON.parse(localStorage.getItem('learnedTasks'));
    }

    bus.$on('leci', (data) => {
      this.currentThings = data;
      console.log(`TO JEST Z STATSÓW ${data}`);
    });
  },
};
</script>
<style lang="scss">

</style>
