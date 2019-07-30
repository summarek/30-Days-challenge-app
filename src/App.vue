<template>
  <div id="app">
    <header class="header">
      <div class="header-title margin">
        <p class="header-main_title">SUMMAREK 30 DAYS CODING CHALLENGE</p>
        <p class="header-under_title">it’s my holidays learning progress</p>
      </div>
      <div class="navigation-nav margin">
        <router-link to="/">Home</router-link>|
        <router-link to="/Stats">Stats</router-link>
      </div>
    </header>
    <!-- <nav class="navigation">
      <div class="navigation-nav margin">
        <router-link to="/">Home</router-link>|
        <router-link to="/Stats">Stats</router-link>
      </div>
    </nav>-->
    <main class="padding">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
  padding: 2em;
}
a {
  text-decoration: none;
  color: black;
}
.padding {
  padding: 1rem;
}
.margin {
  margin: 1rem;
}

.header {
  display: flex;
  justify-content: center;
  align-content: center;
  // position: relative;

  &-main_title {
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
  }
  &-under_title {
    text-align: center;
    font-size: 1.4rem;
  }
  &-nav {
  }
}
</style>
