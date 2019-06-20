import React from 'react';
import DocViewer from './DocViewer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import GitHub from 'github-api';
import DiffViewer from './DiffViewer';


function App() {
  const gh = new GitHub({ username: 'TIMVRAKAS', token: '496052d84361126df057edb22030a0d2c227b6c5' });
  let repo = gh.getRepo('Timvrakas', 'ASSU-LegalDiff');

  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>View Documents</Tab>
          <Tab>Compare Versions</Tab>
        </TabList>

        <TabPanel>
          <DocViewer repo={repo} />
        </TabPanel>
        <TabPanel>
          <DiffViewer repo={repo}/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
