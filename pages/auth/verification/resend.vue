<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Resend Verification Email
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error v-if="form.errors.has('message')" :form="form">
          {{ form.errors.get('message') }}
        </alert-error>
        <alert-success :form="form">
          We have resent the verification email
        </alert-success>
        <div class="form-group">
          <input
            :form="form"
            field="email"
            class="form-control"
            v-model="form.email"
            placeholder="Email"
            :class="{'is-invalid': form.errors.has('email')}"
          >
          <has-error :form="form" field="email"></has-error>
        </div>

        <div class="text-right">
          <button  class="btn btn-primary" :disabled="form.busy">
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            Resend
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
   middleware: ['guest'],
  data() {
    return {
      form: this.$vform({
        'email':''
      })
    };
  },
  methods: {
      submit(){
        this.form.post('/verification/resend')
          .then((res) => {
            this.form.reset();

          }).catch((err) => {
            console.log(err)
          });
      }
  }
};
</script>

<style></style>
