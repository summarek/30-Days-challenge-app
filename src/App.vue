<template>
  <div id="app">
    <header class="header">
      <div class="header-title">
        <p class="header-main_title">SUMMAREK 30 DAYS CODING CHALLENGE</p>
        <p class="header-under_title">it’s my holidays learning progress</p>
      </div>
    </header>

    <nav class="navigation">
      <div class="navigation-nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/Stats">Stats</router-link>
      </div>
    </nav>

    <main>
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

  &-main_title {
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
  }
  &-under_title {
    text-align: center;
    font-size: 1.4rem;
  }
}
.navigation {
  position: absolute;
  top: 0rem;
  right: 0;

  @media (min-width: 870px) {
    top: 2rem;
  }
}
</style>
