<template>
  <div>
    <Topbar />
    <b-container class="my-5">
      <b-row>
        <b-col>
          <nuxt />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Topbar from '~/components/global/Topbar.vue'
export default {
  components: {
    Topbar,
  },
  data: function () {
    return {}
  },
}
</script>

<style></style>
