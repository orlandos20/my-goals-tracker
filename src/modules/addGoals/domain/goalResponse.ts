export interface GoalResponse {
  userId: number;
  id: number;
  author: string;
  title: string;
  description: string;
  deadline: Date;
  reminder: Date;
}
