import React from 'react';
import { Topbar } from './global/Topbar';
import { Sidebar } from './global/Sidebar';
import { DataChart, Grommet, Heading, Main, Paragraph } from 'grommet';

function App() {
  const data = [
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

  return (
    <Grommet>
      <div className="app">
        <Topbar />

        <section>
          <Main pad="large">
            <Heading>UpTrend Sectors</Heading>
            <DataChart
              data={data}
              series={[
                { property: 'company', label: 'Company' }, // X-axis
                { property: 'percent', label: 'Growth (%)', render: (value) => `${value}%` } // Y-axis
              ]}
              chart={[
                {
                  type: 'bar',
                  property: 'percent',
                  thickness: 'medium' // Adjusts the width of each bar
                }
              ]}
              axis={{
                x: { property: 'company', granularity: 'medium' },
                y: { property: 'percent', granularity: 'fine' }
              }}
              gap="medium" // Adds space between bars
              offset={{ gap: 'medium' }} // Prevents bars from overlapping
              guide={{ y: true }} // Adds a guide for the Y-axis
              legend
              detail
            />
            <Paragraph>Something about something</Paragraph>
          </Main>
        </section>
        
        <Sidebar />
      </div>
    </Grommet>
  );
}

export default App;
