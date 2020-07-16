import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFWZNWglbBs9M9KLFKQPbEDqd3Ms2eYWI",
  authDomain: "tan-pic.firebaseapp.com",
  databaseURL: "https://tan-pic.firebaseio.com",
  projectId: "tan-pic",
  storageBucket: "tan-pic.appspot.com",
  messagingSenderId: "955697870051",
  appId: "1:955697870051:web:8e694949847936ef9501d6"
})
  
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage};