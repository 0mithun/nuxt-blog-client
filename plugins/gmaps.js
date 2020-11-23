import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp'

// Vue.use(VueGoogleMaps, {
//   load:{
//     // key:'AIzaSyDHyF93Z-wGUDe0jwGCo49jZarkqAu6CUc',
//     Key:'AIzaSyCuyfR8S4wwBXEDshoBhO3uWKk7W3RY_X0',
//     libraries: 'places'
//   }
// })

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCD5OlHTwtknXmgJ0MCgQn-CKdgLtbkD7g',
    libraries: 'places'
  }
})
