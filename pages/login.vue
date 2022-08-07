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
                    <b-form-input placeholder="Username"></b-form-input>
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
                      type="password"
                      placeholder="Password"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>

                <b-form-group>
                  <b-button class="w-100" variant="primary">Login</b-button>
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
    console.log(context)
    return 'landding'
  },
  middleware: 'guest',
  data: function () {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
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
