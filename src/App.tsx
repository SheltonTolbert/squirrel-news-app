import React, { FC } from 'react';
import { firestore, getIssue, getArchive } from './api/firebase';
import { LANGUAGES } from './models';

export const App: FC<{}> = ({}) => {

  
  getIssue(3, LANGUAGES.EN, (data) => {
    console.log('current', data)
    // set state ...
  });
  
  getArchive(LANGUAGES.EN, null, 20, ([data, last]) => {
    
    console.log('archive', data, 'last', last)
    // set state ...
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
