<template>
  <div class="mb-5">
    <div class="text-center mb-2">
      <span class="d-inline-block taskcount t-fail">
        <i class="fas fa-folder"></i> : 11
      </span>
    </div>
    <div class="box-task">
      <div class="h">
        <i class="fas fa-file f-size-icon"></i>
      </div>
      <div class="m">Customer Lead For HP</div>
      <div class="f">
        <b-button variant="primary">View</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: '',
  data: function () {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style>
.taskcount {
  padding: 2px 12px;
  color: var(--text-white);
}
.taskcount.t-fail {
  background: var(--bg-danger);
}
.taskcount.t-success {
  background: var(--bg-success);
}
.box-task {
  border: 1px solid #eaeaea;
  text-align: center;
  background: #fff;
}
.box-task .h {
  padding: 25px 0;
  background: #4a8dff;
  color: var(--text-white);
}
.box-task .h .f-size-icon {
  font-size: 3rem;
}
.box-task .m {
  padding: 25px 0;
}
.box-task .f {
  border-top: 1px solid #eaeaea;
  padding: 25px 0;
}
</style>
