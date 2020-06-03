<template>
  <div class="hello">
    <h1>Hi! I'm Andrew.</h1>
    <span style='font-size:100px;'>&#128075;&#127995;</span>
    <p>
      I build <router-link to="websites">websites</router-link>
      and wrote a
      <a target="_blank" href="https://poems.com/poem/five-thirty-two/">small book</a>
      about McDonald's.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.hello {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

h1 {
  font-family: 'IBM Plex Mono', monospace;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
}

</style>
