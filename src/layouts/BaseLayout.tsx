import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import { Toolbar } from '../components/Toolbar/Toolbar';
import { Scrollview } from '../components/Scrollview/Scrollview'
import { DonationPage } from '../components/DonationPage/DonationPage';
import { ArchivePage } from '../pages/ArchivePage';

// const intervals = 2; 



export const BaseLayout: FC = () => {
  return (
    <div>


      <Router>        
      {/* render toolbar and Burger Menu here */}
      <Toolbar/>
        
        <Switch>
          
          {/* Home page redirects to latest issue */}
          <Route exact path="/">
            <Redirect to="issue/0" />
          </Route>
          
          {/* Article page redirects to issue where id == issue index in sorted list */}
          <Route path="/issue/:id" component={Scrollview}/>

          {/* Archive page */}
          <Route exact path="/archive">
            <ArchivePage/>
          </Route>
          
          {/* Donate Page with static props*/}
          <Route exact path="/donate">
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