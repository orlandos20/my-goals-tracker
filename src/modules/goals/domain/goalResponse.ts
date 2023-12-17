export interface GoalResponse {
  userId: number;
  id: number;
  author: string;
  title: string;
  description: string;
  deadline: Date;
  reminder: Date;
}

export interface GoalErrorResponse {
  message: 'An occur saving the Goal!';
}
