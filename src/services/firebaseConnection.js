import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyC2LbOBjDU2cteXOmeVynt3FGjZzmGrlzA',
  authDomain: 'apptarefas-4c953.firebaseapp.com',
  projectId: 'apptarefas-4c953',
  storageBucket: 'apptarefas-4c953.appspot.com',
  messagingSenderId: '803233396862',
  appId: '1:803233396862:web:8605c8bb1e812bb9efc02f',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
