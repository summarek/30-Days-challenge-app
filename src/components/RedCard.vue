<template>
  <div class="root">
    <div class="card">
      <div class="card-header">
        <h2 class="card-header_title">Try better next time...</h2>
        <h3 class="card-number">{{counter}}</h3>
      </div>
      <div class="card-body"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RedCard',
  props: ['counter', 'saveCards'],
  data() {
    return {};
  },
  mounted() {
    // creating card objects
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

.card {
    background: linear-gradient(124.97deg, #000000 1.1%, #3a3a3a 98.95%);
  color:white;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
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
      font-size: 1.5rem;
      color: rgb(255, 255, 255);
      font-weight: bold;
      line-height: 20px;
      margin: 0;
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
}
</style>
