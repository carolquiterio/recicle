import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBxT5srSN05O4VtlXfuOodlNrUFY9zkViA',
  authDomain: 'recicle-b8d24.firebaseio.com',
  databaseURL: 'https://recicle-b8d24.firebaseio.com',
  projectId: 'recicle-b8d24',
  storageBucket: 'recicle-b8d24.appspot.com',
  messagingSenderId: '366596970426',
  appId: '1:366596970426:ios:749ad56235779460876f83',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};

/*const firebaseConfig = class {
  constructor(apiKey) {
    this.apiKey = apiKey; AIzaSyBxT5srSN05O4VtlXfuOodlNrUFY9zkViA
    this.authDomain = 'recicle-b8d24.firebaseio.com'; //ok,
    this.databaseURL = 'https://recicle-b8d24.firebaseio.com'; //ok
    this.projectId = 'recicle-b8d24'; //ok
    this.storageBucket = 'recicle-b8d24.appspot.com'; //ok
    this.messagingSenderId = '366596970426'; //ok,
    this.appId = '1:366596970426:ios:749ad56235779460876f83'; //ok
  }
};

const startFirebase = apiKey => {
  let config = new firebaseConfig(apiKey);
  firebase.initializeApp(config);
};

module.exports = startFirebase;
 */
