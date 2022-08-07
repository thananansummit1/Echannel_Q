<template>
  <b-row>
    <b-col
      v-for="(i, index) in items"
      :key="index"
      xs="12"
      sm="6"
      md="6"
      lg="6"
      xl="6"
    >
      <Task />
    </b-col>
  </b-row>
</template>

<script>
import Task from '~/components/main/Tasklist'
export default {
  layout(context) {
    return 'admin'
  },
  components: {
    Task,
  },
  middleware: '',
  data: function () {
    return {
      items: 9,
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style></style>
>
