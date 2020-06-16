<template>
  <div class="uk-container">
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>
      <div v-for="site in $sites" :key="site.slug">
        <WebsiteImageCard v-if="$isMobile()" v-bind:site="site" />
        <WebsiteVideoCard v-else v-bind:site="site" />
      </div>
    </div>
  </div>
</template>

<script>
import WebsiteVideoCard from '@/components/WebsiteVideoCard'
import WebsiteImageCard from '@/components/WebsiteImageCard'

export default {
  name: 'Websites',
  components: {
    WebsiteImageCard,
    WebsiteVideoCard
  }
}
</script>

<style scoped>
.uk-container {

}
</style>
