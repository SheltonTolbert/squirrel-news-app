import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Toolbar } from '../components/Toolbar/Toolbar';
import { Scrollview } from '../components/Scrollview/Scrollview'
import { DonationPage } from '../components/DonationPage/DonationPage';
import { ArchivePage } from '../pages/ArchivePage';

// const intervals = 2; 



export const BaseLayout: FC = () => {
  return (
    <div>


      <Router>        
      {/* render toolbar and
             Burger Menu here */}
      <Toolbar/>
        
        <Switch>
          
          <Route exact path="/">
            <Scrollview/>
          </Route>
          
          <Route exact path="/archive">
            <ArchivePage/>
          </Route>
          

          <Route path="/donate">
            <DonationPage info={{
              id: 1000,
              headline: 'this is a router test',
              body: 'issue.donate.text'
             }}/>
          </Route>
        
        </Switch>
      
      </Router>
      
    
      </div>
  )
}