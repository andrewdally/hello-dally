<template>
  <div v-if="site" class="uk-container">
    <h2>{{site.name}}</h2>
    <div>
      <i
        v-for="tool in site.tools"
        :key="tool"
        :class="`devicon-${tool}-plain`">
      </i>
      <a v-if="site.link" class="uk-margin-left-small" target="_blank" :href="site.link">{{site.link}}</a>
    </div>
    <p>{{site.description}}</p>
    <div v-if="$isMobile()">
      <div v-for="n in 3" :key="n">
        <img class="uk-margin-bottom uk-margin-top"
          :src="require('@/assets/' + site.slug + '-'+ n +'.png')" >
      </div>
    </div>
    <div v-else>
      <video class="uk-margin-bottom" uk-video="autoplay: inview" loop>
        <source
          :src="require('@/assets/' + site.screencast.path)"
          :height="site.screencast.height"
          :width="site.screencast.width" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Website',
  data: function () {
    return {
      site: null,
      currentIndex: null
    }
  },
  mounted() {
    this.setSite();
  },
  watch: {
    '$route' () {
      this.setSite()
    }
  },
  methods: {
    setSite() {
      if (!this.$sites) { return null }
      let slug = this.$route.params.website
      this.currentIndex = this.$sites.findIndex( el => el.slug === slug)
      this.site = this.$sites[this.currentIndex]
    }
  }
}
</script>

<style scoped>
video, img {
  box-shadow: 0px 0px 15px 1px #D4E8ED;
}
h2 {
  margin-bottom: 10px;
}
a {
  line-height: 2rem;
}
i {
  line-height: 2rem;
  font-size: 20px;
}
p {
  text-align: justify;
  line-height: 28px;
}
i {
  color: #AE76A6;
  font-size: 24px;
  margin-right: 12px;
}
.uk-container {
  max-width: 720px;
}
</style>
