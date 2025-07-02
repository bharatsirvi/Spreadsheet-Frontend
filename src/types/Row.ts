export type RowData = {
  jobRequest: string;
  submitted: string;
  status: "In-process" | "Complete" | "Blocked" | "Need to start";
  submitter: string;
  url: string;
  assigned: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  estValue: number;
};
