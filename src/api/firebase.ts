import firebase from 'firebase';
import { config } from '../config/firebaseconf';

firebase.initializeApp(config);

export default firebase;