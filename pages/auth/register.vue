<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">Register</h1>
      <form class="auth-form" @submit.prevent="submit" >
        <alert-success :form="form">We have sent you an email to activate your account.</alert-success>
        <div class="form-group">
          <input
          inputType="text"
            field="name"
            placeholder="Full Name"
            v-model="form.name"
            class="form-control"
            :class="{ 'is-invalid': form.errors.has('name') }"
            >
            <has-error :form="form" field="name"></has-error>
        </div>
        <div class="form-group">
          <input
            inputType="text"
            field="username"
            placeholder="Username"
            class="form-control"
            v-model="form.username"
            :class="{ 'is-invalid': form.errors.has('username') }"
            >
            <has-error :form="form" field="username"></has-error>
        </div>
        <div class="form-group">
          <input
            inputType="email"
            field="email"
            placeholder="Email"
            class="form-control"
            v-model="form.email"
          :class="{ 'is-invalid': form.errors.has('email') }"
            >
            <has-error :form="form" field="email"></has-error>
        </div>
        <div class="form-group">
          <input
            inputType="password"
            field="password"
            placeholder="Password"
            class="form-control"
            v-model="form.password"
          :class="{ 'is-invalid': form.errors.has('password') }"
            >
            <has-error :form="form" field="password"></has-error>
        </div>
        <div class="form-group">
          <input
            inputType="password"
            field="password_confirmation"
            placeholder="Confirm Password"
            class="form-control"
            v-model="form.password_confirmation"
          :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
            >
            <has-error :form="form" field="password_confirmation"></has-error>
        </div>

        <div class="text-right">
          <button class="btn btn-primary" :disabled="form.busy">
            <span v-if="form.busy"><i class="fas fa-spinner fa-spin"></i></span>
            Register</button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Already have an account? <nuxt-link :to="{name:'login'}">Sign In</nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      form: this.$vform({
        'username'  : '',
        'email': '',
        'name':'',
        'password':'',
        'password_confirmation':''
      }),
    }
  },
  methods:{
    submit(){
      console.log('form submitted')
      this.form.post(`/register`)
        .then(res=>{
          this.form.reset();
        }).catch(err=>{
          console.log(err)
        })
    }
  }
};
</script>

<style></style>
