<template>
  <div>
    <Topbar />
    <b-container class="my-5" fluid="md">
      <b-row>
        <b-col>
          <nuxt />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Topbar from '~/components/global/Topbar.vue'
import Footer from '~/components/global/Footer.vue'
export default {
  components: {
    Topbar,
    Footer,
  },
  data: function () {
    return {}
  },
}
</script>

<style></style>
