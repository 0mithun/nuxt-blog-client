<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <div class="form-group">
          <input
            field="email"
            placeholder="Email"
            class="form-control"
            :class="{'is-invalid': form.errors.has('email')}"
          >
          <has-error :form="form" field="email"></has-error>

        </div>
        <div class="form-group">
          <input
            field="password"
            inputType="password"
            placeholder="Password"
            class="form-control"
            :class="{'is-invalid': form.errors.has('password')}"
          >
          <has-error :form="form" field="password"></has-error>

        </div>
        <div class="mt-4 mb-4 clearfix">
        </div>
        <div class="text-right">
          <button class="btn btn-primary" :disabled="form.busy">
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            Login
          </button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet? <nuxt-link :to="{name:'register'}">Sign Up</nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
    data(){
      return{
        form: this.$vform({
          'email':'',
          'password':''
        })
      }
    },
    methods:{
      submit(){

      }
    }
};
</script>

<style></style>
