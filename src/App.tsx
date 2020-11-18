import React, { FC, useState } from 'react';
import { getIssue, getArchive } from './api/firebase';
import { BaseLayout } from './layouts/BaseLayout';
import { LANGUAGES } from './models';


  
export const App: FC<{}> = ({}) => {

  const [articles, setArticles] =  useState <any>();
  

  getIssue(1, LANGUAGES.EN, (data) => {
    //console.log('current', data)
    // set state ...
    
  });
  
  


  getArchive(LANGUAGES.EN, null, 20, ([data, last]) => {  
    //console.log('archive', data, 'last', last)
    // set state ...
  });

  return (
    <div>
      <BaseLayout />
    </div>  
  );
}

export default App;
