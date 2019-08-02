<template>
  <div class="root">
    <div class="card">
      <div class="card-header">
        <h2 class="card-header_title">
          Great!
          <br />What did you learn?
        </h2>
        <h3 class="card-number">{{counter}}</h3>
      </div>
      <div class="card-body">
        <md-field>
          <label>enter your anwser...</label>
          <md-textarea v-model.trim="learnedThing" @keyup="writingTask"></md-textarea>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GreenCard',
  props: {
    saveCheckedBoxed: { type: Function },
    counter: { type: Number },
    hoursOfLearning: { type: Array },
    value: { type: Number },
    learnedThings: { type: Array },
  },

  data() {
    return {
      learnedThing: null,
      random1: Math.floor(Math.random() * 10),
      random2: Math.floor(Math.random() * 10),
      random3: Math.floor(Math.random() * 10),
      random4: Math.floor(Math.random() * 10),
      random5: Math.floor(Math.random() * 10),
    };
  },
  methods: {
    writingTask() {
      this.learnedThings[this.counter - 1] = this.learnedThing;
      localStorage.setItem('learnedThing', JSON.stringify(this.learnedThing));

      console.log(this.learnedThings);
      console.log(this.learnedThing);
    },
  },
  mounted() {
    if (localStorage.hoursOfLearning) {
      this.learnedThing = JSON.parse(
        localStorage.getItem('learnedThing') || '[]',
      );
    }
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

.card {
  background: linear-gradient(124.97deg, #f83600 1.1%, #ffd300 98.95%);
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
      font-size: 1.4rem;
      color: #fff;
      line-height: 20px;
      margin: 0;
      max-width: 250px;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    }
  }
  &-number {
    color: #fff;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;
    padding-right: 5px;
  }
  &-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-input {
    width: 230px;
    height: 90%;
    background-color: transparent;
    //border: none;
  }
  &-checkboxes {
    float: right;
  }
  &-middleimg {
    align-self: center;
    border-radius: 50px;
  }
  &-hidden {
    opacity: 0;
    z-index: 10;
    position: absolute;
    transform: translateX(86px);
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
.md-checkbox {
  padding: 5px !important;
  margin: 0;
  display: flex;
}
.md-ripple {
  padding: 5px !important;
}
.md-field {
  margin: 0;
  padding: 0;
  height: 140px;
  margin-right: 10px;
  padding-top: 10px;
  color: white;
}
.md-textarea {
  height: 100%;
  padding-left: 0;
  color: white;
}
.md-field.md-has-textarea:not(.md-autogrow):after,
.md-field.md-has-textarea:not(.md-autogrow):before {
  border: none;
  color: white;
}
.md-field.md-has-textarea:not(.md-autogrow) label {
  top: 0;
  left: 0;
  color: rgba(255, 255, 255, 0.59);
}
.md-field.md-has-textarea:not(.md-autogrow) .md-textarea {
  padding-left: 0;
  color: white;
}
.md-field.md-theme-default.md-focused .md-input,
.md-field.md-theme-default.md-focused .md-textarea,
.md-field.md-theme-default.md-has-value .md-input,
.md-field.md-theme-default.md-has-value .md-textarea {
  -webkit-text-fill-color: rgb(228, 228, 228);
}
.md-field.md-has-textarea:not(.md-autogrow) .md-textarea {
  resize: none;
}
</style>
