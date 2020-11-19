import {firebaseAuth, firebaseDb} from 'boot/firebase'
import { someMutation } from './module-example/mutations'
//has four differnet objects

//1. storing objects
const state={
    userDetails:{}
}

//2methods that used to maniputate the state ,...cant be asyncroneoys
const mutations={
    setUserDetails(state,payload){
        state.userDetails=payload;
    }
}

//mehtoods that are asyncroneous
//we can call mutations from actions 
const actions={

    registerUser({},data){
       // console.log("Register User "+data.password)
        firebaseAuth.createUserWithEmailAndPassword(data.email, data.password)
        .then(response=>{
            console.log(response)
            let userUd=firebaseAuth.currentUser.uid;
firebaseDb.ref('users/'+userUd).set({
    name:data.name,
    email:data.email,
    online:true
})

        }).catch(error=>{
            console.log(error.message)
        })

    },
    loginUser({},payload){
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then(response=>{
            console.log('login successful')
        }).catch(error=>{
            console.log(error.message)
        })
    },
    handleStateChange({commit}){
         firebaseAuth.onAuthStateChanged(user=>{
             if(user){
                let userUd=firebaseAuth.currentUser.uid;
 firebaseDb.ref('users/'+userUd).once('value',snapshot=>{
                 console.log("snapshoot= "+snapshot) 
                 let userDetails=snapshot.val()
                 commit('setUserDetails',{
                     name:userDetails.name,
                     email:userDetails.email,
                     userId:userUd
                 })
               })
             }else {
                 commit('setUserDetails',{})
             }
         })
    }
}


const getters={}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}  

