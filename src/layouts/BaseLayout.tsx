import React, { FC } from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { IssuesPage } from '../pages';
import { ArchivePage } from '../pages/ArchivePage';

export const BaseLayout: FC = () => {
  return (
    <div>
      <h2>Base Layout</h2>
      {/* render toolbar and
             Burger Menu here */}
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
    </div>
  )
}