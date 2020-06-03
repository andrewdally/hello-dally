<template>
  <div :class="hoverClass">
    <video ref="videoRef"
      @mouseover="setHover()"
      @mouseout="unsetHover()"
      @click="click()"
      :style="cursorStyle(site.emoji)"
      >
      <source :src="videoPath(site.screencast)" />
    </video>
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
    videoPath(path) {
      return require("@/assets/" + path)
    },
    cursorStyle(emoji) {
      let emojiPath = '/emojis/' + emoji
      return {cursor: `url('${emojiPath}'), auto`}
    },
    setHover() {
      this.hoverClass = 'hover'
      this.$refs.videoRef.play()
    },
    unsetHover() {
      this.hoverClass = ''
      this.$refs.videoRef.pause()
    },
    click() {
      this.$router.push('websites/' + this.site.slug)
    }
  }
}
</script>

<style scoped>
video {
  box-shadow: 0px 0px 15px 1px #D4E8ED;
}

span {
  padding: 10px 0;
  display: block;
}
.hover video {
  box-shadow: 0px 0px 15px 1px #C398BC;
}

.hover a {
  border-bottom-style: solid;
  color: #AE76A6;
  border-color: #AE76A6;
}
</style>
