<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error :form="form" v-if="form.errors.has('verification')">
          {{ form.errors.get('verification') }}
          <nuxt-link :to="{name:'resend'}">Resend verification email</nuxt-link>
        </alert-error>
        <div class="form-group">
          <base-input
            :form="form"
            field="email"
            v-model="form.email"
            placeholder="Enter your email"
            inputType="text"></base-input>
        </div>
        <div class="form-group">
          <base-input
          :form="form"
          field="password"
          v-model="form.password"
          placeholder="Enter your password"
          inputType="password"></base-input>
        </div>


        <div class="mt-4 mb-4 clearfix">
          <nuxt-link :to="{name:'password.email'}">Forgot Password</nuxt-link>
        </div>
        <div class="text-right">
            <base-button :loading="form.busy">Login</base-button>
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
    middleware: ['guest'],
    data(){
      return{
        form: this.$vform({
          'email':'',
          'password':'',
        })
      }
    },
    methods:{
      submit(){
        this.$auth.loginWith('local',{data:this.form})
          .then(res=>{
            // this.form.reset();
          }).catch(err=>{
              this.form.errors.set(err.response.data.errors)

          })
      }
    }
};
</script>

<style></style>
