<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from './partials/footer';
import Navigation from './partials/navigation';
export default {
  components:{
      Navigation,
      Footer,
  }
}
</script>
