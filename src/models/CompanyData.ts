// models/CompanyData.ts
export interface CompanyDataTest {
    company: string;
    percent: number;
}

export interface CompanyDataLive {
    date: string;       // Date in ISO format
    company: string;    // Company name
    open: number;       // Opening price
    close: number;      // Closing price
    percent: number;    // Percentage change
}


