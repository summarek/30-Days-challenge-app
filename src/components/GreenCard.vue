<template>
  <div class="home">
    <div class="card">
      <div class="card-header">
        <h2 class="card-header_title">Click if You have done this task today.</h2>
        <h3 class="card-number">{{counter}}</h3>
      </div>
      <div class="card-body">
        <img width="60px" src="../assets/Ellipse.png" alt="some nice graphic" />
        <img class="card-middleimg" width="100px" src="../assets/okMark.svg" alt="ok mark" />
        <img
          @click="taskDone"
          class="card-middleimg card-hidden"
          width="100px"
          src="../assets/okHoverMark.svg"
          alt="ok mark"
        />
        <img class="card-xMark" width="70px" src="../assets/xMark.svg" alt="x mark" />
        <img
          @click="taskNotDone"
          class="card-xHidden"
          width="70px"
          src="../assets/xHoverMark.svg"
          alt="x mark"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
import { bus } from '../main';

export default {
  name: 'GreenCard',
  //  props: ["counter", "Cards", "saveCards"],
  props: {
    saveCards: { type: Function },
    counter: { type: Number },
    Cards: { type: Array },
  },
  data() {
    return {
      tableRowsColors: [],
    };
  },
  mounted() {
    // this.saveCards();
  },

  methods: {
    taskDone() {
      console.log(this.Cards);

      this.Cards[this.counter - 1].cardColor = 'yellow';
      this.saveCards();
    },
    taskNotDone() {
      this.Cards[this.counter - 1].cardColor = 'red';
      this.saveCards();
      console.log(this.Cards);
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

.card {
  background: linear-gradient(
    124.97deg,
    #328873 1.1%,
    rgba(16, 151, 118, 0.93) 98.95%
  );

  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  width: 300px;
  height: 200px;
  padding: 10px;

  &-header {
    display: flex;
    justify-content: space-between;
    &_title {
      font-weight: normal;
      font-size: 1rem;
      color: #fff;
      line-height: 16px;
      margin: 0;
      max-width: 150px;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    }
  }
  &-number {
    color: #fff;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;
  }
  &-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 80%;
  }
  &-middleimg {
    align-self: center;
    border-radius: 50px;
  }
  &-hidden {
    opacity: 0;
    z-index: 10;
    position: absolute;
    transform: translateX(85px);
    transition: opacity 0.2s ease;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
  &-xMark {
    border-radius: 50px;
  }
  &-xHidden {
    opacity: 0;
    z-index: 10;
    position: absolute;
    transform: translateX(210px);
    transition: opacity 0.2s ease;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
}
</style>
