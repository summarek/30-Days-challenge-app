<template>
  <div class="root">
    <div>

      <md-table>
       <md-table-row>
        <md-table-head md-numeric>Day</md-table-head>
        <md-table-head>What did you learn?</md-table-head>
        </md-table-row>
        <!-- <md-table-row v-for="(thing, index) in currentThings" :key="thing" :class="cardsColors[index]">
        <md-table-cell  md-numeric>{{index + 1}}sdsdsdsd</md-table-cell>
        <md-table-cell v-if="cardsColors[index]" md-numeric>{{index + 1}}</md-table-cell>
        <md-table-cell v-if="cardsColors[index]">{{thing || ":(" }}</md-table-cell> -->

      <md-table-row v-for="(card, index) in cardsColors" :key="index" v-if="card" :class="cardsColors[index]">
        <md-table-cell md-numeric>{{index + 1}}</md-table-cell>
        <md-table-cell>{{cardsColors[index] == 'yellow' ? currentThings[index] || "It's empty :c \n write something at home page" : ":(" }}</md-table-cell>
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
      currentThings: [],
      cardsColors: []
    };
  },
  created() {
    
    
    if (localStorage.learnedTasks) {
      this.currentThings = JSON.parse(localStorage.getItem('learnedTasks'));
    }
    if (localStorage.Cards) {
      this.Cards = JSON.parse(localStorage.getItem('Cards'));
    }

    this.Cards.forEach((card, index) => {

      if(card.cardColor != "green"){
        this.cardsColors[index] = card.cardColor;
      }
   
    });

    console.log(this.cardsColors);
    
    bus.$on('leci', (data) => {
      this.currentThings = data;
      console.log(`TO JEST Z STATSÓW ${data}`);
    });

      bus.$on('greenCardAction', (data) => {
      console.log(`TO JEST Z STATSÓW ${data}`);
    });
  },
};
</script>
<style lang="scss">
  .red{
 background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%); 
  font-weight: bold;
    color: rgb(43, 43, 43);

 }
  .yellow{
background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  font-weight: bold;
  color: rgb(43, 43, 43);
  }
</style>
