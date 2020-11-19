<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
       <q-btn
       v-if="$route.fullPath.includes('/chat')"
       icon="arrow_back"
       v-go-back.single

       flat 
       dense
       
       label="Backk"
  
       />

       

        <q-toolbar-title class="absolute-center">
          
        </q-toolbar-title>

        <q-btn v-if="!userDetails.userId"
        to="/auth"
        class="absolute-right q-pr-sm"
       icon="account_circle"
       flat 
       dense
       no-caps
       label="Login"
         />
           <q-btn
        to="/auth"
        class="absolute-right q-pr-sm"
       icon="account_circle"
       flat 
       dense
       no-caps
  >Logout
{{userDetails.name}}
         </q-btn>
      </q-toolbar>
    </q-header>

    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
 import {mapState} from 'vuex'
 

export default {
 
  computed:{
    ...mapState('store',['userDetails']),
    title(){
      // console.log.(this.$route)
    let currentPath=this.$route.fullPath;
if(currentPath=="/")return 'Smart Chat' 
if(currentPath=="/chat")return 'Chat Page' 

    
    if(currentPath=="/auth")return 'Auth Page' 

    }
  }
}
</script>
