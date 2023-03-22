import firebase from 'firebase';


const firebaseConfig = {
  apiKey: 'AIzaSyC6mqtb8KRG5ovi5OD-nnA4PcnSjtI9ILM',
  authDomain: 'disneyplus-clone-44d0e.firebaseapp.com',
  projectId: 'disneyplus-clone-44d0e',
  storageBucket: 'disneyplus-clone-44d0e.appspot.com',
  messagingSenderId: '202859399419',
  appId: '1:202859399419:web:30c9729075454c73bc485e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;