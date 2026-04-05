export type CaseStatus =
  | "New"
  | "Open"
  | "Pending from Agent"
  | "Pending from Customer"
  | "On Hold"
  | "Closed";

export interface CaseRecord {
  Id: string;
  CaseNumber: string;
  Subject: string;
  Description: string;
  Status: string;
  Owner?: { Name?: string };
  Created_Date_Time__c?: string;
  LastModifiedDate: string;
  Contact?: { Name?: string };
  ContactEmail?: string;
}

export interface CaseRow {
  id: string;
  CaseNumber: string;
  Subject: string;
  Desc: string;
  Status: string;
  CaseOwner: string;
  CreatedAt: string;
  CreatedBy: {
    name: string;
    email: string;
  };
  LastUpdated: string;
}

export interface AgentProductivityItem {
  id: string;
  name: string;
  license: string;
  productivity: number;
}

export interface LicenseOverviewRow {
  license: string;
  studiosUsed: number;
  studiosTotal: number;
  studiosEvol: number;
  agentsUsed: number;
  agentsTotal: number;
  agentsEvol: number;
}

export interface UserActivityRow {
  Id: string;
  User: string;
  "Last Active Date": string;
}
