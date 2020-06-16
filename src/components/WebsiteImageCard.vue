<template>
  <div :class="hoverClass">
    <img
      @mouseover="setHover()"
      @mouseout="unsetHover()"
      @click="click()"
      :src="require('@/assets/' + site.slug + '-1.png')"
      >
    <router-link :to="`/websites/${site.slug}`">
      <span @mouseover="setHover()" @mouseout="unsetHover()">
        {{site.name}}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'WebsiteCard',
  props: ['site'],
  data: function() {
    return {
      hoverClass: ''
    }
  },
  methods: {
    setHover() {
      this.hoverClass = 'hover'
    },
    unsetHover() {
      this.hoverClass = ''
    },
    click() {
      this.$router.push('websites/' + this.site.slug)
    }
  }
}
</script>

<style scoped>
video {
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 15px 1px #D4E8ED;
}

span {
  line-height: 30px;
}

.hover video {
  box-shadow: 0px 0px 15px 1px #C398BC;
}

.hover span {
  border-bottom: 1px solid #AE76A6;
  color: #AE76A6;
}
</style>
