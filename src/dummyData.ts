import { CompanyDataTest } from "./models/CompanyData";

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

  export const pharmaData = [
    { company: 'Sun Pharma', percent: 3.5 },
    { company: 'Cipla', percent: 2.8 },
    { company: 'Dr. Reddy\'s', percent: 4.1 },
    { company: 'Lupin', percent: 1.9 },
    { company: 'Aurobindo Pharma', percent: 2.4 },
    { company: 'Biocon', percent: 1.6 },
    { company: 'Divi\'s Laboratories', percent: 3.0 },
    { company: 'Torrent Pharma', percent: 2.7 },
    { company: 'Zydus Lifesciences', percent: 2.3 },
    { company: 'Glenmark Pharma', percent: 1.8 }
];

export const bankingData = [
    { company: 'HDFC Bank', percent: 1.2 },
    { company: 'ICICI Bank', percent: 1.5 },
    { company: 'Axis Bank', percent: 2.0 },
    { company: 'State Bank of India', percent: 1.8 },
    { company: 'Kotak Mahindra Bank', percent: 1.4 },
    { company: 'IndusInd Bank', percent: 2.5 },
    { company: 'Yes Bank', percent: 1.0 },
    { company: 'Bank of Baroda', percent: 1.7 },
    { company: 'Federal Bank', percent: 1.3 },
    { company: 'IDFC First Bank', percent: 2.2 }
];

export const autoData = [
    { company: 'Maruti Suzuki', percent: 2.9 },
    { company: 'Tata Motors', percent: 3.1 },
    { company: 'Mahindra & Mahindra', percent: 2.4 },
    { company: 'Bajaj Auto', percent: 1.8 },
    { company: 'Hero MotoCorp', percent: 1.6 },
    { company: 'TVS Motor Company', percent: 2.3 },
    { company: 'Ashok Leyland', percent: 2.0 },
    { company: 'Eicher Motors', percent: 3.5 },
    { company: 'Force Motors', percent: 1.9 },
    { company: 'Escorts', percent: 2.7 }
];

export const fmcgData = [
    { company: 'Hindustan Unilever', percent: 1.5 },
    { company: 'ITC', percent: 2.1 },
    { company: 'Nestle India', percent: 1.8 },
    { company: 'Britannia Industries', percent: 2.4 },
    { company: 'Godrej Consumer Products', percent: 1.3 },
    { company: 'Dabur India', percent: 1.9 },
    { company: 'Marico', percent: 1.7 },
    { company: 'Tata Consumer Products', percent: 2.0 },
    { company: 'Colgate-Palmolive', percent: 1.4 },
    { company: 'Procter & Gamble', percent: 1.6 }
];

export const pharmaDataPull = [
    { date: '2024-08-15', company: 'Sun Pharma', open: 800, close: 828, percent: 3.5 },
    { date: '2024-08-16', company: 'Sun Pharma', open: 828, close: 815, percent: -1.6 },
    { date: '2024-08-15', company: 'Cipla', open: 910, close: 935, percent: 2.8 },
    { date: '2024-08-16', company: 'Cipla', open: 935, close: 940, percent: 0.5 },
    { date: '2024-08-15', company: 'Dr. Reddy\'s', open: 4400, close: 4580, percent: 4.1 },
    { date: '2024-08-16', company: 'Dr. Reddy\'s', open: 4580, close: 4500, percent: -1.7 },
    // Additional data for other companies and dates
];

export const bankingDataPull = [
    { date: '2024-08-15', company: 'HDFC Bank', open: 1570, close: 1590, percent: 1.3 },
    { date: '2024-08-16', company: 'HDFC Bank', open: 1590, close: 1585, percent: -0.3 },
    { date: '2024-08-15', company: 'ICICI Bank', open: 900, close: 915, percent: 1.7 },
    { date: '2024-08-16', company: 'ICICI Bank', open: 915, close: 920, percent: 0.5 },
    { date: '2024-08-15', company: 'Axis Bank', open: 820, close: 835, percent: 1.8 },
    { date: '2024-08-16', company: 'Axis Bank', open: 835, close: 828, percent: -0.8 },
    // Additional data for other companies and dates
];

export const autoDataPull = [
    { date: '2024-08-15', company: 'Maruti Suzuki', open: 9200, close: 9468, percent: 2.9 },
    { date: '2024-08-16', company: 'Maruti Suzuki', open: 9468, close: 9425, percent: -0.5 },
    { date: '2024-08-15', company: 'Tata Motors', open: 600, close: 618, percent: 3.0 },
    { date: '2024-08-16', company: 'Tata Motors', open: 618, close: 615, percent: -0.5 },
    { date: '2024-08-15', company: 'Mahindra & Mahindra', open: 1560, close: 1598, percent: 2.4 },
    { date: '2024-08-16', company: 'Mahindra & Mahindra', open: 1598, close: 1580, percent: -1.1 },
    // Additional data for other companies and dates
];


export const fmcgDataPull = [
    { date: '2024-08-15', company: 'Hindustan Unilever', open: 2500, close: 2538, percent: 1.5 },
    { date: '2024-08-16', company: 'Hindustan Unilever', open: 2538, close: 2520, percent: -0.7 },
    { date: '2024-08-15', company: 'ITC', open: 380, close: 388, percent: 2.1 },
    { date: '2024-08-16', company: 'ITC', open: 388, close: 385, percent: -0.8 },
    { date: '2024-08-15', company: 'Nestle India', open: 20000, close: 20360, percent: 1.8 },
    { date: '2024-08-16', company: 'Nestle India', open: 20360, close: 20200, percent: -0.8 },
    // Additional data for other companies and dates
];
