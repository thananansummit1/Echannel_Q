<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">E-Channel (UAT)</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Import Customer Lead</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#">Group</b-nav-item>
            <b-nav-item href="#">User Mapping</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>xxxxx</em>
            </template>
            <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$bvModal
        .msgBoxConfirm('Are you sure you want to log out?', {
          title: 'Warning',
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.$store.commit('LOGOUT')
            this.$router.push('/login')
          }
        })
    },
  },
}
</script>

<style></style>
