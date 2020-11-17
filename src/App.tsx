import React, { FC } from 'react';
import firebase from './api/firebase';

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
      console.log("Document data:", doc.data());
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});


  return (
    <div>
      
    <div className="w-4/5 mx-auto flex p-6 bg-gray-300 mt-10 rounded-lg shadow-md">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Tailwind is working
        </h1>
        <div className="text-base text-gray-700 leading-normal">
          And it looks so so good 
          <br/>
          <br/>
          <br/>I created some new sctipts in the in the package.json<br/>
          <br/>
          <ul>
          <code><li>&nbsp;&nbsp;&nbsp;&nbsp;'npm start' is now 'npm start:react'</li></code>
          <br/>
          <code><li>&nbsp;&nbsp;&nbsp;&nbsp;'npm start' uses npm-run-all to run 'build:tailwind' then runs both 'watch:tailwind' 'start:react' in parallel</li></code>
          <br/>
          <code><li>&nbsp;&nbsp;&nbsp;&nbsp;'watch:tailwind' uses chokidar to listen fo rchanges in the css then rebuilds tailwind on change</li></code>
          <br/>
          <code><li>&nbsp;&nbsp;&nbsp;&nbsp;'build:tailwind' builds tailwind...</li></code>
          </ul>
          <br/>
          <br/>Don't forget to download <a href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss' className='text-purple-700'>IntelliSense</a>
        </div>
      </div>
  </div>
  </div>

    
  );
}

export default App;
