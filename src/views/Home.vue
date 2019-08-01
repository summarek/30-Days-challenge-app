<template>
  <div class="home">
    <md-button class="md-raised md-primary" @click="resetEverything">RESET CARE!!!</md-button>
    <div class="grid-home">
      <div v-for="(Card, index) in Cards" :key="index" class="cards">
        <GreenCard
          :saveCards="saveCards"
          v-if="Card.cardColor == `green`"
          :Cards="Cards"
          :counter="index+1"
        ></GreenCard>
        <YellowCard
          :method="saveCards"
          v-else-if="Card.cardColor == `yellow`"
          :learnedThings="learnedThings"
          :counter="index+1"
          :hoursOfLearning="hoursOfLearning"
        ></YellowCard>
        <RedCard
          :method="saveCards"
          v-else-if="Card.cardColor == `red`"
          :counter="index+1"
          :hoursOfLearning="hoursOfLearning"
        ></RedCard>
      </div>
    </div>
    <Stats1 :hoursOfLearning="hoursOfLearning"></Stats1>
  </div>
</template>

<script>
import GreenCard from '@/components/GreenCard.vue';
import YellowCard from '@/components/YellowCard.vue';
import RedCard from '@/components/RedCard.vue';
import Stats1 from '@/components/Stats1.vue';

export default {
  name: 'home',
  components: {
    GreenCard,
    YellowCard,
    RedCard,
    Stats1,
  },
  data() {
    return {
      Cards: [
        { cardColor: 'green', index: 0 },
        { cardColor: 'green', index: 1 },
        { cardColor: 'green', index: 2 },
        { cardColor: 'green', index: 3 },
        { cardColor: 'green', index: 4 },
        { cardColor: 'green', index: 5 },
        { cardColor: 'green', index: 6 },
        { cardColor: 'green', index: 7 },
        { cardColor: 'green', index: 8 },
        { cardColor: 'green', index: 9 },
        { cardColor: 'green', index: 10 },
        { cardColor: 'green', index: 11 },
        { cardColor: 'green', index: 12 },
        { cardColor: 'green', index: 13 },
        { cardColor: 'green', index: 14 },
        { cardColor: 'green', index: 15 },
        { cardColor: 'green', index: 16 },
        { cardColor: 'green', index: 17 },
        { cardColor: 'green', index: 18 },
        { cardColor: 'green', index: 19 },
        { cardColor: 'green', index: 20 },
        { cardColor: 'green', index: 21 },
        { cardColor: 'green', index: 22 },
        { cardColor: 'green', index: 23 },
        { cardColor: 'green', index: 24 },
        { cardColor: 'green', index: 25 },
        { cardColor: 'green', index: 26 },
        { cardColor: 'green', index: 27 },
        { cardColor: 'green', index: 28 },
        { cardColor: 'green', index: 29 },
      ],
      hoursOfLearning: [],
      learnedThings: [],
    };
  },
  mounted() {
    if (localStorage.Cards) {
      this.Cards = JSON.parse(localStorage.getItem('Cards') || '[]');
    }
  },
  methods: {
    saveCards() {
      localStorage.setItem('Cards', JSON.stringify(this.Cards));
    },
    resetEverything() {
      console.log('RESETUJE');
      this.Cards = [
        { cardColor: 'green', index: 1 },
        { cardColor: 'green', index: 0 },
        { cardColor: 'green', index: 2 },
        { cardColor: 'green', index: 3 },
        { cardColor: 'green', index: 4 },
        { cardColor: 'green', index: 5 },
        { cardColor: 'green', index: 6 },
        { cardColor: 'green', index: 7 },
        { cardColor: 'green', index: 8 },
        { cardColor: 'green', index: 9 },
        { cardColor: 'green', index: 10 },
        { cardColor: 'green', index: 11 },
        { cardColor: 'green', index: 12 },
        { cardColor: 'green', index: 13 },
        { cardColor: 'green', index: 14 },
        { cardColor: 'green', index: 15 },
        { cardColor: 'green', index: 16 },
        { cardColor: 'green', index: 17 },
        { cardColor: 'green', index: 18 },
        { cardColor: 'green', index: 19 },
        { cardColor: 'green', index: 20 },
        { cardColor: 'green', index: 21 },
        { cardColor: 'green', index: 22 },
        { cardColor: 'green', index: 23 },
        { cardColor: 'green', index: 24 },
        { cardColor: 'green', index: 25 },
        { cardColor: 'green', index: 26 },
        { cardColor: 'green', index: 27 },
        { cardColor: 'green', index: 28 },
        { cardColor: 'green', index: 29 },
      ];
      console.log(this.hoursOfLearning);
      this.hoursOfLearning = [];
      this.learnedThings = [];
      this.saveCards();
    },
  },
};
</script>
<style lang="scss" scoped>
.grid-home {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}
</style>
