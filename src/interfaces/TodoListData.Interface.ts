export interface ITodoListData {
  id: string;
  name: string;
  endDate: string;
  urgency: "More" | "Medium" | "Less";
  type: "Personal" | "Academic" | "Job";
  completed: boolean;
}
