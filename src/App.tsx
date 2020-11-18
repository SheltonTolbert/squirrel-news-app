import React, { FC } from 'react';
import firebase from './api/firebase';
import {Toolbar} from './components/Toolbar/Toolbar';
import {Pageview} from './components/Pageview/Pageview';

export const App: FC<{}> = ({}) => {
//
// const data = firebase.firestore()
//                         .collection('issues')
//                         .where('language', '==', 'en')
//                         .orderBy('publishedAt', 'desc').limit(5).get().then( snap => {
//                           console.log('snapshot', snap.docs[0].data());
//                         });
  


//var docRef = firebase.firestore().collection("issues").doc("0GYNO9onk7ZG9qR6wtL9");

var docRef = firebase.firestore().collection("issues").doc("0GYNO9onk7ZG9qR6wtL9").collection("articles").doc("8HhSJNPCfhrVnRhkC13V");

docRef.get().then(function(doc) {
  if (doc.exists) {
      //console.log("Document data:", doc.data());
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  //console.log("Error getting document:", error);
});


  return (
    <div className="h-full w-full">
      <Toolbar/>
      <Pageview article={{
        id: 1, 
        date: '11/20/2020', 
        image: 'image_url', 
        image_credit: 'image.src.com', 
        link: 'href', 
        headline: 'The Squirrel News app is under development', 
        provider: 'The Dev Team', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}}/>
    </div>

    
  );
}

export default App;
