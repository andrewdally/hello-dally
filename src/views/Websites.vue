<template>
  <div class="uk-container">
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>
      <div v-for="site in $sites" :key="site.slug">
        <WebsiteCard
          v-bind:site="site">
        </WebsiteCard>
      </div>
    </div>
  </div>
</template>

<script>
import WebsiteCard from '@/components/WebsiteCard'
export default {
  name: 'Websites',
  components: {
    WebsiteCard
  }
}
</script>
<style scoped>
.uk-container {

}

</style>
