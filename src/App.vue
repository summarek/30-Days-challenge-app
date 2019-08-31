<template>
  <div id="app">
    <header class="header">
      <div class="header-title">
        <p class="header-main_title">YOUR 30 DAYS CHALLENGE</p>
        <p class="header-under_title">track your progress</p>
      </div>
    </header>

    <nav class="navigation">
      <div class="navigation-nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/Stats">Stats</router-link>
      </div>
    </nav>
    <main>
    <transition
      name="router-anim"
      mode="out-in"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight"
    >
      <router-view />
    </transition>
       </main>
  </div>
</template>
<style lang="scss">

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200), // The primary color of your application
  accent: md-get-palette-color(red, A200), // The accent or secondary color
  theme: light // This can be dark or light
));


@import "~vue-material/dist/theme/all"; // Apply the theme
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css");


body {
  padding: 1em;
}
.header {
  display: flex;
  justify-content: center;
  align-content: center;

  &-main_title {
    font-size: 2rem;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 0;
    line-height: 30px;
  }
  &-under_title {
    text-align: center;
    font-size: 1.4rem;
    margin: 0.5rem;
    color: rgba(0, 0, 0, 0.5);
  }
}
.navigation {
  position: absolute;
  top: 0rem;
  padding: 0.5rem;
  right: 0;
  margin-right: 2rem;

  @media (min-width: 970px) {
    top: 2.1rem;
  }
}
.md-checkbox.md-theme-default .md-checkbox-container {
  border-color: #fff;
}
</style>
