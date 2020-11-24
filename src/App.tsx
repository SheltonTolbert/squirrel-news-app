import React, { FC, useState } from 'react';
import { getIssue, getArchive, getArticle} from './api/firebase';
import { BaseLayout } from './layouts/BaseLayout';
import { LANGUAGES } from './models';


  
export const App: FC<{}> = ({}) => {

  const [articles, setArticles] =  useState <any>();
  
  getArticle("HVG0cAArZe6bMj4QJPag", "bvMDfEYH7xZ3iRv5YsXr", (result) => {
    console.log('fav', result);
  });



  return (
    <div>
      <BaseLayout />
    </div>  
  );
}

export default App;
