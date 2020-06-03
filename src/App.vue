<template>
  <div id="app">
    <nav id="nav">
      <router-link v-if="$route.name !== 'Home'" to="/">Home</router-link>
      <span v-if="$route.name === 'Website'"> | </span>
      <router-link v-if="$route.name === 'Website'" to="/websites">Websites</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    let path = localStorage.getItem('path');
    if(path) {
      console.log(path)
      localStorage.removeItem('path');
      this.$router.push(path);
    }
  }
}
</script>

<style>
html, body {
  min-height: 100vh;
  margin: 0;
}

body {
  background-image: linear-gradient(
    45deg,
    #D3E7EE 2%, #ffffff 2%,
    #ffffff 50%, #D3E7EE 50%,
    #D3E7EE 52%, #ffffff 52%,
    #ffffff 100%);
  background-size: 30px 30px;
}

#app {
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,h2,a {
  font-family: 'IBM Plex Mono', Helvetica, Arial, sans-serif;
}

p, p>a {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}

a {
  text-decoration: none;
  border-bottom: 1px dotted #1e87f0;
}

a:hover {
  text-decoration: none;
  border-bottom-style: solid;
  color: #AE76A6;
  border-color: #AE76A6;
}

#nav {
  text-align: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #AE76A6;
  border-bottom-style: solid;
  border-color: #AE76A6;
}
</style>
