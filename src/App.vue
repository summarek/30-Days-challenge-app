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
