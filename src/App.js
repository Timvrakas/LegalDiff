import React from 'react';
import DocViewer from './DocViewer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import DiffDocument from './DiffDocument';


function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Single Document</Tab>
          <Tab>Compare Documents</Tab>
        </TabList>

        <TabPanel>
          <DocViewer />
        </TabPanel>
        <TabPanel>
          <DiffDocument urls={['https://raw.githubusercontent.com/Timvrakas/ASSU-LegalDiff/master/constitution.md','https://raw.githubusercontent.com/Timvrakas/ASSU-LegalDiff/F2019-Test/constitution.md']}/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
