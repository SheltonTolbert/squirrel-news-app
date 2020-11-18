import React, { FC } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { IssuesPage } from '../pages';
import { ArchivePage } from '../pages/ArchivePage';


import { Toolbar } from '../components/Toolbar/Toolbar';
import { Scrollview } from '../components/Scrollview/Scrollview'


const intervals = 2; 



export const BaseLayout: FC = () => {
  return (
    <div>
    

      {/* render toolbar and
             Burger Menu here */}
      <Toolbar/>
      


   {/* Items */}

      <Scrollview/>

    
      {/*
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/issues">Issues</Link>
              </li>
              <li>
                <Link to="/archive">Archive</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/issues">
            <IssuesPage />
          </Route>
          <Route path="/archive">
            <ArchivePage />
          </Route>
        </Switch>
      </Router>
      */}
    
      </div>
  )
}