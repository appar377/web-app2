import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyAedwS2lrh-JTuKusD_lfWDQArNyumL-bs",
      authDomain: "fir-pj-63faf.firebaseapp.com",
      projectId: "fir-pj-63faf",
      storageBucket: "fir-pj-63faf.appspot.com",
      messagingSenderId: "657021496541",
      appId: "1:657021496541:web:b757d5e410a8c976f6ff34",
      measurementId: "G-HGPM1EDRTH"
    }
  )
}
  
export default firebase