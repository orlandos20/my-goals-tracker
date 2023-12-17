export interface GoalDataCreate {
  id: string | number[];
  title: string;
  description: string;
  deadline: Date;
  reminder?: Date;
  userId: number;
}
