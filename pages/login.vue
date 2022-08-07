<template>
  <div>
    <div class="login-page">
      <b-container>
        <b-row>
          <b-col xs="12" sm="8" md="6" lg="4" class="mx-auto">
            <div class="text-center mb-5">
              <h1>E - Channel System</h1>
              <h1>(UAT)</h1>
            </div>
            <div class="login">
              <div class="text-center my-4">
                <Logo />
              </div>
              <div class="text-left">
                <span></span>
                <b-form-group>
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <template #prepend>
                      <b-input-group-text
                        ><i class="fas fa-user"></i
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      v-model="username"
                      placeholder="Username"
                      autocomplete="off"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group>
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <template #prepend>
                      <b-input-group-text
                        ><i class="fas fa-key"></i
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      v-model="password"
                      type="password"
                      placeholder="Password"
                      autocomplete="off"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group>
                  <!-- <b-button variant="primary" disabled>
                    <b-spinner small type="grow"></b-spinner>
                    Loading...
                  </b-button> -->
                  <b-button
                    v-if="!btnsummit"
                    :disabled="isDisabledBtn"
                    class="w-100"
                    variant="primary"
                    @click="submmitLoging"
                    >Login</b-button
                  >
                  <b-button disabled class="w-100" variant="primary" v-else>
                    <b-spinner small type="grow"></b-spinner>
                    Loading...
                  </b-button>
                </b-form-group>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/NuxtLogo'
export default {
  components: {
    Logo,
  },
  layout(context) {
    return 'landding'
  },
  middleware: 'guest',
  data: function () {
    return {
      username: '',
      password: '',
      btnsummit: false,
    }
  },
  computed: {
    isDisabledBtn() {
      return this.username === '' || this.password === ''
    },
  },
  mounted() {},
  methods: {
    submmitLoging() {
      console.log('ready')
      this.btnsummit = true

      setTimeout(() => {
        this.$router.push('/admin/dashboard')
        console.log('ok finish')
        this.btnsummit = false
      }, 3000)
    },
  },
}
</script>

<style scoped>
.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}
.login {
  background: #fff;
  padding: 25px;
  border: 1px solid #eaeaea;
}
</style>
