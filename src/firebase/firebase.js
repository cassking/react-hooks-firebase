import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();

  }
  // if returns a promise use async
  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    )
    return await newUser.user.updateProfile({
      displayName: name
    })

  }

  // if returns a promise use async
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password)
  }
}
// now need to instantiate the class
const firebase =  new Firebase();
// and export it
export default firebase;