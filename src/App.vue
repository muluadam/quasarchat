<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions('store',['handleStateChange'])
  },
  mounted(){
    this.handleStateChange()
  }



}
</script>
