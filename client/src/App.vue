<template>
  <div id="app">
    <div id="nav">
      <b-navbar variant="info" fixed='top'>
         <b-navbar-brand to="/">Home</b-navbar-brand>
        <b-navbar-brand to="/sequence">Sequence</b-navbar-brand>
        <b-navbar-brand to="/equation">Equation</b-navbar-brand>
        <b-navbar-brand to="/maps">Maps</b-navbar-brand>
        <b-navbar-brand to="/cv">CV</b-navbar-brand>
      </b-navbar>
    </div>
    <div style="min-height:610px;">
      <router-view/>
    </div>
    <b-card bg-variant="info" text-variant="white">
      <b-card-text>
      SCG Assignment 2020 by Satsawat Suttawuttiwong
      </b-card-text>
    </b-card>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
