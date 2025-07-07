export type RowData = {
  jobRequest?: string;
  submitted?: string;
  status?: string;
  submitter?: string;
  url?: string;
  assigned?: string;
  priority?: string;
  dueDate?: string;
  estValue?: number;
  [key: string]: string | number | undefined; 
};
