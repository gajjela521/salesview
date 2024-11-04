import React from 'react';
import { DataChart } from "grommet/components/DataChart"
import { CompanyDataTest } from "../models/CompanyData"

export interface DataChartComponentProps {
    testdata: CompanyDataTest[]; // Expecting the data prop to be of type CompanyDataTest[]
}

export const DataChartComponent:React.FC<DataChartComponentProps>=({testdata})=>{

    return(
<DataChart
              data= {testdata}
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
    )
}

