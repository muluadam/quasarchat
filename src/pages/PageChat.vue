<template>
  <q-page class="flex column ">
  <q-banner inline-actions 
  class=" text-center bg-grey-4">
    User is offline.
   </q-banner>
    <dev class="
    q-pa-md 
     column 
     col 
     justify-end">
        <q-chat-message
       
        v-for="message in messages"
         :key="message.text"
         :name="message.from"
        :text="[message.text]"
        :sent="message.from=='me'?true:false"
      />
 </dev>
 
   <q-footer elevated>
        <q-toolbar>
          <q-form 
          class="full-width"
          @submit="sendMessage">
            
           <q-input 
            outlined
            bg-color="white"
            rounded=""
             v-model="newMessage" 
            dense>
        
        

        <template v-slot:after>
          <q-btn 
          round
           dense 
           flat 
           color="white"
           icon="send" />
        </template>
      </q-input>
             </q-form>
        </q-toolbar>
      </q-footer>
  </q-page>
  
</template>

<script>
export default {
 
  data(){
    return {
      newMessage:'',
      messages:[
        {
        text:"hey ",
        from:'me'
      },
        {
        text:"hey them ",
        from:'them'
      },
        {
        text:"hey Ada",
        from:'them'
      },
      ]
    }
  },
  methods:{
sendMessage(){
  this.messages.push({
    text:this.newMessage,
    from:'them'
  })
}

  }
}
</script>
