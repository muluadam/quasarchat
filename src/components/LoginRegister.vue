.<template>
 <q-form class=" " @submit="submitForm">


  <q-input 
  v-if="tab=='register'"
  outlined
  v-model="formData.name" 
  label="Name" />
 
  <q-input
  outlined
  type="email"
  v-model="formData.email" 
  label="Email" />
 
  <q-input 
  outlined
  type="password"
  v-model="formData.password" 
  label="Password" />
 
  <div class="row">
      <q-space />

 <q-btn color="primary" :label="tab" 
 type="submit"/>
  </div>
 </q-form>
</template> 

<script>

import { mapActions } from 'vuex'

export default {
data(){
    return { 
    formData:{
        name:'',
        email:'',
        password:''
    }
    }
},
  props: ['tab'],
  methods:{
      ...mapActions('store',['registerUser','loginUser']),
      submitForm(){
          if(this.tab=='login'){
             this.loginUser(this.formData)

          }
          else {
             this.registerUser(this.formData)
          }
      }
  }
    
}
</script>

<style>

</style>