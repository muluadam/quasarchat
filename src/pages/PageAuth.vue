<template>
   <q-page class="flex column ">
  <q-skeleton type="circle" size="100px" />
<div class="q-pa-md">
    <q-video
      src="https://www.youtube.com/embed/1Or4cVfgjzY"
    />
  </div>
  <q-card class="q-pa-md">
        <q-tabs
        v-model="tab"
          dense
          class="bg-grey-3  "
          active-color="primary"
          indicator-color="purple"
          align="justify"
        >
          <q-tab name="login"
           label="Login" />
          <q-tab name="register" 
          label="REgister" />
         </q-tabs>

        <q-tab-panels v-model="tab"
         animated 
         class=" ">
          <q-tab-panel name="login" >
             <login-register :tab="tab"/>
           </q-tab-panel>

          <q-tab-panel name="register"  >
          
            <login-register :tab="tab"/>
          </q-tab-panel>
 
        </q-tab-panels>
      </q-card>

 
   <q-footer >
        
      </q-footer>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      tab:'login'
    }
  } ,
  components:{
    'login-register':require('components/LoginRegister.vue').default
  }
}
</script>
