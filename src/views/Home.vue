<template>
  <div class="home">
    <div class="cards">
      <div class="card" v-for="(greenCard, index) in greenCards" :key="index">
        <div class="card-header">
          <h2 class="card-header_title">Click if You have done this task today.</h2>
          <h3 class="card-number">{{index+1}}</h3>
        </div>
        <div class="card-body">
          <img width="60px" src="../assets/Ellipse.png" alt="some nice graphic" />
          <img class="card-middleimg" width="100px" src="../assets/okMark.svg" alt="ok mark" />
          <img width="70px" src="../assets/xMark.svg" alt="x mark" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      greenCards: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
      yellowCards: [],
      redCards: [],
    };
  },
  mounted() {
    // creating card objects
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}
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
  }
  &-number {
    color: #fff;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;
  }
  &-header_title {
    font-weight: normal;
    font-size: 1rem;
    color: #fff;
    line-height: 16px;
    margin: 0;
    max-width: 150px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  }
  &-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 80%;
  }
  &-middleimg {
    align-self: center;
  }
}
</style>
