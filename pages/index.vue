<template>
<div class="homepage">
    <div class="h-screen">
      <SiteHeader />
      <HomeBanner />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import SiteHeader from '~/components/Header.vue'
import HomeBanner from '~/components/HomeBanner.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { SiteHeader, HomeBanner }
})
</script>

<style>
body{
  background: #FFFAFA;
}
</style>
