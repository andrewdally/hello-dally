<template>
  <div :if="site" class="uk-container">
    <h2>{{site.name}}</h2>
    <div>
      <i
        v-for="tool in site.tools"
        :key="tool"
        :class="`devicon-${tool}-plain`">
      </i>
    </div>
    <p>{{site.description}}</p>
    <video uk-video="autoplay: inview" loop>
      <source :src="require('@/assets/' + site.screencast)" />
    </video>
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
      let slug = this.$route.params.website
      this.currentIndex = this.$sites.findIndex( el => el.slug === slug)
      this.site = this.$sites[this.currentIndex]
    },
    // prevSite() {
    //   let prev =  (this.currentIndex === 0)
    //     ? this.$sites[this.$sites.length - 1]
    //     : this.$sites[this.currentIndex - 1]
    //   console.log('currentIndex', this.currentIndex)
    //   console.log('prev', prev)
    //   return prev
    // },
    // nextSite() {
    //   return (this.currentIndex === this.$sites.length - 1)
    //     ? this.$sites[0]
    //     : this.$sites[this.currentIndex + 1]
    // }
  }
}
</script>
<style scoped>
video {
  box-shadow: 0px 0px 15px 1px #D4E8ED;
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
