import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: "AIzaSyC5HQ8N6xaBY9aCEJluUq76DVHDvLi5KNk",
    authDomain: "my-chatapp-dbaf6.firebaseapp.com",
    projectId: "my-chatapp-dbaf6",
    storageBucket: "my-chatapp-dbaf6.appspot.com",
    messagingSenderId: "280395987307",
    appId: "1:280395987307:web:57f85e9267bc80736f342e",
    measurementId: "G-JRREFVGEDS"
  });
}

export default (context, inject) => {
  const $fb = {
    app: Firebase.app,
    auth: Firebase.auth,
    firestore: Firebase.firestore,
  }
  inject('fb',$fb)
}