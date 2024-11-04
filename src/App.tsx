import { HeaderTimeBar } from './global/HeaderMain';
import { Sidebar } from './global/Sidebar';
import { Grommet, Heading, Main, Paragraph } from 'grommet';
import { DataChartComponent } from './components/DataChartComponet';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { CompanyDataTest } from './models/CompanyData';
import { autoData, bankingData, fmcgData, pharmaData } from './dummyData';

export const itData:CompanyDataTest[] = [
  { company: 'TCS', percent: 8.5 }, 
  { company: 'Tech Mahindra', percent: 7.2 },
  { company: 'Infosys', percent: 6.8 },
  { company: 'Wipro', percent: 5.4 },
  { company: 'HCL Technologies', percent: 9.1 },
  { company: 'Mindtree', percent: 8.0 },
  { company: 'L&T Infotech', percent: 6.5 },
  { company: 'Mphasis', percent: 7.0 },
  { company: 'Hexaware Technologies', percent: 4.9 },
  { company: 'Cognizant', percent: 5.6 }
];

function App() {
 
  return (
    <Grommet>
      <div className="app">
        
        <HeaderTimeBar /> {/* should be fixed every time */}
        <div className="app-content">
        <Sidebar />
        <DashboardLayout>
          <Main pad="large">
            <Heading>UpTrend Sectors</Heading>
            <DataChartComponent testdata={itData}/>
            <DataChartComponent testdata={pharmaData}/>
            <DataChartComponent testdata={bankingData}/>
            <DataChartComponent testdata={autoData}/>
            <DataChartComponent testdata={fmcgData}/>
            <Paragraph>Something about something</Paragraph>
          </Main>
          </DashboardLayout>
          </div>
      </div>
    </Grommet>
  );
}

export default App;
