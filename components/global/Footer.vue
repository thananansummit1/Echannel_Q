<template>
  <div class="fixed-topbar text-white" style="position: relative">
    <div class="navfooter">
      <b-container>
        <b-row>
          <b-col>
            <span>&#169; 2022 - E-Channel System </span>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.navfooter {
  position: absolute;
  z-index: 999;
  width: 100%;
  left: 0;
  background-color: #323232;
  padding: 15px;
  transition: all 0.2s;
}
</style>
