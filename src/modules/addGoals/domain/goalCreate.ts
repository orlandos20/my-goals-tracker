export interface GoalDataCreate {
  title: string;
  description: string;
  deadline: Date;
  reminder?: Date;
  userId: number;
}
